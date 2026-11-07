import { useRef } from 'react';
import { EvidenceGallery } from '../../components/gallery/EvidenceGallery.jsx';
import { EvidenceViewer } from '../../components/gallery/EvidenceViewer.jsx';
import { AppearanceControls } from '../../components/layout/AppearanceControls.jsx';
import { ConstellationDemo } from '../../components/notebook/ConstellationDemo.jsx';
import { WeekIndex } from '../../components/notebook/WeekIndex.jsx';
import { WeekPagination } from '../../components/notebook/WeekPagination.jsx';
import { classroomEvidence, orbitEvidence } from '../../data/week-four-evidence.js';
import { weeks } from '../../data/weeks.js';
import { useAppearance } from '../../hooks/useAppearance.js';

const indexItems = [
  { id: 'recorrido', label: '01 · El recorrido' },
  { id: 'aula-virtual', label: '02 · Aula Virtual (Grupal)' },
  { id: 'orbita-canvas', label: '03 · Órbita (Individual)' },
  { id: 'reflexion', label: '04 · Lo que aprendí' },
];

export function WeekFour() {
  const appearance = useAppearance();
  const contentRef = useRef(null);

  return (
    <EvidenceViewer closeLabel="Cerrar">
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <header className="header">
        <a className="brand" href="../../../index.html" aria-label="Zair Ken, inicio">zk<span>.</span></a>
        <nav aria-label="Navegación principal">
          <a href="../../../index.html">Portafolio</a>
          <a href="../index.html">Cuaderno<span className="nav-count">15</span></a>
        </nav>
        <AppearanceControls appearance={appearance} />
      </header>
      <main id="contenido" ref={contentRef}>
        <section className="lab-intro wrap">
          <nav className="breadcrumbs" aria-label="Ruta de la página">
            <a href="../index.html">Cuaderno</a>
            <span>/</span>
            <span aria-current="page">Semana 04</span>
          </nav>
          <div className="week-hero">
            <div className="week-hero-copy">
              <p className="eyebrow">BITÁCORA DE APRENDIZAJE / SEMANA 04</p>
              <h1>JavaScript en acción:<br />Del DOM a <em>Canvas.</em></h1>
              <p className="hero-summary">
                Dos prácticas que llevan el lenguaje más allá de lo básico: una ruleta dinámica y sorteador para el aula virtual desarrollada en equipo, y Órbita, un laboratorio individual de constelaciones animadas con Canvas API y closures.
              </p>
              <a className="week-cta" href="#recorrido">Explorar mis prácticas <span aria-hidden="true">↘</span></a>
              <div className="intro-tags">
                <span>JavaScript ES6+</span>
                <span>Canvas 2D</span>
                <span>Closures & Scope</span>
                <span>requestAnimationFrame</span>
                <span>Trabajo en equipo</span>
              </div>
            </div>
            <div className="hero-composition" aria-hidden="true">
              <div className="composition-top">
                <span>MI MESA DE TRABAJO</span>
                <span>04 / INTERACCIÓN</span>
              </div>
              <div className="composition-window">
                <div className="window-dots">● ● ● <span>órbita en movimiento</span></div>
                <img src="images/Practica_individual (4).webp" alt="" width="1377" height="667" />
              </div>
              <div className="composition-note">
                <span>renderizado fluido<br />con delta time</span>
                <strong>137 FPS</strong>
              </div>
              <div className="composition-bottom">
                <span>EVENT LOOP · CLOSURES · REPAINT</span>
                <strong>{'{ }'}</strong>
              </div>
            </div>
          </div>
        </section>
        <div className="notebook-layout wrap">
          <WeekIndex items={indexItems} contentRef={contentRef}>
            El resultado importa.<br />El proceso también.
          </WeekIndex>
          <div className="week-content">
            <section className="practice-directory" id="recorrido" aria-labelledby="directory-title">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">EL RECORRIDO</p>
                  <h2 id="directory-title">Dos prácticas, un mismo lenguaje.</h2>
                </div>
                <p>Selecciona una práctica para revisar el código, decisiones y evidencias.</p>
              </div>
              <div className="directory-grid">
                <a className="directory-card" href="#aula-virtual">
                  <span className="directory-number">01 / PRÁCTICA GRUPAL</span>
                  <h3>Aula Virtual: Ruleta y Sorteo<span aria-hidden="true">↗</span></h3>
                  <p>Ruleta interactiva con sectores de colores, atajos de teclado y distribución aleatoria de equipos.</p>
                  <span className="directory-meta">JavaScript puro · 3 evidencias</span>
                </a>
                <a className="directory-card" href="#orbita-canvas">
                  <span className="directory-number">02 / LABORATORIO INDIVIDUAL</span>
                  <h3>Órbita: Universo en Canvas<span aria-hidden="true">↗</span></h3>
                  <p>Constelaciones interactivas, closures para retención de estado y profiling de rendimiento a más de 120 FPS.</p>
                  <span className="directory-meta">Canvas API & Closures · 5 evidencias</span>
                </a>
              </div>
            </section>
            <section className="practice-section wrap" id="aula-virtual" aria-labelledby="aula-title">
              <span className="practice-label">01 / PRÁCTICA CALIFICADA 3 (GRUPAL)</span>
              <h2 id="aula-title">Aula Virtual.<br /><em>Ruleta y sorteo de equipos.</em></h2>
              <p className="section-lead">
                Desarrollamos una aplicación web para dinamizar la participación en clase. Con JavaScript puro, sin librerías externas y mediante ramas en GitHub, integramos una ruleta con puntero dinámico y un sorteador flexible de participantes.
              </p>
              <a className="repo-link" href="https://github.com/ZairRaaa/ROJAS_TOCAS_Semana4_DAW" target="_blank" rel="noopener noreferrer">
                <span>
                  <small>REPOSITORIO DE LA PRÁCTICA</small>
                  <strong>ROJAS_TOCAS_Semana4_DAW</strong>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              <div className="practice-facts">
                <span>01 — Ruleta con 5 colores cíclicos</span>
                <span>02 — Persistencia con localStorage</span>
                <span>03 — Atajos de teclado completos</span>
                <span>04 — Exportación en imagen y portapapeles</span>
              </div>
              <div className="req-grid">
                <article className="req-card">
                  <span>FUNCIONALIDADES F1 – F3</span>
                  <h4>Ruleta reactiva</h4>
                  <p>Puntero triangular rojo superior, sectores con colores alternados y lectura dinámica desde un control de texto multifila.</p>
                </article>
                <article className="req-card">
                  <span>FUNCIONALIDADES F4 – F6</span>
                  <h4>Persistencia y edición</h4>
                  <p>Sincronización instantánea con el almacenamiento local y redibujado automático ante cualquier edición del listado.</p>
                </article>
                <article className="req-card">
                  <span>FUNCIONALIDADES F7 – F9</span>
                  <h4>Exclusión y atajos</h4>
                  <p>Ocultamiento en gris de participantes ya seleccionados con descarte en siguientes rondas y modo pantalla completa.</p>
                </article>
                <article className="req-card">
                  <span>MÓDULO DE EQUIPOS</span>
                  <h4>Distribución equitativa</h4>
                  <p>División configurable por cantidad de equipos o por cantidad de integrantes, con copia en columnas y exportación.</p>
                </article>
              </div>
              <div className="shortcuts-box">
                <h4>Atajos de teclado implementados en la ruleta</h4>
                <div className="shortcuts-grid">
                  <div className="shortcut-item">
                    <kbd>SPACE</kbd>
                    <span>Girar la ruleta</span>
                  </div>
                  <div className="shortcut-item">
                    <kbd>S</kbd>
                    <span>Ocultar seleccionado</span>
                  </div>
                  <div className="shortcut-item">
                    <kbd>R</kbd>
                    <span>Reiniciar elementos</span>
                  </div>
                  <div className="shortcut-item">
                    <kbd>E</kbd>
                    <span>Habilitar edición</span>
                  </div>
                  <div className="shortcut-item">
                    <kbd>F</kbd>
                    <span>Pantalla completa</span>
                  </div>
                </div>
              </div>
              <div className="evidence-heading">
                <h3>Evidencias del proyecto Aula Virtual.</h3>
                <p>Haz clic en cualquier imagen para abrirla en alta resolución.</p>
              </div>
              <EvidenceGallery images={classroomEvidence} />
              <details className="lab-notes">
                <summary>El reto de trabajar en equipo con Git y ramas <span>+</span></summary>
                <p>
                  El desarrollo se organizó en ramas individuales en GitHub para distribuir los módulos: la física de rotación de la ruleta, la persistencia en <code>localStorage</code>, los atajos de teclado y la lógica de partición de equipos. Cada integrante probó su módulo de forma aislada antes de realizar la integración final mediante merge en la rama principal.
                </p>
                <p>
                  Uno de los mayores desafíos fue garantizar que la ruleta y el listado de participantes se mantuvieran sincronizados bidireccionalmente sin generar redundancia de eventos ni ciclos infinitos de renderizado.
                </p>
              </details>
            </section>
            <section className="practice-section wrap" id="orbita-canvas" aria-labelledby="orbita-title">
              <span className="practice-label">02 / LABORATORIO INDIVIDUAL</span>
              <h2 id="orbita-title">Órbita.<br /><em>Canvas API, Closures y Rendimiento.</em></h2>
              <p className="section-lead">
                Un laboratorio enfocado en los fundamentos internos de JavaScript: el ciclo de renderizado del navegador, el uso de closures para retener el estado de partículas sin ensuciar el ámbito global, y el desacoplamiento de la velocidad de animación mediante Delta Time ($\Delta t$).
              </p>
              <a className="repo-link" href="https://github.com/ZairRaaa/DAW_SEMANA_4" target="_blank" rel="noopener noreferrer">
                <span>
                  <small>REPOSITORIO DE LA PRÁCTICA</small>
                  <strong>DAW_SEMANA_4</strong>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              <div className="practice-facts">
                <span>IIFE para aislamiento estricto</span>
                <span>Closures para retención de estado</span>
                <span>requestAnimationFrame con Delta Time</span>
                <span>DevTools Profiling sin fugas de memoria</span>
              </div>
              <ConstellationDemo />
              <div className="metrics-banner">
                <div className="metrics-info">
                  <h3>Métricas de rendimiento registradas</h3>
                  <p>Medición continua en DevTools Performance sin bloqueos en el hilo principal ni layout thrashing.</p>
                </div>
                <div className="metrics-badges">
                  <div className="metric-badge">
                    <strong>137</strong>
                    <span>FPS en pico</span>
                  </div>
                  <div className="metric-badge">
                    <strong>7.3 ms</strong>
                    <span>Frame Time</span>
                  </div>
                  <div className="metric-badge">
                    <strong>0</strong>
                    <span>Nodos huérfanos</span>
                  </div>
                </div>
              </div>
              <div className="evidence-heading">
                <h3>Galería de evidencias del laboratorio Órbita.</h3>
                <p>Cinco capturas del proyecto en funcionamiento local y sus módulos.</p>
              </div>
              <EvidenceGallery images={orbitEvidence} />
              <details className="lab-notes">
                <summary>Decisiones técnicas de animación y control de memoria <span>+</span></summary>
                <p>
                  Al trabajar con Canvas 2D y 200 partículas, la tentación inicial es recrear objetos en cada frame; sin embargo, eso genera presión sobre el recolector de basura (Garbage Collector) y provoca caídas de frames visibles (micro-stutters). El uso de closures permitió mantener una estructura de datos estable en memoria y recalcular únicamente las posiciones necesarias con delta time.
                </p>
                <p>
                  En la pestaña Performance de Chrome DevTools se comprobó que el tiempo de ejecución en el hilo principal se mantiene por debajo de 8 ms por cuadro, garantizando una animación sedosa a más de 120 FPS sin nodos desvinculados (detached DOM nodes).
                </p>
              </details>
            </section>
            <section className="practice-section wrap" aria-labelledby="reflexion-title" id="reflexion">
              <span className="practice-label">03 / REFLEXIÓN PERSONAL</span>
              <h2 id="reflexion-title">Lo que me dejó<br /><em>esta semana.</em></h2>
              <div className="section-lead">
                <p>
                  Esta semana me demostró el verdadero poder de los fundamentos de JavaScript. Muchas veces caemos en la tentación de buscar una librería para cualquier animación o componente interactivo; sin embargo, entender cómo funciona el <strong>Event Loop</strong>, por qué <code>requestAnimationFrame</code> respeta la tasa de refresco del monitor y cómo un <strong>closure</strong> puede proteger el estado de 200 partículas sin exponer variables al objeto global, cambia por completo la perspectiva al escribir código.
                </p>
                <p>
                  En la práctica grupal, aprendí el valor de la coordinación técnica con Git y la importancia de pensar en la accesibilidad: hacer que una ruleta responda tanto a clics como a atajos de teclado y que los resultados se puedan exportar o copiar con un toque hace que la herramienta sea verdaderamente útil para un docente en el aula.
                </p>
              </div>
              <WeekPagination week={weeks[3]} />
            </section>
          </div>
        </div>
      </main>
      <footer className="wrap footer">
        <a className="brand" href="../../../index.html">zk<span>.</span></a>
        <p>
          Zair Ken Rojas Cerron<br />
          <span>Semana 04 · JavaScript en acción</span>
        </p>
        <a href="#contenido">Volver arriba ↑</a>
      </footer>
    </EvidenceViewer>
  );
}
