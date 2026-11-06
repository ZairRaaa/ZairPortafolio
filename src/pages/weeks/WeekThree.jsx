import { useRef } from 'react';
import { EvidenceGallery } from '../../components/gallery/EvidenceGallery.jsx';
import { EvidenceViewer } from '../../components/gallery/EvidenceViewer.jsx';
import { AppearanceControls } from '../../components/layout/AppearanceControls.jsx';
import { WeekIndex } from '../../components/notebook/WeekIndex.jsx';
import { HuellitasPanel } from '../../components/notebook/HuellitasPanel.jsx';
import { gradedEvidence, pulsoEvidence } from '../../data/week-three-evidence.js';
import { useAppearance } from '../../hooks/useAppearance.js';

const indexItems = [
  { id: 'huellitas', label: '01 · Huellitas (Laboratorio)' },
  { id: 'pulso', label: '02 · Pulso (Práctica grupal)' },
  { id: 'calificada', label: '03 · Explorar interfaces' },
  { id: 'reflexion', label: '04 · Lo que aprendí' },
];

export function WeekThree() {
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
            <span aria-current="page">Semana 03</span>
          </nav>
          <div className="week-hero">
            <div className="week-hero-copy">
              <p className="eyebrow">BITÁCORA DE APRENDIZAJE / SEMANA 03</p>
              <h1>Del código a<br />una <em>experiencia.</em></h1>
              <p className="hero-summary">Tres prácticas. Distintas ideas. Un mismo reto: construir interfaces que se adapten, comuniquen y respondan.</p>
              <a className="week-cta" href="#recorrido">Explorar mis prácticas <span aria-hidden="true">↘</span></a>
              <div className="intro-tags">
                <span>Bootstrap + Tailwind</span>
                <span>Diseño adaptable</span>
                <span>Trabajo en equipo</span>
              </div>
            </div>
            <div className="hero-composition" aria-hidden="true">
              <div className="composition-top">
                <span>MI MESA DE TRABAJO</span>
                <span>03 / WEB</span>
              </div>
              <div className="composition-window">
                <div className="window-dots">● ● ● <span>ideas que toman forma</span></div>
                <img src="images/Practica_grupal (1).webp" alt="" width="1377" height="667" />
              </div>
              <div className="composition-note">
                <span>de aprender<br />a construir.</span>
                <strong>↗</strong>
              </div>
              <div className="composition-bottom">
                <span>COMPONENTES · UTILIDADES · INTERACCIÓN</span>
                <strong>{'{ }'}</strong>
              </div>
            </div>
          </div>
        </section>
        <div className="notebook-layout wrap">
          <WeekIndex items={indexItems} contentRef={contentRef} observerMargin="-10% 0px -55% 0px">
            El resultado importa.<br />El proceso también.
          </WeekIndex>
          <div className="week-content">
            <section className="practice-directory" id="recorrido" aria-labelledby="directory-title">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">EL RECORRIDO</p>
                  <h2 id="directory-title">Tres formas de crear.</h2>
                </div>
                <p>Elige una práctica y explora el proceso.</p>
              </div>
              <div className="directory-grid">
                <a className="directory-card" href="#huellitas">
                  <span className="directory-number">01 / LABORATORIO</span>
                  <h3>Huellitas<span aria-hidden="true">↗</span></h3>
                  <p>Componentes y utilidades, paso a paso.</p>
                  <span className="directory-meta">6 partes interactivas</span>
                </a>
                <a className="directory-card" href="#pulso">
                  <span className="directory-number">02 / PRÁCTICA GRUPAL</span>
                  <h3>Pulso<span aria-hidden="true">↗</span></h3>
                  <p>Una experiencia web al ritmo de la música.</p>
                  <span className="directory-meta">Bootstrap + Tailwind · 2 integrantes</span>
                </a>
                <a className="directory-card" href="#calificada">
                  <span className="directory-number">03 / PRÁCTICA CALIFICADA 2</span>
                  <h3>Explorar interfaces<span aria-hidden="true">↗</span></h3>
                  <p>Listas, destinos y una tienda con identidad.</p>
                  <span className="directory-meta">HTML + Tailwind · 3 integrantes</span>
                </a>
              </div>
            </section>
            <div className="practice-heading wrap" id="huellitas">
              <span className="practice-label">01 / LABORATORIO INTERACTIVO</span>
              <h2>Pequeñas partes.<br /><em>Muchas patitas.</em></h2>
              <p>Activa los seis pasos de Huellitas y prueba su vista móvil. Cada parte muestra cómo conviven Bootstrap y Tailwind.</p>
            </div>
            <HuellitasPanel appearance={appearance} />
            <section className="practice-section wrap" id="pulso" aria-labelledby="pulso-title">
              <span className="practice-label">02 / PRÁCTICA GRUPAL</span>
              <h2 id="pulso-title">Pulso. Diseño que<br /><em>suena en vivo.</em></h2>
              <p className="section-lead">Una propuesta de conciertos para practicar componentes de Bootstrap, utilidades de Tailwind y colaboración con Git.</p>
              <a className="repo-link" href="https://github.com/AGIDNSNF/grupoX-semana3-Eventos-Conciertos" target="_blank" rel="noopener noreferrer">
                <span>
                  <small>REPOSITORIO DE LA PRÁCTICA</small>
                  <strong>grupoX-semana3-Eventos-Conciertos</strong>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              <div className="practice-facts">
                <span>01 — Navegación adaptable</span>
                <span>02 — Composición híbrida</span>
                <span>03 — Revisión de calidad</span>
              </div>
              <div className="evidence-heading">
                <h3>Del escritorio al detalle.</h3>
                <p>Abre una captura para explorarla en grande.</p>
              </div>
              <EvidenceGallery images={pulsoEvidence} />
              <div className="audit-summary" aria-label="Resultados documentados en las capturas de Pulso">
                <div>
                  <span className="practice-label">LO QUE DICEN LAS EVIDENCIAS</span>
                  <h3>Diseñar. Revisar. Aprender.</h3>
                  <p>Resultados de las capturas del proyecto Pulso. Corresponden a esa revisión, no a una auditoría de este cuaderno.</p>
                </div>
                <dl className="audit-scores">
                  <div>
                    <dt>Rendimiento</dt>
                    <dd>80</dd>
                  </div>
                  <div>
                    <dt>Accesibilidad</dt>
                    <dd>100</dd>
                  </div>
                  <div>
                    <dt>Buenas prácticas</dt>
                    <dd>100</dd>
                  </div>
                  <div>
                    <dt>SEO</dt>
                    <dd>100</dd>
                  </div>
                </dl>
                <p className="audit-wave">WAVE: <strong>0 errores</strong> · <strong>0 errores de contraste</strong> · 10 alertas por revisar.</p>
              </div>
              <details className="lab-notes">
                <summary>El reto de trabajar en equipo <span aria-hidden="true">+</span></summary>
                <p>La guía plantea dos ramas individuales, integración mediante Pull Requests y revisión entre compañeros. Además del resultado visual, pide documentar las decisiones al combinar Bootstrap y Tailwind.</p>
                <p>Estas imágenes muestran la interfaz y sus auditorías. Las evidencias de ramas, revisiones y aportes individuales se documentarán con el repositorio correspondiente.</p>
              </details>
            </section>
            <section className="practice-section wrap" id="calificada" aria-labelledby="calificada-title">
              <span className="practice-label">03 / PRÁCTICA CALIFICADA 2</span>
              <h2 id="calificada-title">Una idea cambia.<br /><em>La base se conecta.</em></h2>
              <p className="section-lead">Listas de mensajes, tarjetas de destinos y una tienda de plantas: un recorrido por HTML, Tailwind, Grid y Flexbox.</p>
              <a className="repo-link" href="https://github.com/AGIDNSNF/Pr-cticaCalificada02" target="_blank" rel="noopener noreferrer">
                <span>
                  <small>REPOSITORIO DE LA PRÁCTICA</small>
                  <strong>Pr-cticaCalificada02</strong>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              <div className="practice-facts">
                <span>Grid para organizar</span>
                <span>Flexbox para distribuir</span>
                <span>Tailwind para dar forma</span>
              </div>
              <div className="evidence-heading">
                <h3>Cuatro páginas. Un recorrido.</h3>
                <p>Explora las seis capturas del resultado.</p>
              </div>
              <EvidenceGallery images={gradedEvidence} />
              <details className="lab-notes">
                <summary>Qué conecta estas interfaces <span aria-hidden="true">+</span></summary>
                <p>La práctica propone trabajar en equipo con ramas individuales, registrar el backlog en el README e integrar las páginas desde una portada común. Cada ejercicio cambia el contenido, pero comparte decisiones de jerarquía, espaciado y adaptación a la pantalla.</p>
                <p>Las capturas documentan el resultado visual. Los efectos de giro, los estados al pasar el cursor y los puntos de adaptación se comprueban en las páginas en funcionamiento.</p>
              </details>
            </section>
            <section className="learning-wrap" id="reflexion">
              <span className="section-marker">LO QUE CONECTA LA SEMANA</span>
              <h2>Dos herramientas.<br />Una forma de <em>aprender.</em></h2>
              <div className="learning-grid">
                <article>
                  <span>01 / COMPONENTES</span>
                  <h3>Bootstrap resuelve la base.</h3>
                  <p>
                    Uso su navbar, su sistema de columnas, las tarjetas y los
                    controles de formulario. El menú móvil funciona con el JavaScript
                    de Bootstrap.
                  </p>
                  <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Consultar Bootstrap ↗</a>
                </article>
                <article>
                  <span>02 / UTILIDADES</span>
                  <h3>Tailwind afina los detalles.</h3>
                  <p>
                    Aplico utilidades para espaciado, bordes, sombras y cambios al
                    interactuar. El prefijo <code>tw-</code> evita confundir sus clases
                    con las de Bootstrap.
                  </p>
                  <a href="https://v3.tailwindcss.com/docs/installation/play-cdn">Consultar Tailwind ↗</a>
                </article>
                <article>
                  <span>03 / CONVIVENCIA</span>
                  <h3>Cada estilo tiene su espacio.</h3>
                  <p>
                    La demostración vive en un documento independiente, dentro de esta
                    página. Desactivo Preflight de Tailwind para que no se superponga
                    al reinicio de Bootstrap.
                  </p>
                  <a href="https://v3.tailwindcss.com/docs/configuration#prefix">Ver la configuración ↗</a>
                </article>
              </div>
              <details className="lab-notes">
                <summary>
                  Mi recorrido y las comprobaciones de Huellitas<span>+</span>
                </summary>
                <p>
                  Primero preparo el documento, después construyo la navegación y la
                  presentación, organizo las tarjetas y cierro con la validación. El
                  panel muestra estas partes; no desinstala los frameworks ni elimina
                  los metadatos al desactivar un paso.
                </p>
                <p>
                  El siguiente control de calidad es revisar contraste, teclado,
                  etiquetas, rendimiento y SEO con WAVE y Lighthouse. Las puntuaciones
                  de esas herramientas deben registrarse después de ejecutar las
                  auditorías.
                </p>
                <p>
                  El Play CDN se utiliza aquí como parte del ejercicio de laboratorio.
                  Una entrega de producción requeriría generar el CSS utilizado
                  mediante un proceso de compilación.
                </p>
              </details>
              <nav className="week-pagination" aria-label="Navegación del cuaderno">
                <a href="../semana-02/index.html">
                  <small>SEMANA ANTERIOR</small>
                  ← Semana 02
                </a>
                <a href="../semana-04/index.html">
                  <small>SIGUIENTE ENTRADA</small>
                  Semana 04 →
                </a>
              </nav>
            </section>
          </div>
        </div>
      </main>
      <footer className="wrap footer">
        <a className="brand" href="../../../index.html">zk<span>.</span></a>
        <p>
          Zair Ken Rojas Cerron<br />
          <span>Semana 03 · Aprender construyendo</span>
        </p>
        <a href="#contenido">Volver arriba ↑</a>
      </footer>
    </EvidenceViewer>
  );
}
