import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const ogSize = { width: 1200, height: 630 };

/** Imagem de compartilhamento (1200×630) gerada no build, sem depender de arquivos externos. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0b0b0d',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, letterSpacing: 2, color: '#6aa9ff' }}>
          {site.role.toUpperCase()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 92, fontWeight: 700, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 38, lineHeight: 1.3, color: '#c9ccd3', maxWidth: 940 }}>
            Sites, sistemas e comunicação que ajudam negócios a operar e vender melhor.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#8b8f98' }}>Curitiba · Projetos remotos e presenciais</div>
      </div>
    ),
    { ...ogSize },
  );
}
