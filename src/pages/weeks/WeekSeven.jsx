import { EvidenceGallery } from '../../components/gallery/EvidenceGallery.jsx';
import { EvidenceViewer } from '../../components/gallery/EvidenceViewer.jsx';
import { WeekLayout } from '../../components/notebook/WeekLayout.jsx';
import { weekSevenEvidence } from '../../data/week-seven-evidence.js';
import { weeks } from '../../data/weeks.js';

const week = weeks[6];
const sections = [
  { id: 'recorrido', label: '01 · El recorrido' },
  { id: 'biblioteca', label: '02 · Biblioteca' },
  { id: 'apex', label: '03 · Apex Motors' },
  { id: 'taskmaster', label: '04 · TaskMaster Pro' },
  { id: 'hooks', label: '05 · Mapa de hooks' },
  { id: 'reflexion', label: '06 · Lo que aprendí' },
];

function WeekHero() {
  return (
    <section className="week-hero" aria-labelledby="week-title">
      <div>
        <p className="eyebrow">BITÁCORA DE APRENDIZAJE / SEMANA 07</p>
        <h1 id="week-title">La interfaz responde.<br /><em>El estado transforma.</em></h1>
        <p className="hero-summary">Una biblioteca, un catálogo y un panel de tareas. Tres escenarios para conectar lo aprendido y comprender cómo React responde a cada interacción.</p>
        <a className="week-cta" href="#recorrido">Explorar mis trabajos <span aria-hidden="true">↘</span></a>
        <div className="topic-tags"><span>Evaluación parcial</span><span>React Hooks</span><span>Estado y persistencia</span></div>
      </div>
      <div className="project-cover">
        <div className="cover-label"><span>DEL COMPONENTE AL ESTADO</span><span>07 / WEB</span></div>
        <img src="images/Practica 3 (6).webp" alt="TaskMaster Pro en modo oscuro: indicadores, gráficos y gestión de tareas" width="1192" height="550" />
        <div className="cover-caption"><span>Tres retos.<br /><strong>Una interfaz que evoluciona.</strong></span><span aria-hidden="true">{'{07}'}</span></div>
      </div>
    </section>
  );
}

