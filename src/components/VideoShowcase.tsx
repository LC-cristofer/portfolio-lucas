import Image from 'next/image';

export function VideoShowcase() {
  const rawVideoUrl = process.env.NEXT_PUBLIC_INTRO_VIDEO_URL?.trim();
  const videoUrl = rawVideoUrl && (rawVideoUrl.startsWith('/') || rawVideoUrl.startsWith('https://')) ? rawVideoUrl : undefined;

  if (videoUrl) {
    return (
      <div className="video-showcase">
        <video
          className="video-showcase__video"
          controls
          playsInline
          preload="metadata"
          src={videoUrl}
          aria-label="Vídeo de apresentação de Lucas Cristofer"
        />
      </div>
    );
  }

  return (
    <div className="video-showcase video-showcase--placeholder" aria-label="Área de apresentação em vídeo">
      <div className="video-showcase__poster">
        <Image src="/images/lucas-about.webp" alt="Lucas Cristofer" fill sizes="(max-width: 900px) 100vw, 58vw" />
        <div className="video-showcase__overlay" />
        <div className="video-showcase__content">
          <div>
            <small>APRESENTAÇÃO EM VÍDEO</small>
            <strong>Uma conversa direta sobre meu trabalho e meu processo.</strong>
            <p>Vídeo em preparação.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
