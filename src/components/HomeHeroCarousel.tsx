'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowIcon } from '@/components/ArrowIcon';

const slides = [
  {
    eyebrow: 'Tecnologia',
    title: 'Tecnologia que sustenta o negócio.',
    text: 'Sites, sistemas, dashboards, integrações e automações para organizar operação, reduzir fricção e construir uma base digital mais profissional.',
    href: '/tecnologia',
    cta: 'Explorar tecnologia',
    secondaryHref: '/projetos',
    secondaryCta: 'Ver portfólio',
    image: 'https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&fm=jpg&q=82&w=2200',
    alt: 'Workspace de desenvolvimento com notebook e código na tela',
  },
  {
    eyebrow: 'Marketing',
    title: 'Comunicação que deixa o valor mais fácil de perceber.',
    text: 'Posicionamento, campanha, conteúdo e presença digital com mensagem clara e direção visual consistente — sem depender de comunicação genérica.',
    href: '/marketing',
    cta: 'Explorar marketing',
    secondaryHref: '/projetos',
    secondaryCta: 'Ver portfólio',
    image: 'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?auto=format&fit=crop&fm=jpg&q=82&w=2200',
    alt: 'Estação de trabalho de marketing digital com notebook em ambiente organizado',
  },
  {
    eyebrow: 'Projeto integrado',
    title: 'Estratégia e execução trabalhando na mesma direção.',
    text: 'Quando o problema pede comunicação e tecnologia, mensagem, experiência e desenvolvimento são pensados juntos para evitar remendos entre etapas.',
    href: '/servicos',
    cta: 'Conhecer os serviços',
    secondaryHref: '/contato',
    secondaryCta: 'Falar sobre um projeto',
    image: 'https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&fm=jpg&q=82&w=2200',
    alt: 'Ambiente de desenvolvimento com múltiplas telas, código e planejamento de interface',
  },
];

export function HomeHeroCarousel() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const reduceMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  );

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [active, reduceMotion]);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) > 48) {
      goTo(active + (distance < 0 ? 1 : -1));
    }
  };

  return (
    <div
      className="home-carousel home-carousel--hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Destaques de tecnologia, marketing e projetos integrados"
    >
      <div className="home-carousel__viewport">
        {slides.map((slide, index) => (
          <article
            className={`home-carousel__slide ${index === active ? 'is-active' : ''}`}
            aria-hidden={index !== active}
            key={slide.title}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 900px) calc(100vw - 40px), 1280px"
            />
            <div className="home-carousel__shade" aria-hidden="true" />
            <div className="home-carousel__content">
              <span>{slide.eyebrow}</span>
              {index === 0 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}
              <p>{slide.text}</p>
              <div className="home-carousel__actions">
                <Link className="home-carousel__primary" href={slide.href} tabIndex={index === active ? 0 : -1}>
                  {slide.cta} <ArrowIcon />
                </Link>
                <Link className="home-carousel__secondary" href={slide.secondaryHref} tabIndex={index === active ? 0 : -1}>
                  {slide.secondaryCta} <ArrowIcon />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="home-carousel__controls">
        <button type="button" onClick={() => goTo(active - 1)} aria-label="Banner anterior">←</button>
        <div className="home-carousel__dots" aria-label="Selecionar banner">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === active ? 'is-active' : ''}
              aria-label={`Mostrar: ${slide.eyebrow}`}
              aria-pressed={index === active}
              onClick={() => goTo(index)}
              key={slide.eyebrow}
            />
          ))}
        </div>
        <button type="button" onClick={() => goTo(active + 1)} aria-label="Próximo banner">→</button>
      </div>
    </div>
  );
}
