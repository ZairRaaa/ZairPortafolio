import { EvidenceGallery } from '../../components/gallery/EvidenceGallery.jsx';
import { EvidenceViewer } from '../../components/gallery/EvidenceViewer.jsx';
import { WeekLayout } from '../../components/notebook/WeekLayout.jsx';
import { weekSixEvidence } from '../../data/week-six-evidence.js';
import { weeks } from '../../data/weeks.js';

const week = weeks[5];
const sections = [
  { id: 'recorrido', label: '01 · El recorrido' },
  { id: 'orbita', label: '02 · Órbita' },
  { id: 'nido', label: '03 · Nido' },
  { id: 'tecnoandes', label: '04 · TecnoAndes' },
  { id: 'reflexion', label: '05 · Lo que aprendí' },
];

function WeekHero() {
  return (
    <section className="week-hero" aria-labelledby="week-title">
      <div>
        <p className="eyebrow">{'BITÁCORA DE APRENDIZAJE / SEMANA ' + week.code}</p>
        <h1 id="week-title">Las piezas toman forma.<br /><em>Los datos conectan.</em></h1>
        <p className="hero-summary">De preparar una plantilla a construir con React: tres trabajos para explorar componentes, navegación y formas de compartir información.</p>
        <a className="week-cta" href="#recorrido">Explorar mis trabajos <span aria-hidden="true">↘</span></a>
        <div className="topic-tags"><span>React + Vite</span><span>Props y children</span><span>Rutas y APIs</span></div>
      </div>
      <div className="project-cover">
        <div className="cover-label"><span>DEL COMPONENTE A LA APLICACIÓN</span><span>06 / WEB</span></div>
        <img src={weekSixEvidence.orbita[0].src} alt="Portada de Órbita, academia de exploración espacial" width="1917" height="961" />
        <div className="cover-caption">
          <span>Tres proyectos.<br /><strong>Un aprendizaje que se conecta.</strong></span><span aria-hidden="true">{'{ }'}</span>
        </div>
      </div>
    </section>
  );
}

function RepositoryLink({ href, children }) {
  return (
    <a className="repo-link" href={href}>
      <span><small>EXPLORAR EL CÓDIGO</small><strong>{children}</strong></span><span aria-hidden="true">↗</span>
    </a>
  );
}

function ProjectEvidence({ images }) {
  return (
    <>
      <div className="evidence-heading"><h3>El trabajo en imágenes.</h3><p>Abre una captura para explorar los detalles.</p></div>
      <EvidenceGallery images={images} />
    </>
  );
}

