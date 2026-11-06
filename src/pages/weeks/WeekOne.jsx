import { useEffect, useRef, useState } from 'react';
import { AppearanceControls } from '../../components/layout/AppearanceControls.jsx';
import { ReadingProgress } from '../../components/layout/ReadingProgress.jsx';
import { WeekIndex } from '../../components/notebook/WeekIndex.jsx';
import { useAppearance } from '../../hooks/useAppearance.js';

const sections = [
  { id: 'punto-partida', label: '01 · Punto de partida' },
  { id: 'conceptos', label: '02 · Ideas fundamentales' },
  { id: 'recorrido', label: '03 · Cómo funciona la web' },
  { id: 'roles', label: '04 · Roles y herramientas' },
  { id: 'laboratorio', label: '05 · Laboratorio y evidencia' },
  { id: 'practicas', label: '06 · Mis prácticas' },
  { id: 'reflexion', label: '07 · Mi reflexión' },
  { id: 'fuentes', label: '08 · Fuentes' },
];

const requestSteps = [
  {
    title: 'DNS · Busco la dirección',
    description: 'El navegador necesita resolver el nombre del dominio a una dirección IP, si no dispone ya de esa información en caché.',
  },
  {
    title: 'Conexión · Preparo el camino',
    description: 'IP permite encaminar los paquetes. En HTTP/1.1 y HTTP/2 se usa TCP; HTTPS añade TLS para proteger la comunicación. HTTP/3 utiliza QUIC sobre UDP.',
  },
  {
    title: 'Petición · Solicito un recurso',
    description: 'El cliente envía una petición HTTP, por ejemplo GET, para obtener el documento.',
  },
  {
    title: 'Respuesta · El servidor contesta',
    description: 'Recibo un estado, cabeceras y, cuando corresponde, contenido. Un 200 indica éxito; un 404, que no se encontró el recurso solicitado.',
  },
  {
    title: 'Renderizado · Veo la página',
    description: 'El navegador interpreta HTML y CSS, solicita otros recursos y ejecuta JavaScript cuando corresponde.',
  },
];

const weekStructure = `semana-01/
├── index.html           Contenido y estructura
├── css/semana-01.css    Diseño de esta semana
├── js/semana-01.js      Interacciones de repaso
└── images/             Evidencias gráficas`;

function RequestDemo({ interactive }) {
  const [current, setCurrent] = useState(null);
  const step = requestSteps[current];
  const status = step
    ? (current + 1) + ' de ' + requestSteps.length + ': ' + step.title
    : current === -1 ? 'Recorrido reiniciado.' : '';
  const nextLabel = !step
    ? 'Recorrer paso a paso →'
    : current === requestSteps.length - 1 ? 'Volver al primer paso ↻' : 'Siguiente paso →';

  return (
    <div className="request-demo">
      <div className="address-bar">
        <span aria-hidden="true">◎</span><code>https://ejemplo.test/</code><span>EJEMPLO ILUSTRATIVO</span>
      </div>
      <ol className="request-steps">
        {requestSteps.map(({ title, description }, index) => (
          <li key={title} className={current === index ? 'active' : undefined} aria-current={current === index ? 'step' : undefined}>
            <strong>{title}</strong>
            <p>{description}</p>
          </li>
        ))}
      </ol>
      <div className="demo-controls" hidden={!interactive}>
        <button
          className="button primary"
          id="step-next"
          type="button"
          onClick={() => setCurrent(value => ((value ?? -1) + 1) % requestSteps.length)}
        >
          {nextLabel}
        </button>
        <button className="reset-demo" id="step-reset" type="button" onClick={() => setCurrent(-1)}>Reiniciar</button>
        <span id="step-status" role="status">{status}</span>
      </div>
    </div>
  );
}