export function WeekSeven() {
  return (
    <EvidenceViewer>
      <WeekLayout
        week={week}
        title="Estado que transforma"
        hero={<WeekHero />}
        sections={sections}
        indexNote={<>Organizar el estado.<br />Entender los efectos.<br />Medir antes de optimizar.</>}
      >
        <section className="lesson" id="recorrido">
          <span className="section-marker">01 / EL PUNTO DE PARTIDA</span>
          <h2>De conectar piezas<br />a gestionar <em>cambios.</em></h2>
          <p className="section-lead">En la <a href="../semana-06/index.html">semana 6</a> trabajé componentes, props y navegación. Esta semana el foco pasa a los datos que cambian, su persistencia y el ciclo de renderizado.</p>
          <div className="project-directory">
            <a href="#biblioteca"><span>01 / EVALUACIÓN PARCIAL</span><h3>Biblioteca ↗</h3><p>Libros, usuarios y préstamos en un sistema universitario.</p></a>
            <a href="#apex"><span>02 / LABORATORIO</span><h3>Apex Motors ↗</h3><p>Un catálogo automotriz para trabajar los hooks.</p></a>
            <a href="#taskmaster"><span>03 / ESTADO COMPLEJO</span><h3>TaskMaster Pro ↗</h3><p>Tareas, métricas y una auditoría de hooks.</p></a>
          </div>
          <aside className="context-note"><strong>Aplicar, comprender y comprobar</strong><p>El parcial integra lo aprendido con React, Vite y TypeScript. Las dos prácticas profundizan en efectos, contexto, reducers y optimización del renderizado.</p></aside>
        </section>
        <section className="lesson" id="biblioteca">
          <span className="section-marker">02 / TRABAJO 1 · PARCIAL</span>
          <h2>Una biblioteca,<br /><em>muchas conexiones.</em></h2>
          <p className="section-lead">La evaluación parcial plantea un sistema de biblioteca universitaria con dos perfiles: administración y usuarios registrados. El reto reúne formularios, inventario, préstamos y almacenamiento local.</p>
          <a className="repo-link" href="https://github.com/ZairRaaa/EVALUACION_PARCIAL_S7_DAW"><span><small>EXPLORAR EL CÓDIGO</small><strong>EVALUACION_PARCIAL_S7_DAW</strong></span><span aria-hidden="true">↗</span></a>
          <div className="concept-grid">
            <article>
              <h3>Administrar el catálogo</h3>
              <p>Categorías y libros se organizan con título, autor, ISBN y stock. El enunciado solicita registrar, editar y eliminar datos con formularios validados.</p>
            </article>
            <article>
              <h3>Conectar usuarios y préstamos</h3>
              <p>Estudiantes y docentes buscan libros y consultan su historial. La guía exige impedir préstamos sin stock y actualizar la disponibilidad al registrar una solicitud.</p>
            </article>
          </div>
          <div className="props-flow" aria-label="Proceso planteado para un préstamo"><span>Buscar un libro</span><span aria-hidden="true">→</span><span>Consultar stock</span><span aria-hidden="true">→</span><span>Registrar préstamo</span><span aria-hidden="true">→</span><strong>Comprobante e historial</strong></div>
          <details className="lesson-details">
            <summary>Persistencia y comprobantes <span aria-hidden="true">+</span></summary>
            <p>El caso propone Local Storage para simular la persistencia sin una base de datos externa. Cada comprobante debe incluir usuario, libro, fechas y código único, con opción de descarga en PDF. Las capturas muestran el historial y sus acciones; no documentan la descarga del PDF.</p>
          </details>
          <div className="evidence-heading"><h3>El trabajo en imágenes.</h3><p>Abre una captura y recorre la galería con las flechas.</p></div>
          <EvidenceGallery images={weekSevenEvidence.biblioteca} />
        </section>
        <section className="lesson" id="apex">
          <span className="section-marker">03 / TRABAJO 2 · LABORATORIO</span>
          <h2>Apex Motors:<br /><em>explorar con intención.</em></h2>
          <p className="section-lead">Un catálogo de vehículos deportivos sirve como escenario visual para la primera práctica de hooks: entender el renderizado, trabajar efectos y separar lógica reutilizable.</p>
          <a className="repo-link" href="https://github.com/ZairRaaa/Semana_7_practica_1"><span><small>EXPLORAR EL CÓDIGO</small><strong>Semana_7_practica_1</strong></span><span aria-hidden="true">↗</span></a>
          <div className="concept-grid">
            <article>
              <h3>Efectos con un ciclo claro</h3>
              <p>La guía propone async/await dentro de useEffect, dependencias explícitas y AbortController para cancelar peticiones durante la limpieza.</p>
            </article>
            <article>
              <h3>Compartir y reutilizar</h3>
              <p>El ejercicio conecta useContext para el tema, useRef para el foco y un hook personalizado para encapsular lógica. useMemo y useCallback se estudian junto al Profiler.</p>
            </article>
          </div>
          <details className="lesson-details">
            <summary>¿Qué observar durante el renderizado? <span aria-hidden="true">+</span></summary>
            <p>Una actualización de estado puede volver a renderizar el componente. La práctica invita a revisar qué cambió con React DevTools y a comprobar las dependencias de los efectos. En desarrollo, StrictMode puede repetir un ciclo de preparación y limpieza para detectar problemas.</p>
            <p>Las evidencias muestran la portada y el catálogo. La cancelación de peticiones y las mejoras de rendimiento se comprueban en el código y con mediciones, no solo con la apariencia de la página.</p>
          </details>
          <div className="evidence-heading"><h3>El trabajo en imágenes.</h3><p>Abre una captura y recorre la galería con las flechas.</p></div>
          <EvidenceGallery images={weekSevenEvidence.apex} />
        </section>
        <section className="lesson" id="taskmaster">
          <span className="section-marker">04 / TRABAJO 3 · DASHBOARD</span>
          <h2>TaskMaster Pro:<br /><em>ordenar la complejidad.</em></h2>
          <p className="section-lead">El segundo laboratorio reúne gestión de tareas, preferencias y estadísticas. El informe describe una arquitectura de estado unidireccional y documenta su revisión con ESLint y React DevTools.</p>
          <a className="repo-link" href="https://github.com/ZairRaaa/Semana_7_practica_2"><span><small>EXPLORAR EL CÓDIGO</small><strong>Semana_7_practica_2</strong></span><span aria-hidden="true">↗</span></a>
          <div className="concept-grid">
            <article>
              <h3>Acciones que transforman el estado</h3>
              <p>useReducer centraliza las transiciones de la lista; useState mantiene la interfaz local. Los filtros y las métricas se calculan a partir de los datos existentes.</p>
            </article>
            <article>
              <h3>Preferencias que permanecen</h3>
              <p>El informe describe ThemeContext y useLocalStorage para compartir el tema, persistir datos y sincronizar cambios entre pestañas con limpieza de listeners.</p>
            </article>
          </div>
          <div className="props-flow" aria-label="Flujo de estado de TaskMaster Pro"><span>Interacción</span><span aria-hidden="true">→</span><span>dispatch(acción)</span><span aria-hidden="true">→</span><span>Reducer</span><span aria-hidden="true">→</span><strong>Nuevo estado e interfaz</strong></div>
          <details className="lesson-details">
            <summary>Validar antes de optimizar <span aria-hidden="true">+</span></summary>
            <p>El informe registra una revisión de ESLint sin errores ni advertencias y una sesión de Profiler con un lote adicional de tareas. Las capturas incluyen herramientas de desarrollo, un diagrama de estado y la auditoría de hooks.</p>
            <p>useCallback estabiliza los handlers y React.memo puede evitar renders de hijos cuyas props no cambiaron. El resultado depende de las interacciones y las dependencias; estas evidencias recogen la validación del trabajo, no una nueva medición desde el portafolio.</p>
          </details>
          <div className="evidence-heading"><h3>El trabajo en imágenes.</h3><p>Abre una captura y recorre la galería con las flechas.</p></div>
          <EvidenceGallery images={weekSevenEvidence.taskmaster} />
        </section>
        <section className="lesson" id="hooks">
          <span className="section-marker">05 / MAPA DE HOOKS</span>
          <h2>Una necesidad.<br /><em>Una herramienta.</em></h2>
          <p className="section-lead">Abre cada tarjeta para repasar qué responsabilidad cumple cada hook en los trabajos de esta semana.</p>
          <div className="hooks-grid">
            <details>
              <summary>useState · Interfaz local</summary>
              <p>Mantiene valores que afectan a la interfaz, como un campo de formulario o un control abierto.</p>
            </details>
            <details>
              <summary>useReducer · Transiciones</summary>
              <p>Organiza acciones sobre un estado complejo en una función reducer, conservando actualizaciones inmutables.</p>
            </details>
            <details>
              <summary>useEffect · Sincronización</summary>
              <p>Conecta el componente con sistemas externos. La limpieza libera listeners o cancela operaciones cuando corresponde.</p>
            </details>
            <details>
              <summary>useContext · Datos compartidos</summary>
              <p>Permite consumir el tema desde un proveedor sin pasar esa información manualmente por cada nivel.</p>
            </details>
            <details>
              <summary>useMemo · Cálculos derivados</summary>
              <p>Puede reutilizar un cálculo de filtrado u ordenación mientras no cambien sus dependencias. Se aplica cuando aporta una mejora medible.</p>
            </details>
            <details>
              <summary>useCallback · Referencias estables</summary>
              <p>Puede mantener la identidad de un handler entre renders, por ejemplo al enviarlo a un hijo memoizado.</p>
            </details>
            <details>
              <summary>useRef · Referencias persistentes</summary>
              <p>Conserva una referencia al input para darle foco. Cambiar ref.current no provoca un render.</p>
            </details>
            <details>
              <summary>Hook personalizado · Reutilización</summary>
              <p>useLocalStorage encapsula lectura, escritura y sincronización. Un hook comparte lógica, no convierte automáticamente su estado en global.</p>
            </details>
          </div>
        </section>
        <section className="lesson" id="reflexion">
          <span className="section-marker">06 / LO QUE APRENDÍ</span>
          <h2>El cambio tiene<br /><em>su propia lógica.</em></h2>
          <div className="reflection-grid">
            <article><h3>Separar responsabilidades</h3><p>La interfaz, las transiciones de estado y la persistencia resuelven problemas distintos. Organizar cada responsabilidad hace más fácil entender qué ocurre cuando el usuario interactúa.</p></article>
            <article><h3>Evitar datos duplicados</h3><p>Una lista filtrada o una métrica se puede obtener del estado original. Mantener una sola fuente de datos reduce la necesidad de sincronizar valores manualmente.</p></article>
            <article><h3>Medir con una pregunta concreta</h3><p>Antes de añadir memoización, conviene identificar qué componente se renderiza, por qué y cuánto cuesta. La optimización tiene sentido cuando responde a un problema observado.</p></article>
          </div>
          <p className="source-note">Contenido elaborado a partir de practica7.md y las 15 capturas de los trabajos. Los resultados de validación citados corresponden al informe de la práctica.</p>
        </section>
      </WeekLayout>
    </EvidenceViewer>
  );
}
