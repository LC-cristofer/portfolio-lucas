import { site } from '@/lib/site';

type Props = {
  compact?: boolean;
  light?: boolean;
};

export function SocialLinks({ compact = false, light = false }: Props) {
  const links = [
    { label: 'Instagram', href: site.instagram },
    { label: 'LinkedIn', href: site.linkedin },
    { label: 'GitHub', href: site.github },
  ];

  return (
    <div className={`social-links ${compact ? 'social-links--compact' : ''} ${light ? 'social-links--light' : ''}`} aria-label="Redes sociais">
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
