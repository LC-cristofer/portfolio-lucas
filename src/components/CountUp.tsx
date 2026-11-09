'use client';

import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  to: number;
  /** Zeros à esquerda para inteiros (ex.: 4 com pad=2 vira "04"). */
  pad?: number;
  /** Casas decimais; usa vírgula como separador. */
  decimals?: number;
  duration?: number;
};

function format(value: number, pad: number, decimals: number) {
  if (decimals > 0) return value.toFixed(decimals).replace('.', ',');
  return String(Math.round(value)).padStart(pad, '0');
}

/**
 * Número que sobe de 0 até o valor quando entra na tela. Sem JavaScript ou com movimento
 * reduzido, mostra o valor final direto.
 */
export function CountUp({ to, pad = 0, decimals = 0, duration = 1300 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setValue(0);
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setValue(to * (1 - Math.pow(1 - t, 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return <span ref={ref}>{format(value, pad, decimals)}</span>;
}
