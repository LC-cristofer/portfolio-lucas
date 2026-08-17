'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowIcon } from '@/components/ArrowIcon';

const slides = [
  {
    eyebrow: 'Tecnologia',
    title: 'Produtos digitais que organizam a operação.',
    text: 'Sites, sistemas, dashboards e integrações pensados para reduzir fricção e sustentar crescimento.',
    href: '/tecnologia',
    cta: 'Explorar tecnologia',
    image: 'https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&fm=jpg&q=82&w=2200',
    alt: 'Workspace de desenvolvimento com notebook e código na tela',
    // Fonte: https://unsplash.com/photos/laptop-and-phone-on-a-desk-with-coding-software-open-oYzjGQ7LCVE
  },
  {
    eyebrow: 'Marketing',
    title: 'Comunicação que deixa o valor mais fácil de perceber.',
    text: 'Posicionamento, campanha, conteúdo e presença digital com mensagem clara e direção visual consistente.',
    href: '/marketing',
    cta: 'Explorar marketing',
    image: 'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?auto=format&fit=crop&fm=jpg&q=82&w=2200',
    alt: 'Estação de trabalho de marketing digital com notebook em ambiente organizado',
    // Fonte: https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-desk-Q4iYWsWbR90
  },
  {
    eyebrow: 'Projeto integrado',
    title: 'Estratégia e execução trabalhando na mesma direção.',
    text: 'Quando o problema pede comunicação e tecnologia, a solução nasce integrada — sem remendos entre etapas.',
    href: '/servicos',
    cta: 'Conhecer os serviços',
    image: 'https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&fm=jpg&q=82&w=2200',
    alt: 'Ambiente de desenvolvimento com múltiplas telas, código e planejamento de interface',
    // Fonte: https://unsplash.com/photos/computer-screens-displaying-code-with-neon-lighting-WD7S-Lz12Es
  },
];

export function HomeHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  );

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6200);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);

  return (
    <div
      className="home-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
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
              sizes="(max-width: 900px) calc(100vw - 40px), 58vw"
            />
            <div className="home-carousel__shade" aria-hidden="true" />
            <div className="home-carousel__content">
              <span>{slide.eyebrow}</span>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <Link href={slide.href} tabIndex={index === active ? 0 : -1}>
                {slide.cta} <ArrowIcon />
              </Link>
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
