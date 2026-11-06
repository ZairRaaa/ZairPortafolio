import { useRef } from 'react';
import { weeks } from '../../data/weeks.js';
import { useAppearance } from '../../hooks/useAppearance.js';
import { AppearanceControls } from '../layout/AppearanceControls.jsx';
import { WeekIndex } from './WeekIndex.jsx';
import { WeekPagination } from './WeekPagination.jsx';

export function WeekLayout({ week, title, hero, sections, indexNote, children }) {
  const appearance = useAppearance();
  const content = useRef(null);

  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <header className="header">
        <a className="brand" href="../../../index.html" aria-label="Zair Ken, inicio">zk<span>.</span></a>
        <nav aria-label="Navegación principal">
          <a href="../../../index.html">Portafolio</a>
          <a href="../index.html">Cuaderno<span className="nav-count">{weeks.length}</span></a>
        </nav>
        <AppearanceControls appearance={appearance} />
      </header>
      <main id="contenido" className="wrap">
        <nav className="breadcrumbs" aria-label="Ruta de la página">
          <a href="../index.html">Cuaderno</a><span aria-hidden="true">/</span><span aria-current="page">{week.label}</span>
        </nav>
        {hero}
        <div className="notebook-layout">
          <WeekIndex items={sections} contentRef={content}>{indexNote}</WeekIndex>
          <div className="week-content" ref={content}>
            {children}
            <WeekPagination week={week} />
          </div>
        </div>
      </main>
      <footer className="wrap footer">
        <a className="brand" href="../../../index.html" aria-label="Zair Ken, inicio">zk<span>.</span></a>
        <p>Zair Ken Rojas Cerron<br /><span>{week.label + ' · ' + title}</span></p>
        <a href="#contenido">Volver arriba ↑</a>
      </footer>
    </>
  );
}
