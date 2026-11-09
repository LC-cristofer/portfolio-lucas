import type { CSSProperties } from 'react';
import type { Project } from '@/lib/projects';
import { CountUp } from './CountUp';

/** Ordem de entrada dos elementos da prévia (veja .pv-step em product-preview.css). */
const step = (n: number) => ({ '--step': n }) as CSSProperties;

/**
 * Prévias das interfaces, desenhadas em HTML/SVG com dados de exemplo.
 * A linha do gráfico usa pathLength={1} para poder ser "traçada" por CSS (veja product-preview.css).
 */

function EvoVisual() {
  return (
    <div className="product-preview product-preview--evo" role="img" aria-label="Prévia da interface do EVO Gestão, com dados de exemplo">
      <div className="browser-bar">
        <div className="browser-dots"><span /><span /><span /></div>
        <span className="browser-title">EVO Gestão, dashboard</span>
        <span className="browser-status">Dados de exemplo</span>
      </div>
      <div className="evo-preview__body">
        <aside className="preview-sidebar preview-sidebar--light">
          <div className="preview-brand">E</div>
          <span className="preview-nav is-active" />
          <span className="preview-nav" />
          <span className="preview-nav" />
          <span className="preview-nav" />
          <span className="preview-nav" />
        </aside>
        <div className="preview-main preview-main--light">
          <div className="preview-heading-row">
            <div>
              <small>Visão consolidada</small>
              <strong>Dashboard operacional</strong>
            </div>
            <span className="preview-chip">Agosto de 2026</span>
          </div>
          <div className="preview-kpis">
            <div><span>Funcionários</span><strong><CountUp to={24} /></strong><small>dados demo</small></div>
            <div><span>Admissões</span><strong><CountUp to={4} pad={2} /></strong><small>em andamento</small></div>
            <div><span>Unidades</span><strong><CountUp to={6} pad={2} /></strong><small>ambiente demo</small></div>
          </div>
          <div className="preview-grid">
            <div className="preview-panel preview-panel--chart">
              <div className="preview-panel__title"><span>Presença mensal</span><small>Últimos 6 meses</small></div>
              <svg viewBox="0 0 520 180" preserveAspectRatio="none" aria-hidden="true">
                <path className="area" d="M0 146 C45 142 63 106 103 116 C143 126 163 67 206 80 C248 94 269 54 313 69 C360 84 397 40 439 52 C473 62 495 39 520 30 L520 180 L0 180Z" fill="currentColor" fillOpacity="0.09" />
                <path className="draw" pathLength={1} d="M0 146 C45 142 63 106 103 116 C143 126 163 67 206 80 C248 94 269 54 313 69 C360 84 397 40 439 52 C473 62 495 39 520 30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <div className="chart-axis"><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span><span>Jul</span><span>Ago</span></div>
            </div>
            <div className="preview-panel preview-panel--list">
              <div className="preview-panel__title"><span>Próximas ações</span><small>Prioridades</small></div>
              <div className="task-row"><i /><span>Revisar admissões</span><b><CountUp to={3} pad={2} /></b></div>
              <div className="task-row"><i /><span>Documentos pendentes</span><b><CountUp to={5} pad={2} /></b></div>
              <div className="task-row"><i /><span>Alertas por unidade</span><b><CountUp to={2} pad={2} /></b></div>
              <div className="task-row"><i /><span>Relatórios mensais</span><b><CountUp to={1} pad={2} /></b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PoupemeVisual() {
  return (
    <div className="product-preview product-preview--poupeme" role="img" aria-label="Prévia da interface do POUPEME, com dados de exemplo">
      <div className="browser-bar browser-bar--dark">
        <div className="browser-dots"><span /><span /><span /></div>
        <span className="browser-title">POUPEME, dashboard</span>
        <span className="browser-status">Dados de exemplo</span>
      </div>
      <div className="poupeme-preview__body">
        <aside className="preview-sidebar preview-sidebar--dark">
          <div className="preview-brand preview-brand--mint">P</div>
          <span className="preview-nav is-active" />
          <span className="preview-nav" />
          <span className="preview-nav" />
          <span className="preview-nav" />
        </aside>
        <div className="preview-main preview-main--dark">
          <div className="preview-heading-row preview-heading-row--dark">
            <div>
              <small>Visão financeira</small>
              <strong>Resumo do mês</strong>
            </div>
            <span className="preview-chip preview-chip--dark">Agosto de 2026</span>
          </div>
          <div className="preview-kpis preview-kpis--dark">
            <div><span>Saldo</span><strong>R$ <CountUp to={8.4} decimals={1} />k</strong><small>+12% no mês</small></div>
            <div><span>Entradas</span><strong>R$ <CountUp to={12.8} decimals={1} />k</strong><small>receitas</small></div>
            <div><span>Saídas</span><strong>R$ <CountUp to={4.4} decimals={1} />k</strong><small>despesas</small></div>
          </div>
          <div className="preview-grid">
            <div className="preview-panel preview-panel--dark preview-panel--chart">
              <div className="preview-panel__title"><span>Evolução financeira</span><small>Últimos 6 meses</small></div>
              <svg viewBox="0 0 520 180" preserveAspectRatio="none" aria-hidden="true">
                <path className="area" d="M0 150 C42 148 67 120 108 126 C150 132 168 94 210 104 C253 115 279 61 326 80 C371 98 401 48 447 60 C483 68 500 37 520 28 L520 180 L0 180Z" fill="currentColor" fillOpacity="0.1" />
                <path className="draw" pathLength={1} d="M0 150 C42 148 67 120 108 126 C150 132 168 94 210 104 C253 115 279 61 326 80 C371 98 401 48 447 60 C483 68 500 37 520 28" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <div className="chart-axis"><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span><span>Jul</span><span>Ago</span></div>
            </div>
            <div className="preview-panel preview-panel--dark preview-panel--donut">
              <div className="preview-panel__title"><span>Por categoria</span><small>Despesas</small></div>
              <div className="donut-ring" aria-hidden="true" />
              <div className="donut-legend">
                <span><i className="legend-dot legend-dot--a" />Casa</span>
                <span><i className="legend-dot legend-dot--b" />Lazer</span>
                <span><i className="legend-dot legend-dot--c" />Outros</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EspressoVisual() {
  return (
    <div className="product-preview product-preview--espresso" role="img" aria-label="Prévia ilustrativa do site da Espresso Idiomas">
      <div className="browser-bar browser-bar--warm">
        <div className="browser-dots"><span /><span /><span /></div>
        <span className="browser-title">espressoidiomas.com</span>
        <span className="browser-status">Prévia ilustrativa</span>
      </div>
      <div className="espresso-preview__body">
        <div className="es-nav pv-step" style={step(0)}>
          <b>Espresso</b>
          <span /><span /><span />
          <i />
        </div>
        <div className="es-hero">
          <div className="es-hero__text">
            <strong className="pv-step" style={step(1)}>Assista uma aula online.</strong>
            <strong className="pv-step" style={step(2)}>Apaixone-se pela metodologia.</strong>
            <span className="es-bar pv-step" style={step(3)} />
            <span className="es-bar es-bar--short pv-step" style={step(4)} />
            <i className="es-button pv-step" style={step(5)} />
          </div>
          <div className="es-hero__art pv-step" style={step(3)}>
            <span className="es-play" />
            <span className="es-card es-card--a" />
            <span className="es-card es-card--b" />
          </div>
        </div>
      </div>
    </div>
  );
}

const networks = ['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'X', 'Threads'];

function SocialAgentVisual() {
  return (
    <div className="product-preview product-preview--agent" role="img" aria-label="Diagrama da estrutura do Social Agent V2: uma agência, vários clientes e seis redes sociais">
      <div className="browser-bar browser-bar--dark">
        <div className="browser-dots"><span /><span /><span /></div>
        <span className="browser-title">Social Agent V2, estrutura</span>
        <span className="browser-status">Fase 0</span>
      </div>
      <div className="agent-preview__body">
        <div className="preview-main preview-main--dark">
          <div className="preview-heading-row preview-heading-row--dark">
            <div>
              <small>Multi-tenant</small>
              <strong>Uma agência, vários clientes, seis redes</strong>
            </div>
          </div>
          <div className="sa-tree">
            <div className="sa-col">
              <span className="sa-chip sa-chip--root pv-step" style={step(1)}>Agência</span>
            </div>
            <div className="sa-link" aria-hidden="true"><i /><i /><i /></div>
            <div className="sa-col sa-stack">
              <span className="sa-chip pv-step" style={step(4)}>Cliente A</span>
              <span className="sa-chip pv-step" style={step(5)}>Cliente B</span>
              <span className="sa-chip pv-step" style={step(6)}>Cliente C</span>
            </div>
            <div className="sa-link sa-link--merge" aria-hidden="true"><i /><i /><i /></div>
            <div className="sa-col sa-networks">
              {networks.map((name, index) => (
                <span key={name} className="sa-chip sa-chip--net pv-step" style={step(13 + index * 0.6)}>{name}</span>
              ))}
            </div>
          </div>
          <p className="sa-note pv-step" style={step(17)}>Cada rede recebe uma variante própria do conteúdo.</p>
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ project }: { project: Project }) {
  switch (project.slug) {
    case 'evo-gestao':
      return <EvoVisual />;
    case 'poupeme':
      return <PoupemeVisual />;
    case 'espresso':
      return <EspressoVisual />;
    case 'social-agent':
      return <SocialAgentVisual />;
  }
}