export function WeekSix() {
  return (
    <EvidenceViewer>
      <WeekLayout
        week={week}
        title="Componentes que conectan"
        hero={<WeekHero />}
        sections={sections}
        indexNote={<>Dividir en componentes.<br />Conectar con datos.<br />Aprender construyendo.</>}
      >
        <section className="lesson" id="recorrido">
          <span className="section-marker">01 / EL PUNTO DE PARTIDA</span>
          <h2>De la estructura<br />a la <em>experiencia.</em></h2>
          <p className="section-lead">En la semana 5 creamos las plantillas. Ahora el recorrido se centra en organizar interfaces, transmitir datos y dar respuesta a las acciones del usuario.</p>
          <div className="project-directory">
            <a href="#orbita"><span>01 / COMPONENTES</span><h3>Órbita ↗</h3><p>Una interfaz espacial y cuatro niveles de props.</p></a>
            <a href="#nido"><span>02 / SPA</span><h3>Nido ↗</h3><p>Inicio, catálogo y consultas en una aplicación.</p></a>
            <a href="#tecnoandes"><span>03 / RECUPERACIÓN</span><h3>TecnoAndes ↗</h3><p>Composición y estilos en un panel de ventas.</p></a>
          </div>
          <aside className="context-note">
            <strong>Una recuperación que completa el recorrido</strong>
            <p>TecnoAndes corresponde a la práctica de la semana 5. Lo incluyo aquí porque se realizó como recuperación durante la semana 6.</p>
          </aside>
        </section>
        <section className="lesson" id="orbita">
          <span className="section-marker">02 / TRABAJO 1</span>
          <h2>Órbita: una interfaz,<br /><em>muchas piezas.</em></h2>
          <p className="section-lead">La temática de exploración espacial reúne el diseño por secciones y el paso de información entre componentes.</p>
          <RepositoryLink href="https://github.com/ZairRaaa/Semana_6_practica_1">Semana_6_practica_1</RepositoryLink>
          <div className="concept-grid">
            <article>
              <h3>Una sección, un componente</h3>
              <p>El enunciado pide siete componentes y CSS puro, con una distribución diferente para escritorio, tablet y móvil. La separación permite pensar cada sección como una pieza de la interfaz.</p>
            </article>
            <article>
              <h3>Un objeto, cuatro niveles</h3>
              <p>El segundo ejercicio transmite nombre, dirección y ciudad desde el primer componente hasta el cuarto. La captura muestra a Jaime, Jr. Junín 450 y Huancayo en la credencial final.</p>
            </article>
          </div>
          <div className="props-flow" aria-label="Recorrido de datos entre cuatro componentes">
            <span>01 · Centro de control</span><span aria-hidden="true">→</span><span>02 · Estación orbital</span>
            <span aria-hidden="true">→</span><span>03 · Tripulación</span><span aria-hidden="true">→</span><strong>04 · Credencial</strong>
          </div>
          <details className="lesson-details">
            <summary>¿Qué explica este recorrido? <span aria-hidden="true">+</span></summary>
            <p>Las props permiten que un componente reciba información de su padre. En este ejercicio, los componentes intermedios trasladan el objeto hasta la tarjeta que lo muestra. La estructura visual anidada ayuda a reconocer los cuatro niveles.</p>
          </details>
          <ProjectEvidence images={weekSixEvidence.orbita} />
        </section>
        <section className="lesson" id="nido">
          <span className="section-marker">03 / TRABAJO 2</span>
          <h2>Nido: cada ruta<br />abre una <em>posibilidad.</em></h2>
          <p className="section-lead">Una propuesta de catálogo que organiza la experiencia en tres vistas: descubrir, explorar productos y realizar una consulta.</p>
          <RepositoryLink href="https://github.com/ZairRaaa/Semana_6_practica_2">Semana_6_practica_2</RepositoryLink>
          <div className="concept-grid">
            <article>
              <h3>Navegar entre vistas</h3>
              <p>Las capturas muestran Inicio, Catálogo y Consultas. La guía plantea routing del lado del cliente con React Router, además de una página para rutas no encontradas.</p>
            </article>
            <article>
              <h3>Dar forma a los datos</h3>
              <p>El catálogo muestra productos, precios, búsqueda y categoría. La guía conecta esta vista con Axios, async/await y estados de carga, datos y error.</p>
            </article>
          </div>
          <details className="lesson-details">
            <summary>Eventos, listas y formularios <span aria-hidden="true">+</span></summary>
            <p>El trabajo propone listas con claves estables, renderizado condicional y un formulario controlado. Cada cambio de campo actualiza el estado; la interfaz debe informar cuándo carga o cuándo falla una petición.</p>
            <p>Las imágenes documentan las vistas disponibles. La cancelación de peticiones, los estados de error y la navegación sin recarga requieren comprobar el proyecto en ejecución.</p>
          </details>
          <ProjectEvidence images={weekSixEvidence.nido} />
        </section>
        <section className="lesson" id="tecnoandes">
          <span className="section-marker">04 / TRABAJO 3 · RECUPERACIÓN</span>
          <h2>TecnoAndes: componer<br />para <em>comprender.</em></h2>
          <p className="section-lead">El panel de ventas reúne métricas, gráficos, pedidos y un laboratorio de estilos. Recuperación de la práctica de la semana 5, documentada en esta semana.</p>
          <RepositoryLink href="https://github.com/taangel687-netizen/ZAIR-ROJAS-SEMANA_05">ZAIR-ROJAS-SEMANA_05</RepositoryLink>
          <div className="concept-grid">
            <article>
              <h3>Props y composición</h3>
              <p>El informe describe App como organizador y Dashboard como estructura compartida. Panel y MetricCard reciben datos mediante props y contenido mediante children.</p>
            </article>
            <article>
              <h3>Tres formas de aplicar estilos</h3>
              <p>CSS Modules organiza los estilos por componente; Tailwind aporta utilidades; los estilos inline permiten expresar valores dinámicos. La captura de StyleLab compara las tres estrategias.</p>
            </article>
          </div>
          <details className="lesson-details">
            <summary>Del HTML inicial al DOM de React <span aria-hidden="true">+</span></summary>
            <p>El documento describe un inspector de CSR que compara el HTML inicial con el DOM después del montaje. Su objetivo es observar cómo React incorpora la interfaz en el navegador.</p>
            <p>Las evidencias incluidas muestran el panel, su vista móvil y el laboratorio de estilos. No incluyen una captura del inspector ni nuevas mediciones de rendimiento.</p>
          </details>
          <ProjectEvidence images={weekSixEvidence.tecnoandes} />
        </section>
        <section className="lesson" id="reflexion">
          <span className="section-marker">05 / LO QUE APRENDÍ</span>
          <h2>Construir también es<br /><em>conectar ideas.</em></h2>
          <div className="reflection-grid">
            <article><h3>¿Qué conecta los trabajos?</h3><p>Separar responsabilidades: los componentes organizan la interfaz, las props transportan información y las rutas ordenan la experiencia.</p></article>
            <article><h3>¿Cómo se complementan?</h3><p>Órbita hace visible el recorrido de un objeto. Nido lleva el trabajo hacia páginas y datos. TecnoAndes reúne composición y estilos dentro de un panel.</p></article>
            <article><h3>¿Qué seguir revisando?</h3><p>La adaptación a distintas pantallas, los estados de carga y error, la claridad del formulario y la separación entre datos, presentación y comportamiento.</p></article>
          </div>
          <p className="source-note">Contenido basado en las guías y el informe reunidos en practica6.md, junto con las capturas de los tres trabajos.</p>
        </section>
      </WeekLayout>
    </EvidenceViewer>
  );
}
