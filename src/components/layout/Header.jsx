import { useEffect, useRef, useState } from 'react';
import { useAppearance } from '../../hooks/useAppearance.js';

const navigation = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'formacion', label: 'Formación' },
  { id: 'cuaderno', label: 'Cuaderno', count: 15 },
];

function AppearanceControls({ appearance }) {
  return (
    <div className="appearance-controls">
      <button
        className="theme-toggle"
        type="button"
        aria-pressed={appearance?.theme === 'dark'}
        hidden={!appearance}
        onClick={() => window.portfolioAppearance.toggleTheme()}
      >
        <span aria-hidden="true">◐</span> Modo oscuro
      </button>
      <button
        className="palette-toggle"
        type="button"
        aria-pressed={appearance?.palette === 'red'}
        hidden={!appearance}
        onClick={() => window.portfolioAppearance.togglePalette()}
      >
        <span aria-hidden="true"></span> Paleta roja
      </button>
    </div>
  );
}

export function Header() {
  const appearance = useAppearance();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const menuButton = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(event) {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      menuButton.current.focus();
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(entries => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) setActiveSection(target.id);
      }
    }, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });

    for (const section of document.querySelectorAll('main section[id]')) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={appearance ? 'header js-menu' : 'header'}>
      <a className="brand" href="#inicio" aria-label="Zair Ken, inicio">zk<span>.</span></a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="navigation"
        hidden={!appearance}
        ref={menuButton}
        onClick={() => setMenuOpen(open => !open)}
      >
        Menú <span aria-hidden="true">☰</span>
      </button>
      <nav id="navigation" className={menuOpen ? 'open' : undefined} aria-label="Navegación principal">
        {navigation.map(({ id, label, count }) => (
          <a
            key={id}
            href={'#' + id}
            className={activeSection === id ? 'active' : undefined}
            aria-current={activeSection === id ? 'location' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}{count && <> <span className="nav-count">{count}</span></>}
          </a>
        ))}
      </nav>
      <AppearanceControls appearance={appearance} />
      <a className="header-contact" href="#contacto">Conversemos <span aria-hidden="true">↗</span></a>
    </header>
  );
}