function ReviewQuiz({ interactive }) {
  const [feedback, setFeedback] = useState('');

  function checkAnswer(event) {
    event.preventDefault();
    const answer = new FormData(event.currentTarget).get('dns');
    setFeedback(answer === 'dns'
      ? 'Correcto. DNS resuelve nombres de dominio a direcciones IP; no define el diseño ni la estructura de la página.'
      : 'Vuelve a intentarlo: busco el sistema que resuelve nombres. HTML estructura el contenido y CSS define su presentación.');
  }

  return (
    <form className="review-quiz" id="review-quiz" onSubmit={checkAnswer} onChange={() => setFeedback('')}>
      <h3>Un repaso antes de cerrar</h3>
      <fieldset>
        <legend>Si conozco el nombre del sitio, ¿qué sistema ayuda a encontrar su dirección IP?</legend>
        <label><input type="radio" name="dns" value="css" required /> CSS</label>
        <label><input type="radio" name="dns" value="dns" /> DNS</label>
        <label><input type="radio" name="dns" value="html" /> HTML</label>
      </fieldset>
      <button className="button primary" type="submit" hidden={!interactive}>Comprobar mi respuesta ↗</button>
      <p id="quiz-result" role="status">{feedback}</p>
      <noscript><p>Respuesta: DNS relaciona los nombres de dominio con direcciones IP.</p></noscript>
    </form>
  );
}

