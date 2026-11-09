'use client';

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';

type Variant = 'up' | 'window' | 'wipe' | 'rule';

// Um único IntersectionObserver para todos os blocos da página.
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.visible = 'true';
          observer?.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    );
  }
  return observer;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /**
   * up: sobe poucos pixels e aparece (textos).
   * window: entra com leve escala (telas de produto).
   * wipe: abre de baixo para cima (fotos).
   * rule: só desenha a linha superior do bloco (listas).
   */
  variant?: Variant;
  as?: ElementType;
};

export function Reveal({ children, className = '', delay = 0, variant = 'up', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.dataset.visible = 'true';
      return;
    }

    const io = getObserver();
    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return (
    <Tag ref={ref} className={`reveal reveal--${variant} ${className}`.trim()} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
