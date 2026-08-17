from pathlib import Path
import json, subprocess, sys, base64
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
SITE=ROOT/'qa'/'site'
SCREENS=ROOT/'qa'/'screens'
SCREENS.mkdir(exist_ok=True)
subprocess.run([sys.executable, str(ROOT/'qa'/'generate_static.py')], check=True)

routes={'home':'index.html','projetos':'projetos.html','tecnologia':'tecnologia.html','marketing':'marketing.html','sobre':'sobre.html','contato':'contato.html','evo':'evo.html','poupeme':'poupeme.html','404':'404.html'}
viewports={'desktop':(1440,900),'standard':(1366,768),'laptop':(1024,768),'tablet':(768,1024),'mobile430':(430,932),'mobile':(390,844)}
css=(SITE/'styles.css').read_text(encoding='utf-8')
img_data={}
for name in ['lucas-hero.webp','lucas-about.webp']:
    raw=(SITE/'images'/name).read_bytes()
    img_data[name]='data:image/webp;base64,'+base64.b64encode(raw).decode('ascii')

def inline_html(file):
    html=(SITE/file).read_text(encoding='utf-8')
    html=html.replace('<link rel="stylesheet" href="styles.css">', f'<style>{css}</style>')
    for name,data in img_data.items():
        html=html.replace(f'src="images/{name}"', f'src="{data}"')
    return html

results=[]
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='/usr/bin/chromium', headless=True, args=['--no-sandbox'])
    for route,file in routes.items():
      for label,(w,h) in viewports.items():
        page=browser.new_page(viewport={'width':w,'height':h})
        errors=[]
        page.on('console', lambda msg: errors.append(f'console:{msg.type}:{msg.text}') if msg.type=='error' else None)
        page.on('pageerror', lambda err: errors.append(f'pageerror:{err}'))
        page.set_content(inline_html(file), wait_until='load')
        page.wait_for_timeout(80)
        metrics=page.evaluate('''() => {
          const visible = [...document.querySelectorAll('body *')].filter(el => {
            const s=getComputedStyle(el), r=el.getBoundingClientRect();
            return s.display!=='none' && s.visibility!=='hidden' && r.width>0 && r.height>0;
          });
          const insideHorizontalScroller = el => {
            let node=el.parentElement;
            while(node && node!==document.body){
              const s=getComputedStyle(node);
              if((s.overflowX==='auto' || s.overflowX==='scroll') && node.scrollWidth > node.clientWidth) return true;
              node=node.parentElement;
            }
            return false;
          };
          const offenders=visible.filter(el => {
            const r=el.getBoundingClientRect();
            const out=r.right > document.documentElement.clientWidth + 2 || r.left < -2;
            return out && !insideHorizontalScroller(el);
          }).slice(0,8).map(el => ({tag:el.tagName,cls:String(el.className),left:Math.round(el.getBoundingClientRect().left),right:Math.round(el.getBoundingClientRect().right)}));
          const h1=document.querySelector('h1');
          const imgs=[...document.images].map(i => ({src:i.getAttribute('alt'),nw:i.naturalWidth,nh:i.naturalHeight}));
          const h1Count=document.querySelectorAll('h1').length;
          const interactives=[...document.querySelectorAll('a,button')].filter(el => { const s=getComputedStyle(el); return s.display!=='none' && s.visibility!=='hidden'; });
          const missingNames=interactives.filter(el => !(el.getAttribute('aria-label') || el.textContent || '').trim()).map(el => el.tagName);
          const fields=[...document.querySelectorAll('input,select,textarea')];
          const unlabeled=fields.filter(el => !el.closest('label') && !el.getAttribute('aria-label') && !(el.id && document.querySelector(`label[for=\"${el.id}\"]`))).map(el => el.getAttribute('name'));
          const missingAlt=imgs.filter(i => !i.src || !i.src.trim()).length;
          return {
            scrollWidth:document.documentElement.scrollWidth,
            clientWidth:document.documentElement.clientWidth,
            offenders,
            h1: h1 ? {text:h1.textContent.trim(), size:parseFloat(getComputedStyle(h1).fontSize), rect:{top:h1.getBoundingClientRect().top,bottom:h1.getBoundingClientRect().bottom,left:h1.getBoundingClientRect().left,right:h1.getBoundingClientRect().right}} : null,
            imgs,
            bodyHeight:document.body.scrollHeight, h1Count, missingNames, unlabeled, missingAlt, mainCount:document.querySelectorAll('main').length
          };
        }''')
        checks={
          'no_horizontal_overflow': metrics['scrollWidth'] <= metrics['clientWidth']+1 and not metrics['offenders'],
          'has_h1': metrics['h1'] is not None,
          'one_h1': metrics['h1Count']==1,
          'accessible_names': len(metrics['missingNames'])==0,
          'form_fields_labeled': len(metrics['unlabeled'])==0,
          'image_alt_text': metrics['missingAlt']==0,
          'one_main_landmark': metrics['mainCount']==1,
          'h1_not_absurd': metrics['h1'] is None or metrics['h1']['size'] <= (92 if w>=1024 else 64),
          'images_loaded': all(i['nw']>0 and i['nh']>0 for i in metrics['imgs']),
          'no_console_errors': len(errors)==0,
          'no_mobile_horizontal_carousel': (w > 768) or page.evaluate("() => [...document.querySelectorAll('.marketing-hero-system,.marketing-study__track')].every(el => el.scrollWidth <= el.clientWidth + 1)"),
        }
        if label in ('mobile','mobile430'):
          toggle=page.locator('.menu-toggle')
          if toggle.count():
            toggle.click()
            checks['mobile_menu_opens']=page.locator('.mobile-menu').evaluate("el => el.classList.contains('is-open')")
            toggle.click()
            page.wait_for_timeout(320)
            checks['mobile_menu_closes']=not page.locator('.mobile-menu').evaluate("el => el.classList.contains('is-open')")
        if route=='contato' and label=='desktop':
          page.locator('.contact-form button').click()
          checks['form_validation']= 'Preencha' in page.locator('.contact-form__footer p').inner_text()
          page.locator('input[name=name]').fill('Lucas Teste')
          page.locator('input[name=email]').fill('teste@example.com')
          page.locator('select[name=project]').select_option(label='Site / landing page')
          page.locator('textarea[name=message]').fill('Teste de fluxo do formulário.')
          page.locator('.contact-form button').click()
          checks['form_valid_state']= 'pronto' in page.locator('.contact-form__footer p').inner_text().lower()
        shot=SCREENS/f'{route}-{label}.png'
        page.screenshot(path=str(shot), full_page=True)
        passed=all(checks.values())
        results.append({'route':route,'viewport':label,'size':[w,h],'checks':checks,'passed':passed,'metrics':metrics,'errors':errors,'screenshot':str(shot.relative_to(ROOT))})
        page.close()
    browser.close()

(ROOT/'qa'/'browser-results.json').write_text(json.dumps(results,indent=2,ensure_ascii=False),encoding='utf-8')
summary={'total':len(results),'passed':sum(1 for r in results if r['passed']),'failed':sum(1 for r in results if not r['passed'])}
print(json.dumps(summary,ensure_ascii=False))
if summary['failed']:
  for r in results:
    if not r['passed']:
      print('FAIL',r['route'],r['viewport'],{k:v for k,v in r['checks'].items() if not v},r['metrics']['offenders'])
  sys.exit(1)