function PracticeCapture({ src, alt, caption }) {
  const image = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(image.current.complete && image.current.naturalWidth > 0);
  }, []);

  return (
    <figure className={caption ? 'practice-capture wide' : 'practice-capture infographic'} hidden={!caption && !loaded}>
      <div className="capture-surface">
        <img ref={image} src={src} alt={alt} hidden={!loaded} onLoad={() => setLoaded(true)} onError={() => setLoaded(false)} />
        {caption && (
          <div className="capture-placeholder" hidden={loaded}>
            <span aria-hidden="true">▧</span>
            <strong>{caption}</strong>
            <p>{alt}</p>
            <code>{src.slice(src.lastIndexOf('/') + 1)}</code>
            <small>Espacio reservado para la evidencia.</small>
          </div>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function WeekOne() {
  const appearance = useAppearance();
  const content = useRef(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => setInteractive(true), []);

  return (
    <>
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
        <section className="week-hero wrap" aria-labelledby="titulo">
          <nav className="breadcrumbs" aria-label="Ruta de la página">
            <a href="../index.html">Cuaderno</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Semana 01</span>
          </nav>
          <div className="week-hero-grid">
            <div>
              <p className="eyebrow">UNIDAD I · DESARROLLO WEB FRONTEND</p>
              <h1 id="titulo">Antes de crear,<br />entender <em>la web.</em></h1>
              <p className="week-intro">Esta semana organicé las ideas que dan sentido a una aplicación web: cómo viaja una petición, qué hace cada tecnología y cómo empezar a documentar mi aprendizaje.</p>
              <div className="topic-tags">
                <span>Fundamentos web</span>
                <span>Estándares</span>
                <span>Visual Studio Code</span>
              </div>
            </div>
            <div className="week-number" aria-label="Semana 1">
              <span>MI CUADERNO</span>
              <strong aria-hidden="true">01</strong>
              <span>EL PUNTO DE PARTIDA</span>
            </div>
          </div>
          <div className="course-facts">
            <span>IS093A · Desarrollo de Aplicaciones Web</span>
            <span>2026-II</span>
            <span>IX ciclo</span>
            <span>2 h teoría + 4 h práctica / semana</span>
          </div>
        </section>
        <section className="teachers wrap" aria-labelledby="docentes">
          <div className="teachers-intro">
            <span className="section-marker">LA ASIGNATURA</span>
            <h2 id="docentes">Quienes guían<br />el <em>aprendizaje.</em></h2>
            <p>Una asignatura teórico-práctica de la Facultad de Ingeniería de Sistemas de la UNCP.</p>
          </div>
          <article className="teacher">
            <div className="teacher-photo">
              <img src="../../../assets/images/docentes/docente_1.webp" alt="Dr. Jaime Suasnábar Terrel" width="1225" height="2222" loading="lazy" />
            </div>
            <div>
              <span>DOCENTE DEL CURSO</span>
              <h3>Dr. Jaime<br />Suasnábar Terrel</h3>
              <p>Desarrollo de Aplicaciones Web</p>
            </div>
          </article>
          <article className="teacher">
            <div className="teacher-photo closeup">
              <img src="../../../assets/images/docentes/docente_2.webp" alt="Mg. Miguel Elías Aguilar Coronación" width="1493" height="1500" loading="lazy" />
            </div>
            <div>
              <span>JEFE DE PRÁCTICA</span>
              <h3>Mg. Miguel Elías<br />Aguilar Coronación</h3>
              <p>Prácticas y laboratorio</p>
            </div>
          </article>
        </section>
        <div className="notebook-layout wrap">
          <WeekIndex items={sections} contentRef={content} heading="EN ESTA SEMANA" observerMargin="-5% 0px -65% 0px">
            Leer, practicar,<br />explicar y volver a intentar.
          </WeekIndex>
          <div className="week-content" ref={content}>
            <section className="lesson" id="punto-partida">
              <span className="section-marker">01 / PUNTO DE PARTIDA</span>
              <h2>Mi mapa para<br />este <em>curso.</em></h2>
              <p>Al revisar el sílabo entendí que el curso conecta dos partes: primero la interfaz que utilizo en el navegador y después la lógica del servidor y el consumo de APIs. Esta primera semana me da el vocabulario para comprender ambas.</p>
              <div className="learning-goals">
                <h3>Lo que busco comprender</h3>
                <ul>
                  <li>Distinguir una página, un sitio, una aplicación y un sistema web.</li>
                  <li>Relacionar DNS, TCP/IP y HTTP con lo que sucede al abrir una dirección.</li>
                  <li>Reconocer los roles frontend, backend y fullstack.</li>
                  <li>Organizar mi entorno de trabajo y el portafolio educativo.</li>
                </ul>
              </div>
              <details className="lesson-details">
                <summary>Cómo se organiza el aprendizaje <span aria-hidden="true">+</span></summary>
                <p>El material plantea usar Teams para el aula virtual, WhatsApp para comunicados, una laptop propia y GitHub para el portafolio. Mi responsabilidad es contar con acceso a los recursos, participar en el equipo y entregar las actividades a tiempo.</p>
                <p>El sílabo distribuye cada promedio parcial en evaluación de logro (50 %), laboratorios y prácticas (25 %), y trabajo de investigación y portafolio (25 %). Por eso, documentar el proceso forma parte del aprendizaje.</p>
              </details>
            </section>
            <section className="lesson" id="conceptos">
              <span className="section-marker">02 / IDEAS FUNDAMENTALES</span>
              <h2>No todo lo que abro<br />es lo <em>mismo.</em></h2>
              <p>Para ordenar los conceptos, los relaciono con ejemplos cercanos. Las categorías pueden superponerse; lo importante es reconocer su alcance.</p>
              <div className="concept-grid">
                <article>
                  <span>01</span>
                  <h3>Página web</h3>
                  <p>Un documento que el navegador interpreta. Esta entrada de la semana 1 es una página.</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Sitio web</h3>
                  <p>Un conjunto de páginas relacionadas. Mi portada y las semanas del cuaderno forman un sitio.</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Aplicación web</h3>
                  <p>Me permite realizar tareas e interactuar con información, como reservar una cita o gestionar un pedido.</p>
                </article>
                <article>
                  <span>04</span>
                  <h3>Sistema web</h3>
                  <p>Integra procesos, usuarios y módulos de una organización; por ejemplo, matrícula, pagos y notas.</p>
                </article>
              </div>
              <div className="margin-note">
                <strong>Internet ≠ Web</strong>
                <p>Internet es la infraestructura que conecta redes. La Web es uno de los servicios que la utiliza. Un navegador me da acceso a documentos y aplicaciones sobre esa infraestructura. <a href="#fuente-mdn">[1]</a></p>
              </div>
              <h3 className="subheading">Nativo y web: dos formas de llegar al usuario</h3>
              <p>El software nativo se desarrolla para una plataforma concreta y suele instalarse en ella. Una solución web utiliza tecnologías que interpreta el navegador. No lo reduzco a «con conexión» o «sin conexión»: algunas aplicaciones web también pueden ofrecer funciones sin Internet.</p>
              <h3 className="subheading">Las piezas que construyen una página</h3>
              <div className="standards">
                <article>
                  <code>&lt;HTML&gt;</code>
                  <div>
                    <h4>Estructura y significado</h4>
                    <p>Organizo títulos, párrafos, enlaces y secciones. HTML es un lenguaje de marcado.</p>
                  </div>
                </article>
                <article>
                  <code>{'{ CSS }'}</code>
                  <div>
                    <h4>Presentación</h4>
                    <p>Defino colores, espacios, tamaños y la adaptación de la página a distintas pantallas.</p>
                  </div>
                </article>
                <article>
                  <code>JS ( )</code>
                  <div>
                    <h4>Comportamiento</h4>
                    <p>Respondo a eventos y actualizo la interfaz, como al cambiar el modo de color.</p>
                  </div>
                </article>
              </div>
              <details className="lesson-details">
                <summary>La web abierta tiene más herramientas <span aria-hidden="true">+</span></summary>
                <p>La Open Web Platform reúne estándares abiertos que permiten construir para distintos navegadores. Intervienen organizaciones como W3C, IETF, Ecma International y Unicode Consortium. La interoperabilidad depende de especificaciones compartidas. <a href="#fuente-w3c">[2]</a></p>
                <dl className="glossary">
                  <dt>XML</dt>
                  <dd>Representa e intercambia información estructurada.</dd>
                  <dt>SVG y WebGL</dt>
                  <dd>SVG describe gráficos vectoriales; WebGL permite gráficos 2D y 3D mediante una API.</dd>
                  <dt>MathML</dt>
                  <dd>Representa expresiones matemáticas.</dd>
                  <dt>WAI-ARIA</dt>
                  <dd>Comunica roles, estados y propiedades de accesibilidad cuando el HTML nativo no basta.</dd>
                  <dt>Web APIs</dt>
                  <dd>Permiten trabajar con el DOM y capacidades del navegador.</dd>
                </dl>
              </details>
            </section>
            <section className="lesson" id="recorrido">
              <span className="section-marker">03 / CÓMO FUNCIONA LA WEB</span>
              <h2>Lo que pasa<br />después de <em>Enter.</em></h2>
              <p>Así resumo una navegación HTTPS habitual. Es un recorrido simplificado: la caché y la versión del protocolo pueden cambiar algunos pasos.</p>
              <RequestDemo interactive={interactive} />
              <p className="source-note">El ejemplo no envía peticiones reales. Repaso la infraestructura con <a href="#fuente-mdn">MDN [1]</a> y los protocolos en <a href="https://httpwg.org/specs/">las especificaciones HTTP</a>.</p>
            </section>
            <section className="lesson" id="roles">
              <span className="section-marker">04 / ROLES Y HERRAMIENTAS</span>
              <h2>Dos lados.<br />Una misma <em>aplicación.</em></h2>
              <div className="role-grid">
                <article>
                  <span>EN EL NAVEGADOR</span>
                  <h3>Frontend</h3>
                  <p>Construye lo que veo y con lo que interactúo: estructura, estilos, formularios y comportamiento de la interfaz.</p>
                  <p className="role-example">HTML · CSS · JavaScript</p>
                </article>
                <article>
                  <span>EN EL SERVIDOR</span>
                  <h3>Backend</h3>
                  <p>Procesa las solicitudes, aplica reglas de negocio, valida datos y controla el acceso a la información.</p>
                  <p className="role-example">Python · PHP · Java · Bases de datos</p>
                </article>
              </div>
              <p className="fullstack-note"><strong>Fullstack:</strong> trabaja en ambos lados y entiende cómo se conectan. No significa que todo deba resolverse con una sola tecnología.</p>
              <h3 className="subheading">También aprendí a distinguir UI y UX</h3>
              <p>UI es la interfaz: botones, tipografía, colores y componentes. UX es la experiencia al realizar una tarea. En mi portafolio, el color pertenece a la interfaz; encontrar una semana sin perderme forma parte de la experiencia.</p>
              <details className="lesson-details">
                <summary>Mi mapa inicial de herramientas <span aria-hidden="true">+</span></summary>
                <dl className="glossary">
                  <dt>Control de versiones</dt>
                  <dd>Git registra cambios; GitHub aloja repositorios y facilita la colaboración.</dd>
                  <dt>Gestor de paquetes</dt>
                  <dd>Organiza dependencias del proyecto.</dd>
                  <dt>Herramientas de construcción</dt>
                  <dd>Preparan o transforman recursos para su uso en la aplicación.</dd>
                  <dt>Librerías y frameworks</dt>
                  <dd>Aportan componentes o una estructura de trabajo. Primero necesito comprender qué problema resuelven.</dd>
                </dl>
              </details>
            </section>
            <section className="lesson" id="laboratorio">
              <span className="section-marker">05 / LABORATORIO 01A</span>
              <h2>Preparar el espacio<br />para <em>construir.</em></h2>
              <p>El sílabo propone reconocer la interfaz de Visual Studio Code, las extensiones y los atajos. Esta es mi guía de repaso para trabajar de forma más ordenada.</p>
              <ol className="practice-list">
                <li>
                  <strong>Abrir la carpeta completa.</strong>
                  <p>El explorador me permite ver archivos y carpetas del proyecto, no solo un documento aislado.</p>
                </li>
                <li>
                  <strong>Ubicar las áreas de trabajo.</strong>
                  <p>Distingo la barra de actividad, la barra lateral, el editor, el panel y la barra de estado.</p>
                </li>
                <li>
                  <strong>Buscar comandos y extensiones.</strong>
                  <p>Uso la paleta para encontrar acciones y reviso qué aporta cada extensión antes de incorporarla.</p>
                </li>
                <li>
                  <strong>Separar contenido, diseño e interacción.</strong>
                  <p>Organizo HTML, CSS y JavaScript para que sea más fácil localizar y modificar cada parte.</p>
                </li>
              </ol>
              <div className="shortcut-list">
                <h3>Atajos para recordar <small>Windows · configuración predeterminada</small></h3>
                <p><span>Paleta de comandos</span><kbd>Ctrl + Shift + P</kbd></p>
                <p><span>Abrir un archivo</span><kbd>Ctrl + P</kbd></p>
                <p><span>Mostrar u ocultar barra lateral</span><kbd>Ctrl + B</kbd></p>
                <p><span>Buscar en el proyecto</span><kbd>Ctrl + Shift + F</kbd></p>
              </div>
              <p className="source-note">Referencia: <a href="#fuente-vscode">interfaz de Visual Studio Code [3]</a> y <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">atajos oficiales para Windows</a>.</p>
              <div className="evidence">
                <span className="section-marker">MI APLICACIÓN EN ESTE PORTAFOLIO</span>
                <h3>De los conceptos a una estructura real.</h3>
                <p>Organicé una portada y un cuaderno de 15 semanas. Separé imágenes, estilos y scripts; además, registré los cambios en commits. Esta página es parte de ese resultado.</p>
                <pre aria-label="Estructura de la semana 1"><code>{weekStructure}</code></pre>
                <a className="text-link" href="../../../index.html">Ver el portafolio construido ↗</a>
              </div>
              <p>Entendí que el cuaderno debe recoger definiciones con mis palabras, procedimientos, resultados y reflexión. GitHub Pages permite publicar HTML, CSS y JavaScript desde un repositorio; la publicación es un paso distinto de guardar un commit. <a href="#fuente-github">[4]</a></p>
            </section>
            <section className="lesson practice-section" id="practicas">
              <span className="section-marker">06 / MIS PRÁCTICAS</span>
              <h2>Aprender haciendo.<br />Explicar con <em>evidencias.</em></h2>
              <p>En estas actividades llevé los fundamentos de la web a dos situaciones: construir mi tarjeta de presentación y argumentar una propuesta de hosting para una empresa.</p>
              <div className="practice-jump">
                <a href="#tarjeta-practica">01 · Mi tarjeta ↘</a>
                <a href="#hosting-practica">02 · La propuesta de hosting ↘</a>
              </div>
              <article className="practice-entry" id="tarjeta-practica">
                <div className="practice-heading">
                  <span className="practice-number" aria-hidden="true">01</span>
                  <div>
                    <p className="practice-kicker">ENTORNO DE DESARROLLO · HTML · GIT</p>
                    <h3>Mi tarjeta de presentación<br />como desarrollador web</h3>
                  </div>
                </div>
                <p>El reto consistió en crear una presentación personal y documentar mi entorno de trabajo. Además del resultado visual, debía demostrar organización del código y uso de las herramientas de desarrollo.</p>
                <div className="practice-brief">
                  <h4>Lo que pedía la actividad</h4>
                  <p>Una tarjeta con foto, nombre, carrera, el rol de desarrollo que más me interesa y enlaces de contacto. La entrega debía reunir el repositorio, una captura del entorno y una respuesta conceptual en un PDF.</p>
                </div>
                <h4 className="practice-subtitle">Así desarrollé mi práctica</h4>
                <ol className="practice-list">
                  <li>
                    <strong>Partí de una estructura HTML.</strong>
                    <p>Usé Emmet para generar la base y organicé la información de la tarjeta.</p>
                  </li>
                  <li>
                    <strong>Preparé el formato automático.</strong>
                    <p>Configuré Prettier para ordenar e indentar el código al guardar el archivo.</p>
                  </li>
                  <li>
                    <strong>Trabajé desde la terminal integrada.</strong>
                    <p>Abrí la terminal de VS Code para ejecutar los comandos de control de versiones y registrar mi trabajo.</p>
                  </li>
                </ol>
                <div className="used-shortcuts">
                  <div>
                    <kbd>! + Tab</kbd>
                    <span>Generar la estructura HTML.</span>
                  </div>
                  <div>
                    <kbd>Ctrl + `</kbd>
                    <span>Abrir la terminal integrada.</span>
                  </div>
                  <div>
                    <kbd>Alt + ↑ / ↓</kbd>
                    <span>Reordenar líneas de código.</span>
                  </div>
                </div>
                <a className="practice-repository" href="https://github.com/ZairRaaa/portafolio-web-uncp"><span><small>REPOSITORIO DE ESTA PRÁCTICA</small><strong>portafolio-web-uncp</strong></span><span aria-hidden="true">↗</span></a>
                <PracticeCapture
                  src={'images/practica-01-entorno-vscode.webp'}
                  alt={'Captura de VS Code con el código HTML, la terminal con el historial de Git y la vista previa de Live Server.'}
                  caption={'Mi entorno de trabajo'}
                />
                <PracticeCapture
                  src={'images/practica-01-tarjeta.webp'}
                  alt={'Vista de la tarjeta de presentación terminada en el navegador.'}
                  caption={'El resultado: mi tarjeta personal'}
                />
                <div className="practice-takeaway">
                  <span className="practice-kicker">MI RESPUESTA CONCEPTUAL</span>
                  <h4>¿Sitio web o aplicación web?</h4>
                  <p>La diferencia principal que identifiqué está en el propósito: un sitio reúne páginas para presentar información, mientras que una aplicación permite realizar tareas y procesar datos. No lo veo como una separación absoluta: un sitio también puede tener contenido dinámico y funciones interactivas.</p>
                </div>
                <p className="practice-closing"><strong>Lo que me llevo:</strong> preparar el editor, formatear el código y registrar cambios son parte del desarrollo, incluso cuando el resultado es una tarjeta sencilla.</p>
              </article>
              <article className="practice-entry" id="hosting-practica">
                <div className="practice-heading">
                  <span className="practice-number" aria-hidden="true">02</span>
                  <div>
                    <p className="practice-kicker">ANÁLISIS · INFRAESTRUCTURA · COMUNICACIÓN</p>
                    <h3>Un hosting para<br />Textiles Andinos S.A.C.</h3>
                  </div>
                </div>
                <p>La segunda práctica planteó el caso de una empresa de prendas de alpaca y algodón que enviaba su catálogo en archivos PDF pesados. Su siguiente paso era un sitio administrable para publicar colecciones, fichas técnicas, galerías, artículos y recibir solicitudes de cotización.</p>
                <div className="practice-brief">
                  <h4>Mi objetivo</h4>
                  <p>Organizar una infografía que explicara por qué un servicio de pago podía ser más adecuado para este caso, comparándolo con una alternativa gratuita y relacionando la inversión con las necesidades de la empresa.</p>
                </div>
                <h4 className="practice-subtitle">Los criterios que ordenan la comparación</h4>
                <div className="hosting-table-wrap">
                  <table className="hosting-comparison">
                    <caption>Qué revisar antes de elegir un plan</caption>
                    <thead>
                      <tr>
                        <th scope="col">Necesidad</th>
                        <th scope="col">En una opción gratuita</th>
                        <th scope="col">En un plan de pago</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">CMS y catálogo</th>
                        <td>Comprobar si admite el servidor y la base de datos que requiere el CMS.</td>
                        <td>Elegir compatibilidad y recursos adecuados para administrar productos.</td>
                      </tr>
                      <tr>
                        <th scope="row">Galerías de imágenes</th>
                        <td>Revisar límites de espacio, transferencia y tamaño de archivos.</td>
                        <td>Dimensionar almacenamiento y transferencia; valorar CDN y optimización.</td>
                      </tr>
                      <tr>
                        <th scope="row">Disponibilidad</th>
                        <td>Revisar restricciones y condiciones de continuidad del servicio.</td>
                        <td>Comparar compromisos de disponibilidad y opciones de recuperación.</td>
                      </tr>
                      <tr>
                        <th scope="row">Seguridad y respaldo</th>
                        <td>Verificar HTTPS, copias de seguridad y responsabilidades del usuario.</td>
                        <td>Valorar respaldos, restauración, actualizaciones y medidas de protección.</td>
                      </tr>
                      <tr>
                        <th scope="row">Crecimiento y soporte</th>
                        <td>Identificar cuotas y canales de ayuda disponibles.</td>
                        <td>Buscar ampliación de recursos y soporte acorde a la operación del negocio.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="source-note">Las prestaciones dependen del proveedor y del plan. Pagar no garantiza por sí solo seguridad o rapidez; también importan la configuración, el mantenimiento y la optimización de imágenes.</p>
                <div className="infographic-gallery" aria-label="Infografía de hosting en tres partes">
                  <PracticeCapture
                    src={'images/practica-02-infografia-01.webp'}
                    alt={'Infografía sobre hosting para Textiles Andinos, parte 1 de 3.'}
                  />
                  <PracticeCapture
                    src={'images/practica-02-infografia-02.webp'}
                    alt={'Infografía sobre hosting para Textiles Andinos, parte 2 de 3.'}
                  />
                  <PracticeCapture
                    src={'images/practica-02-infografia-03.webp'}
                    alt={'Infografía sobre hosting para Textiles Andinos, parte 3 de 3.'}
                  />
                </div>
                <div className="practice-takeaway">
                  <span className="practice-kicker">LA IDEA QUE QUIERO COMUNICAR</span>
                  <h4>Elegir por la necesidad, no solo por el precio.</h4>
                  <p>Para este catálogo administrable, la propuesta de pago debe justificarse con recursos, soporte y capacidad de crecimiento concretos. La infografía conecta esas características con lo que marketing necesita hacer, en lugar de presentar una lista de términos técnicos.</p>
                </div>
                <p className="practice-closing"><strong>Lo que me llevo:</strong> una decisión de infraestructura también debe explicarse con claridad a quienes gestionan el negocio.</p>
              </article>
            </section>
            <section className="lesson" id="reflexion">
              <span className="section-marker">07 / MI REFLEXIÓN</span>
              <h2>Lo que me llevo<br />de esta <em>semana.</em></h2>
              <div className="reflection">
                <h3>¿Qué aprendí?</h3>
                <p>Ahora puedo separar la estructura, la presentación y el comportamiento de una página. También entiendo que abrir una web implica comunicación entre el navegador y un servidor, y que DNS y HTTP cumplen funciones diferentes.</p>
                <h3>¿Cómo lo aprendí?</h3>
                <p>Organicé los conceptos del material y los relacioné con este portafolio: una semana es una página, el cuaderno reúne varias páginas y el cambio de apariencia es una interacción. Explicarlo con un ejemplo propio me ayuda a conectar la teoría.</p>
                <h3>¿Qué necesito seguir practicando?</h3>
                <p>Quiero observar peticiones en las herramientas del navegador, ganar fluidez con VS Code y mejorar la estructura de mis páginas. Mi siguiente paso es profundizar en HTML, XML y CSS.</p>
              </div>
              <ReviewQuiz interactive={interactive} />
            </section>
            <section className="lesson sources" id="fuentes">
              <span className="section-marker">08 / FUENTES Y MATERIAL</span>
              <h2>Para volver a <em>consultar.</em></h2>
              <p>Base del resumen: sílabo de Desarrollo de Aplicaciones Web, periodo 2026-II, y material «Semana 1: Fundamentos de la Tecnología Web», del Dr. Jaime Suasnábar Terrel. Las prácticas se basan en la guía «Práctica Semana 01», mi informe de la tarjeta personal y el enunciado disponible del caso Textiles Andinos S.A.C.</p>
              <ol>
                <li id="fuente-mdn">
                  <a href="https://developer.mozilla.org/es/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work">MDN · ¿Cómo funciona Internet? ↗</a>
                </li>
                <li id="fuente-w3c">
                  <a href="https://www.w3.org/wiki/Open_Web_Platform">W3C · Open Web Platform ↗</a>
                </li>
                <li id="fuente-vscode">
                  <a href="https://code.visualstudio.com/docs/editing/getting-started/userinterface">Visual Studio Code · Interfaz de usuario ↗</a>
                </li>
                <li id="fuente-github">
                  <a href="https://docs.github.com/es/pages/getting-started-with-github-pages/what-is-github-pages">GitHub Docs · ¿Qué es GitHub Pages? ↗</a>
                </li>
              </ol>
            </section>
            <nav className="week-pagination" aria-label="Navegación del cuaderno">
              <a href="../index.html"><small>VOLVER AL ÍNDICE</small>Las 15 semanas ←</a>
              <a href="../semana-02/index.html"><small>SIGUIENTE ENTRADA</small>Semana 02 →</a>
            </nav>
          </div>
        </div>
      </main>
      <footer className="wrap footer">
        <a className="brand" href="../../../index.html" aria-label="Volver al portafolio">zk<span>.</span></a>
        <p>Zair Ken Rojas Cerron<br /><span>Cuaderno de aprendizaje · UNCP</span></p>
        <a href="#contenido">Volver arriba ↑</a>
      </footer>
    </>
  );
}
