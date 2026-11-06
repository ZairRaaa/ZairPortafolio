import { useEffect, useRef, useState } from 'react';
import { EvidenceLink } from '../../components/gallery/EvidenceLink.jsx';
import { EvidenceViewer } from '../../components/gallery/EvidenceViewer.jsx';
import { AppearanceControls } from '../../components/layout/AppearanceControls.jsx';
import { ReadingProgress } from '../../components/layout/ReadingProgress.jsx';
import { WeekIndex } from '../../components/notebook/WeekIndex.jsx';
import { weekTwoEvidence } from '../../data/week-two-evidence.js';
import { useAppearance } from '../../hooks/useAppearance.js';

const sections = [
  { id: 'requerimientos', label: '01 · Entender la necesidad' },
  { id: 'interfaces', label: '02 · Construir interfaces' },
  { id: 'galeria', label: '03 · Revisar y mejorar' },
  { id: 'reflexion', label: '04 · Lo que aprendí' },
];

const filters = [
  { id: 'all', label: 'Todas' },
  { id: 'html', label: 'HTML' },
  { id: 'wave', label: 'WAVE' },
  { id: 'lighthouse', label: 'Lighthouse' },
];

const auditImages = [...weekTwoEvidence.html, ...weekTwoEvidence.wave, ...weekTwoEvidence.lighthouse];

function AuditCapture({ image, images }) {
  return (
    <figure className="evidence-shot">
      <EvidenceLink className="open-capture" image={image} images={images} spaceActivates>
        <img src={image.src} alt={image.description} />
        <span aria-hidden="true">Ampliar ↗</span>
      </EvidenceLink>
      <figcaption>{image.title}</figcaption>
    </figure>
  );
}

