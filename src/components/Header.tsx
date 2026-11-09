'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/projetos', label: 'Portfólio' },
  { href: '/tecnologia', label: 'Tecnologia' },
  { href: '/marketing', label: 'Marketing' },
  { href: '/sobre', label: 'Sobre' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="wordmark" href="/" aria-label="Lucas Cristofer — página inicial">
          <span>Lucas Cristofer</span>
          <small>Marketing & Tecnologia</small>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link className={pathname === item.href ? 'is-active' : ''} key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="header-cta" href="/contato">Contato</Link>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav className="shell mobile-menu__nav" aria-label="Navegação mobile">
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link className="button button--primary" href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
