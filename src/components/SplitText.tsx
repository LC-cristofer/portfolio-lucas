import type { CSSProperties } from 'react';

/**
 * Título que sobe palavra por palavra, atrás de uma máscara. Só CSS: toca no carregamento,
 * sem esperar JavaScript. O texto completo fica em aria-label para leitores de tela.
 */
export function SplitText({ text, startAt = 0 }: { text: string; startAt?: number }) {
  const words = text.split(' ');
  return (
    <span className="split" aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden="true">
          <span className="split__word">
            <span style={{ '--i': index + startAt } as CSSProperties}>{word}</span>
          </span>
          {index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}
