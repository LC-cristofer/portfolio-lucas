'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

type AutoCarouselProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interval?: number;
  mobileQuery?: string;
};

export function AutoCarousel({
  children,
  interval = 3800,
  mobileQuery = '(max-width: 768px)',
  ...props
}: AutoCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const mobile = window.matchMedia(mobileQuery);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: number | undefined;
    let restartTimer: number | undefined;

    const items = () => Array.from(container.children) as HTMLElement[];

    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
    };

    const nearestIndex = () => {
      const slides = items();
      if (!slides.length) return 0;
      const containerLeft = container.getBoundingClientRect().left;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.getBoundingClientRect().left - containerLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    const goTo = (index: number) => {
      const slides = items();
      const target = slides[index];
      if (!target) return;

      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const left = container.scrollLeft + targetRect.left - containerRect.left;

      container.scrollTo({ left, behavior: 'smooth' });
    };

    const tick = () => {
      const slides = items();
      if (slides.length < 2) return;
      const current = nearestIndex();
      goTo((current + 1) % slides.length);
    };

    const start = () => {
      stop();
      if (!mobile.matches || reducedMotion.matches || items().length < 2) return;
      timer = window.setInterval(tick, interval);
    };

    const pauseAfterInteraction = () => {
      stop();
      if (restartTimer) window.clearTimeout(restartTimer);
      restartTimer = window.setTimeout(start, 6500);
    };

    start();

    container.addEventListener('pointerdown', pauseAfterInteraction, { passive: true });
    container.addEventListener('touchstart', pauseAfterInteraction, { passive: true });
    mobile.addEventListener('change', start);
    reducedMotion.addEventListener('change', start);

    return () => {
      stop();
      if (restartTimer) window.clearTimeout(restartTimer);
      container.removeEventListener('pointerdown', pauseAfterInteraction);
      container.removeEventListener('touchstart', pauseAfterInteraction);
      mobile.removeEventListener('change', start);
      reducedMotion.removeEventListener('change', start);
    };
  }, [interval, mobileQuery]);

  return <div ref={ref} {...props}>{children}</div>;
}
