import { site } from '@/lib/site';

export function SocialLinks({ light = false }: { light?: boolean }) {
  const links = [
    { label: 'Instagram', href: site.instagram },
    { label: 'LinkedIn', href: site.linkedin },
    { label: 'GitHub', href: site.github },
  ];

  return (
    <ul className={`social-links${light ? ' social-links--light' : ''}`} aria-label="Redes sociais">
      {links.map((link) => (
        <li key={link.label}>
          <a className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
        </li>
      ))}
    </ul>
  );
}