export function WeekTwo() {
  const appearance = useAppearance();
  const content = useRef(null);
  const [interactive, setInteractive] = useState(false);
  const [filter, setFilter] = useState(null);
  const selected = filter ?? 'all';
  const visibleAudits = selected === 'all' ? auditImages : weekTwoEvidence[selected];
  const visibleImages = [...weekTwoEvidence.interfaces, ...weekTwoEvidence.overview, ...visibleAudits];
  const filterStatus = filter && (filter === 'all'
    ? 'Todas las revisiones.'
    : 'Revisiones de ' + filters.find(item => item.id === filter).label + '.');

  useEffect(() => setInteractive(true), []);

  return (
    <EvidenceViewer closeLabel="Cerrar">
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <ReadingProgress />
      <header className="header">
        <a className="brand" href="../../../index.html" aria-label="Zair Ken, inicio">zk<span>.</span></a>
        <nav aria-label="Navegación principal">
          <a href="../../../index.html">Portafolio</a>
          <a href="../index.html">Cuaderno <span className="nav-count">15</span></a>
        </nav>
        <AppearanceControls appearance={appearance} />
      </header>
      <main id="contenido">
        <section className="week-hero wrap">
          <nav className="breadcrumbs" aria-label="Ruta de la página">
            <a href="../index.html">Cuaderno</a>
            <span>/</span>
            <span aria-current="page">Semana 02</span>
          </nav>
          <div className="week-hero-grid">
            <div>
              <p className="eyebrow">UNIDAD I · APRENDIZAJE EN LA PRÁCTICA</p>
              <h1>Diseñar. Probar.<br />Volver a <em>mejorar.</em></h1>
              <p className="week-intro">Esta semana el aprendizaje estuvo en la práctica: organizar requerimientos, construir interfaces con HTML y CSS y revisar la calidad de una galería web.</p>
              <div className="topic-tags">
                <span>Trabajo en equipo</span>
                <span>HTML y CSS</span>
                <span>Validación</span>
              </div>
            </div>
            <div className="week-number">
              <span>MI CUADERNO</span>
              <strong>02</strong>
              <span>DEL DISEÑO A LA REVISIÓN</span>
            </div>
          </div>
          <div className="course-facts">
            <span>Desarrollo de Aplicaciones Web · 2026-II</span>
            <span>IX ciclo · UNCP</span>
            <span>Una semana centrada en hacer</span>
          </div>
        </section>
        <div className="notebook-layout wrap">
          <WeekIndex items={sections} contentRef={content} observerMargin="-5% 0px -60% 0px">
            El resultado importa.<br />El proceso también.
          </WeekIndex>
          <div className="week-content" ref={content}>
            <section className="lesson" id="requerimientos">
              <span className="section-marker">PRÁCTICA 01 / ACTIVIDAD COMPLEMENTARIA</span>
              <h2>Primero, entender<br />qué se <em>necesita.</em></h2>
              <p className="context-note">La guía de esta actividad corresponde a Metodología de Desarrollo de Software (IS055B). La incluyo como parte del trabajo práctico reunido esta semana.</p>
              <p>Trabajé el caso de MediSalud, una clínica que necesita organizar citas, disponibilidad médica, recordatorios e historiales. El ejercicio me ayudó a conectar las necesidades de las personas con requerimientos verificables.</p>
              <div className="mini-stats">
                <div>
                  <strong>7</strong>
                  <span>interesados identificados</span>
                </div>
                <div>
                  <strong>10</strong>
                  <span>requerimientos funcionales</span>
                </div>
                <div>
                  <strong>8</strong>
                  <span>requerimientos de calidad</span>
                </div>
              </div>
              <h3>Escuchar a cada persona de forma distinta</h3>
              <div className="stakeholders">
                <article>
                  <h4>Pacientes</h4>
                  <p>Encuestas para conocer preferencias al reservar.</p>
                </article>
                <article>
                  <h4>Médicos y aseguradora</h4>
                  <p>Entrevistas para profundizar en historiales e integración de seguros.</p>
                </article>
                <article>
                  <h4>Recepción y triaje</h4>
                  <p>Observación para entender el flujo real de atención.</p>
                </article>
                <article>
                  <h4>Administración y TI</h4>
                  <p>Talleres para acordar objetivos y entrevistas para precisar restricciones técnicas.</p>
                </article>
              </div>
              <div className="role-grid">
                <article>
                  <span>QUÉ HACE EL SISTEMA</span>
                  <h3>Funcionales</h3>
                  <p>Agendar y cancelar citas, gestionar horarios, registrar signos vitales, consultar historiales y administrar pagos.</p>
                </article>
                <article>
                  <span>CON QUÉ CONDICIONES</span>
                  <h3>No funcionales</h3>
                  <p>Tiempo de respuesta, disponibilidad, compatibilidad, seguridad y frecuencia de las copias de respaldo.</p>
                </article>
              </div>
              <details className="lesson-details">
                <summary>Mi matriz conecta el origen con el requisito <span>+</span></summary>
                <p>Relacioné cada requisito con la técnica, el interesado, su prioridad y estado. Por ejemplo, RF-001 vincula las citas con el paciente y una encuesta; RNF-007 vincula las copias automáticas con Soporte TI y una entrevista.</p>
                <p>Los valores del ejercicio, como respuesta de hasta 2 segundos o respaldos cada 12 horas, son requisitos propuestos; no son mediciones de un sistema implementado.</p>
              </details>
              <div className="margin-note">
                <strong>Lo que me quedó claro</strong>
                <p>«Que sea rápido» no basta. Necesito definir qué operación evalúo, cómo la mido y qué resultado se espera.</p>
              </div>
            </section>
            <section className="lesson" id="interfaces">
              <span className="section-marker">PRÁCTICA 02 / HTML Y CSS EN EQUIPO</span>
              <h2>Cuatro páginas.<br />Un trabajo <em>compartido.</em></h2>
              <p>La práctica propuso dividir el trabajo en ramas y reunir las páginas en un proyecto común. El reto fue combinar formularios, controles, animaciones y una distribución adaptable sin depender de librerías de interfaz.</p>
              <a className="repo-link" href="https://github.com/THEDEMONS101/Practica01_DAW"><span><small>REPOSITORIO DE LA PRÁCTICA</small><strong>Practica01_DAW</strong></span><span aria-hidden="true">↗</span></a>
              <div className="exercise-list">
                <article>
                  <span className="exercise-no">01</span>
                  <div>
                    <h3>Formulario y etiquetas animadas</h3>
                    <p>La primera página reúne campos, iconos SVG, una casilla de selección y botones. La etiqueta se desplaza y cambia de color al interactuar con el campo; la guía también plantea un área para arrastrar una imagen.</p>
                  </div>
                </article>
                <article>
                  <span className="exercise-no">02</span>
                  <div>
                    <h3>Selección y mezcla de colores</h3>
                    <p>La segunda página combina radio buttons, pestañas y un panel RGB con tres controles entre 0 y 255. La interfaz permite relacionar cada canal con el color mostrado.</p>
                  </div>
                </article>
                <article>
                  <span className="exercise-no">03</span>
                  <div>
                    <h3>Composición adaptable</h3>
                    <p>La tercera página reproduce una distribución de textos e imágenes y propone cambios de opacidad al pasar el cursor. Flexbox y las media queries organizan la adaptación a distintos tamaños.</p>
                  </div>
                </article>
                <article>
                  <span className="exercise-no">04</span>
                  <div>
                    <h3>Una entrada al proyecto</h3>
                    <p>La página principal enlaza los ejercicios mediante tres tarjetas animadas e incorpora un formulario de autenticación como interfaz.</p>
                  </div>
                </article>
              </div>
              <div className="margin-note">
                <strong>Una distinción importante</strong>
                <p>HTML y CSS construyen la presentación. Procesar un archivo arrastrado, sincronizar controles o autenticar usuarios requiere comportamiento adicional; un formulario visual por sí solo no valida una sesión.</p>
              </div>
              <h3>El resultado, página por página</h3>
              <div className="capture-grid">
                <AuditCapture image={weekTwoEvidence.interfaces[0]} images={visibleImages} />
                <AuditCapture image={weekTwoEvidence.interfaces[1]} images={visibleImages} />
                <AuditCapture image={weekTwoEvidence.interfaces[2]} images={visibleImages} />
                <AuditCapture image={weekTwoEvidence.interfaces[3]} images={visibleImages} />
              </div>
              <p className="practice-closing">Mi aprendizaje aquí fue pensar en estados y tamaños: cómo se ve un control, qué ocurre al interactuar y cómo se reorganiza cuando el espacio cambia.</p>
            </section>
            <section className="lesson" id="galeria">
              <span className="section-marker">PRÁCTICA 03 / GALERÍA Y VALIDACIÓN</span>
              <h2>Que se vea bien.<br />Que funcione <em>mejor.</em></h2>
              <p>La tercera práctica consistió en una galería de proyectos técnicos. El foco pasó del diseño a la revisión: semántica, navegación por teclado, contraste, adaptación y resultados de las herramientas de auditoría.</p>
              <a className="repo-link" href="https://github.com/devjuancarlos10/CHAHUAYO-ZAIR-PRACTICA02"><span><small>REPOSITORIO DE LA PRÁCTICA</small><strong>CHAHUAYO-ZAIR-PRACTICA02</strong></span><span aria-hidden="true">↗</span></a>
              <div className="learning-goals">
                <h3>Lo que debía integrar la galería</h3>
                <ul>
                  <li>HTML semántico, etiquetas accesibles y enlace para saltar al contenido.</li>
                  <li>Una estructura con Grid y Flexbox, y tamaños fluidos con clamp() y calc().</li>
                  <li>Adaptación de componentes con consultas de contenedor.</li>
                  <li>Modo claro y oscuro con transiciones suaves.</li>
                  <li>Revisión con el validador HTML, WAVE y Lighthouse.</li>
                </ul>
              </div>
              <AuditCapture image={weekTwoEvidence.overview[0]} images={visibleImages} />
              <div className="validation-goals">
                <h3>Objetivos de la guía</h3>
                <p><strong>HTML:</strong> 0 errores · <strong>WAVE:</strong> 0 errores de estructura y contraste · <strong>Lighthouse:</strong> al menos 90 en accesibilidad y SEO.</p>
                <small>Son los criterios solicitados. Las capturas documentan los resultados de cada revisión.</small>
              </div>
              <h3 className="subheading">Mi recorrido de revisión</h3>
              <p>Organizo las evidencias por herramienta para comparar el estado inicial, el código revisado y la nueva comprobación. Cada captura se puede ampliar para leer los detalles.</p>
              <div className="evidence-filters" role="group" aria-label="Filtrar evidencias" hidden={!interactive}>
                {filters.map(({ id, label }) => (
                  <button key={id} type="button" data-filter={id} aria-pressed={selected === id} onClick={() => setFilter(id)}>{label}</button>
                ))}
              </div>
              <article className="audit-group" data-audit="html" hidden={selected !== 'all' && selected !== 'html'}>
                <div className="audit-heading">
                  <span>01 / ESTRUCTURA</span>
                  <h3>Validar, corregir y volver a comprobar.</h3>
                </div>
                <div className="capture-grid">
                  <AuditCapture image={weekTwoEvidence.html[0]} images={visibleImages} />
                  <AuditCapture image={weekTwoEvidence.html[1]} images={visibleImages} />
                  <AuditCapture image={weekTwoEvidence.html[2]} images={visibleImages} />
                  <AuditCapture image={weekTwoEvidence.html[3]} images={visibleImages} />
                </div>
              </article>
              <article className="audit-group" data-audit="wave" hidden={selected !== 'all' && selected !== 'wave'}>
                <div className="audit-heading">
                  <span>02 / ACCESIBILIDAD</span>
                  <h3>Revisar lo que el diseño no siempre revela.</h3>
                </div>
                <div className="capture-grid">
                  <AuditCapture image={weekTwoEvidence.wave[0]} images={visibleImages} />
                  <AuditCapture image={weekTwoEvidence.wave[1]} images={visibleImages} />
                  <AuditCapture image={weekTwoEvidence.wave[2]} images={visibleImages} />
                </div>
              </article>
              <article className="audit-group" data-audit="lighthouse" hidden={selected !== 'all' && selected !== 'lighthouse'}>
                <div className="audit-heading">
                  <span>03 / AUDITORÍA</span>
                  <h3>Comparar el punto de partida y el resultado.</h3>
                </div>
                <div className="capture-grid">
                  <AuditCapture image={weekTwoEvidence.lighthouse[0]} images={visibleImages} />
                  <AuditCapture image={weekTwoEvidence.lighthouse[1]} images={visibleImages} />
                </div>
              </article>
              <p id="filter-status" className="source-note" role="status">{filterStatus}</p>
              <div className="margin-note">
                <strong>Más que un puntaje</strong>
                <p>Las herramientas ayudan a encontrar problemas, pero no reemplazan la revisión manual con teclado ni explican por sí solas la experiencia completa de una persona.</p>
              </div>
            </section>
            <section className="lesson" id="reflexion">
              <span className="section-marker">04 / MI REFLEXIÓN</span>
              <h2>Construir también<br />es <em>revisar.</em></h2>
              <div className="reflection">
                <h3>¿Qué aprendí?</h3>
                <p>Relacioné necesidades con requisitos, practiqué la organización visual de varias páginas y entendí por qué una interfaz debe revisarse más allá de su apariencia.</p>
                <h3>¿Cómo lo aprendí?</h3>
                <p>A través de los casos y ejercicios: identificar interesados, dividir páginas, comparar estados y reunir evidencias. Separar el trabajo en partes me ayudó a explicar qué buscaba resolver en cada una.</p>
                <h3>¿Qué quiero mejorar?</h3>
                <p>Seguir practicando la adaptación a distintas pantallas y documentar cada hallazgo con su corrección y una comprobación posterior. Quiero que las capturas permitan entender el proceso, no solo ver el resultado.</p>
              </div>
              <p className="source-note">Resumen basado en las guías y actividades reunidas en el material de la semana 2. Los enlaces de cada práctica llevan a sus respectivos repositorios.</p>
            </section>
            <nav className="week-pagination" aria-label="Navegación del cuaderno">
              <a href="../semana-01/index.html"><small>SEMANA ANTERIOR</small>← Semana 01</a>
              <a href="../semana-03/index.html"><small>SIGUIENTE ENTRADA</small>Semana 03 →</a>
            </nav>
          </div>
        </div>
      </main>
      <footer className="wrap footer">
        <a className="brand" href="../../../index.html" aria-label="Volver al portafolio">zk<span>.</span></a>
        <p>Zair Ken Rojas Cerron<br /><span>Cuaderno de aprendizaje · UNCP</span></p>
        <a href="#contenido">Volver arriba ↑</a>
      </footer>
    </EvidenceViewer>
  );
}
