export function MarketingStudy() {
  return (
    <div className="marketing-study" aria-label="Estudo conceitual de campanha de inclusão">
      <div className="marketing-study__header">
        <span>PROJETO CONCEITUAL · CAMPANHA INSTITUCIONAL</span>
        <span>3 aplicações</span>
      </div>
      <div className="marketing-study__track" role="list" aria-label="Aplicações da campanha">
        <article className="study-slide study-slide--poster" role="listitem">
          <small>KEY VISUAL</small>
          <strong>Incluir começa por abrir espaço.</strong>
          <p>Mensagem central para apresentar a campanha com clareza e linguagem humana.</p>
          <div className="study-shapes" aria-hidden="true"><i /><i /><i /></div>
          <span className="study-signature">institucional · impresso · digital</span>
        </article>

        <article className="study-slide study-slide--social" role="listitem">
          <small>SOCIAL / 01</small>
          <strong>Escutar.<br />Adaptar.<br />Incluir.</strong>
          <p>Uma peça direta para transformar princípio em comportamento.</p>
          <span className="study-slide__number">01 / 03</span>
        </article>

        <article className="study-slide study-slide--carousel" role="listitem">
          <small>CARROSSEL / 02</small>
          <div className="study-carousel-viewport" aria-label="Carrossel animado com três mensagens">
            <div className="study-carousel-frame study-carousel-frame--one">
              <strong>Participação não é detalhe.</strong>
              <p>É parte da experiência — e precisa aparecer na comunicação.</p>
            </div>
            <div className="study-carousel-frame study-carousel-frame--two">
              <strong>Acesso começa na comunicação.</strong>
              <p>Informação clara reduz barreiras antes mesmo do primeiro contato.</p>
            </div>
            <div className="study-carousel-frame study-carousel-frame--three">
              <strong>Incluir também é ouvir.</strong>
              <p>Feedback muda decisões quando participação faz parte do processo.</p>
            </div>
          </div>
          <div className="study-carousel__footer" aria-hidden="true"><i /><i /><i /></div>
        </article>
      </div>
      <p className="marketing-study__hint">No celular, deslize para ver as peças.</p>
    </div>
  );
}
