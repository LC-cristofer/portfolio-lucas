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
          justifyContent: 'flex-end',
          padding: '80px',
          background: '#13233a',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, color: '#8fb4ff', marginBottom: 20 }}>{site.role}</div>
        <div style={{ display: 'flex', fontSize: 104, fontWeight: 700, lineHeight: 1.02 }}>{site.name}</div>
        <div style={{ display: 'flex', marginTop: 32, fontSize: 38, lineHeight: 1.3, color: '#c4cfe0', maxWidth: 900 }}>
          {site.tagline}
        </div>
        <div style={{ display: 'flex', marginTop: 48, fontSize: 28, color: '#8693a8' }}>{site.city}, projetos remotos e presenciais</div>
      </div>
    ),
    { ...ogSize },
  );
}
