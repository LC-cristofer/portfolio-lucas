'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { features, site } from '@/lib/site';

const nav = [
  { href: '/projetos', label: 'Projetos' },
  { href: '/tecnologia', label: 'Serviços' },
  ...(features.marketing ? [{ href: '/marketing', label: 'Marketing' }] : []),
  { href: '/sobre', label: 'Sobre' },
];

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-menu-open' : ''}`}>
      <div className="shell site-header__inner">
        <Link className="wordmark" href="/" aria-label="Lucas Cristofer, página inicial">
          Lucas Cristofer
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link
              className={isActive(pathname, item.href) ? 'is-active' : ''}
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link className="header-cta" href="/contato">Contato</Link>
        </nav>

        <button
          type="button"
          className={`menu-toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav className="shell mobile-menu__nav" aria-label="Navegação mobile">
          {[...nav, { href: '/contato', label: 'Contato' }].map((item, index) => (
            <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1} style={{ '--i': index } as React.CSSProperties}>
              {item.label}
            </Link>
          ))}
          <a className="mobile-menu__mail" href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>{site.email}</a>
        </nav>
      </div>
    </header>
  );
}
