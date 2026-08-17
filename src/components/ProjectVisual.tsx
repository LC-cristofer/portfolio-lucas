import type { Project } from '@/lib/projects';

function EvoVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`product-preview product-preview--evo ${compact ? 'is-compact' : ''}`} aria-label="Prévia visual da interface do EVO Gestão">
      <div className="browser-bar">
        <div className="browser-dots"><span /><span /><span /></div>
        <span className="browser-title">EVO Gestão · Dashboard</span>
        <span className="browser-status">Dados fictícios</span>
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
            <span className="preview-chip">Agosto · 2026</span>
          </div>
          <div className="preview-kpis">
            <div><span>Funcionários</span><strong>24</strong><small>dados demo</small></div>
            <div><span>Admissões</span><strong>04</strong><small>em andamento</small></div>
            <div><span>Unidades</span><strong>06</strong><small>ambiente demo</small></div>
          </div>
          <div className="preview-grid">
            <div className="preview-panel preview-panel--chart">
              <div className="preview-panel__title"><span>Presença mensal</span><small>Últimos 6 meses</small></div>
              <svg viewBox="0 0 520 180" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="evoFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1967ff" stopOpacity="0.24" />
                    <stop offset="100%" stopColor="#1967ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 146 C45 142 63 106 103 116 C143 126 163 67 206 80 C248 94 269 54 313 69 C360 84 397 40 439 52 C473 62 495 39 520 30 L520 180 L0 180Z" fill="url(#evoFill)" />
                <path d="M0 146 C45 142 63 106 103 116 C143 126 163 67 206 80 C248 94 269 54 313 69 C360 84 397 40 439 52 C473 62 495 39 520 30" fill="none" stroke="#1967ff" strokeWidth="5" strokeLinecap="round" />
              </svg>
              <div className="chart-axis"><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span><span>Jul</span><span>Ago</span></div>
            </div>
            <div className="preview-panel preview-panel--list">
              <div className="preview-panel__title"><span>Próximas ações</span><small>Prioridades</small></div>
              <div className="task-row"><i /><span>Revisar admissões</span><b>03</b></div>
              <div className="task-row"><i /><span>Documentos pendentes</span><b>05</b></div>
              <div className="task-row"><i /><span>Alertas por unidade</span><b>02</b></div>
              <div className="task-row"><i /><span>Relatórios mensais</span><b>01</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PoupemeVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`product-preview product-preview--poupeme ${compact ? 'is-compact' : ''}`} aria-label="Prévia visual da interface do POUPEME">
      <div className="browser-bar browser-bar--dark">
        <div className="browser-dots"><span /><span /><span /></div>
        <span className="browser-title">POUPEME · Dashboard</span>
        <span className="browser-status">Produto real</span>
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
            <span className="preview-chip preview-chip--dark">Agosto · 2026</span>
          </div>
          <div className="preview-kpis preview-kpis--dark">
            <div><span>Saldo</span><strong>R$ 8,4k</strong><small>+12% no mês</small></div>
            <div><span>Entradas</span><strong>R$ 12,8k</strong><small>receitas</small></div>
            <div><span>Saídas</span><strong>R$ 4,4k</strong><small>despesas</small></div>
          </div>
          <div className="preview-grid">
            <div className="preview-panel preview-panel--dark preview-panel--chart">
              <div className="preview-panel__title"><span>Evolução financeira</span><small>Últimos 6 meses</small></div>
              <svg viewBox="0 0 520 180" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="poupemeFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#36e3b5" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#36e3b5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 150 C42 148 67 120 108 126 C150 132 168 94 210 104 C253 115 279 61 326 80 C371 98 401 48 447 60 C483 68 500 37 520 28 L520 180 L0 180Z" fill="url(#poupemeFill)" />
                <path d="M0 150 C42 148 67 120 108 126 C150 132 168 94 210 104 C253 115 279 61 326 80 C371 98 401 48 447 60 C483 68 500 37 520 28" fill="none" stroke="#36e3b5" strokeWidth="5" strokeLinecap="round" />
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

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return project.slug === 'evo-gestao' ? <EvoVisual compact={compact} /> : <PoupemeVisual compact={compact} />;
}
