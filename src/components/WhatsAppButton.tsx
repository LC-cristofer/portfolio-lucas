import { site } from '@/lib/site';

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-fab"
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com Lucas Cristofer no WhatsApp: ${site.whatsappNumber}`}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16.1 3.2A12.6 12.6 0 0 0 5.3 22.4L3.6 28.7l6.5-1.7a12.6 12.6 0 1 0 6-23.8Zm0 22.9c-2 0-4-.6-5.6-1.6l-.4-.2-3.8 1 1-3.7-.3-.4a10.3 10.3 0 1 1 9.1 4.9Zm5.7-7.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-2.1-1-3.5-1.9-4.9-4.3-.4-.7.4-.7 1-2.2.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.6-.5-.9-.5h-.8c-.3 0-.6.1-1 .5-.3.3-1.3 1.3-1.3 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.3 6.8 6 .9.4 1.7.6 2.3.8 1 .3 1.8.3 2.5.2.8-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.6-.5Z"/>
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
