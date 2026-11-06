import { useEffect, useState } from 'react';
import { WeekLayout } from '../../components/notebook/WeekLayout.jsx';
import { weeks } from '../../data/weeks.js';

const week = weeks[4];
const sections = [
  { id: 'actividad', label: '01 · Lo que hicimos' },
  { id: 'herramientas', label: '02 · Las diferencias' },
  { id: 'estructura', label: '03 · El proyecto por dentro' },
  { id: 'silabo', label: '04 · La ruta del sílabo' },
  { id: 'repaso', label: '05 · Un repaso' },
  { id: 'reflexion', label: '06 · Lo que aprendí' },
];

const viteStructure = `mi-proyecto/
├── index.html       # Documento de entrada
├── package.json     # Dependencias y scripts
├── public/          # Recursos públicos
└── src/
    ├── main.jsx     # Montaje de React
    ├── App.jsx      # Componente principal
    └── index.css    # Estilos`;

const nextStructure = `mi-proyecto/
├── package.json     # Dependencias y scripts
├── public/          # Recursos públicos
└── app/             # Puede estar en src/app
    ├── layout.tsx   # Estructura compartida
    ├── page.tsx     # Página de inicio
    └── globals.css  # Estilos globales`;

const explanations = {
  react: 'React construye la interfaz con componentes. La herramienta de desarrollo descrita aquí es Vite.',
  vite: 'Correcto. Vite aporta el servidor de desarrollo y el build; puede trabajar con React y otras tecnologías.',
  next: 'Next.js también integra herramientas de desarrollo, pero es un framework basado en React. La herramienta independiente descrita es Vite.',
};

function ToolQuiz() {
  const [ready, setReady] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => setReady(true), []);

  function checkAnswer(event) {
    event.preventDefault();
    const answer = new FormData(event.currentTarget).get('tool');
    setFeedback(explanations[answer] ?? 'Selecciona una respuesta.');
  }

  return (
    <form id="tool-quiz" onSubmit={checkAnswer} onChange={() => setFeedback('')}>
      <fieldset>
        <legend>¿Cuál aporta el servidor de desarrollo y el build, y puede trabajar con React?</legend>
        <label><input type="radio" name="tool" value="react" required /> React</label>{' '}
        <label><input type="radio" name="tool" value="vite" /> Vite</label>{' '}
        <label><input type="radio" name="tool" value="next" /> Next.js</label>
      </fieldset>
      <button className="week-cta" type="submit" hidden={!ready}>Comprobar respuesta →</button>
      <p id="quiz-feedback" role="status">{feedback}</p>
    </form>
  );
}

function WeekHero() {
  return (
    <section className="week-hero" aria-labelledby="week-title">
      <div>
        <p className="eyebrow">BITÁCORA DE APRENDIZAJE / SEMANA 05</p>
        <h1 id="week-title">Toda aplicación<br />tiene un <em>inicio.</em></h1>
        <p className="hero-summary">Antes de construir una interfaz, hay que conocer el lugar donde va a crecer. Esta semana creamos tres plantillas y comparamos React, Vite y Next.js.</p>
        <a className="week-cta" href="#herramientas">Explorar las diferencias <span aria-hidden="true">↘</span></a>
        <div className="topic-tags"><span>Frontend</span><span>Plantillas de proyecto</span><span>Dependencias</span></div>
      </div>
      <div className="concept-board" aria-label="Relación entre las herramientas">
        <div className="board-top"><span>EL PUNTO DE PARTIDA</span><span>05 / WEB</span></div>
        <div className="board-row"><span className="tool-symbol" aria-hidden="true">⚛</span><div><strong>React</strong><span>Construir la interfaz</span></div><small>01</small></div>
        <div className="board-row"><span className="tool-symbol" aria-hidden="true">ϟ</span><div><strong>Vite</strong><span>Preparar el entorno</span></div><small>02</small></div>
        <div className="board-row"><span className="tool-symbol" aria-hidden="true">N</span><div><strong>Next.js</strong><span>Organizar la aplicación</span></div><small>03</small></div>
        <p>Una biblioteca, una herramienta y un framework. Cada uno cumple un papel.</p>
      </div>
    </section>
  );
}

export function WeekFive() {
  return (
    <WeekLayout
      week={week}
      title="Aprender desde la base"
      hero={<WeekHero />}
      sections={sections}
      indexNote={<>Entender la base.<br />Construir desde ahí.</>}
    >
      <section className="week-section" id="actividad">
        <span className="section-marker">01 / LO QUE HICIMOS</span>
        <h2>Primero, preparar<br /><em>el terreno.</em></h2>
        <div className="activity-layout"><p className="section-lead">En clase creamos las plantillas de tres proyectos: React, Vite y Next.js. El trabajo se centró en el punto de partida y en reconocer sus diferencias.</p><aside className="scope-note"><strong>Alcance de la sesión</strong><p>Se crearon las estructuras iniciales. Todavía no desarrollamos una aplicación completa ni el laboratorio de props y children.</p></aside></div>
        <p className="small-note">Los conceptos y estructuras de esta página complementan la actividad. Los ejemplos son orientativos: no representan archivos ni comandos verificados de los proyectos de clase.</p>
      </section>
      <section className="week-section" id="herramientas">
        <span className="section-marker">02 / ENTENDER LAS DIFERENCIAS</span>
        <h2>Tres nombres.<br /><em>Tres responsabilidades.</em></h2>
        <div className="tool-grid-week">
          <article className="tool-card-week">
            <span className="tool-kind">BIBLIOTECA DE INTERFACES</span>
            <h3>React <span aria-hidden="true">⚛</span></h3>
            <p>Permite construir interfaces con componentes reutilizables. Su responsabilidad principal es describir qué se muestra y actualizarlo cuando cambian los datos.</p>
            <strong>Pienso en componentes.</strong>
            <a href="https://react.dev/learn/creating-a-react-app">Documentación de React ↗</a>
          </article>
          <article className="tool-card-week">
            <span className="tool-kind">HERRAMIENTA DE DESARROLLO</span>
            <h3>Vite <span aria-hidden="true">ϟ</span></h3>
            <p>Ofrece un servidor de desarrollo y un proceso de construcción para producción. Puede preparar proyectos con React y con otras tecnologías.</p>
            <strong>Preparo y ejecuto el proyecto.</strong>
            <a href="https://vite.dev/guide/">Guía de Vite ↗</a>
          </article>
          <article className="tool-card-week">
            <span className="tool-kind">FRAMEWORK BASADO EN REACT</span>
            <h3>Next.js <span aria-hidden="true">↗</span></h3>
            <p>Añade convenciones, rutas y distintas opciones de renderizado a una aplicación React. Su App Router permite combinar componentes de servidor y de cliente.</p>
            <strong>Organizo una aplicación.</strong>
            <a href="https://nextjs.org/docs/app">Documentación de Next.js ↗</a>
          </article>
        </div>
        <div className="relationship"><strong>React + Vite</strong><span>La interfaz y sus herramientas de desarrollo.</span><strong>React dentro de Next.js</strong><span>La interfaz dentro de un framework.</span></div>
        <div className="table-scroll" role="region" aria-label="Comparación de herramientas" tabIndex={0}>
          <table>
            <caption>Qué aporta cada tecnología</caption>
            <thead>
              <tr><th scope="col">Aspecto</th><th scope="col">React</th><th scope="col">Vite</th><th scope="col">Next.js</th></tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Función principal</th><td>Componentes de interfaz</td><td>Desarrollo y build</td><td>Estructura de aplicación React</td>
              </tr>
              <tr>
                <th scope="row">Rutas</th><td>Requiere una solución adicional</td><td>No proporciona un router por sí solo</td><td>Rutas basadas en archivos</td>
              </tr>
              <tr>
                <th scope="row">Renderizado</th><td>Depende del entorno que lo integra</td><td>La plantilla React habitual usa CSR; también admite integración SSR</td><td>Combina estrategias de servidor, estáticas y de cliente</td>
              </tr>
              <tr>
                <th scope="row">Relación</th><td>Puede usarse con Vite o Next.js</td><td>Puede trabajar con React</td><td>Se construye sobre React</td>
              </tr>
            </tbody>
          </table>
        </div>
        <details className="concept-note">
          <summary>¿Qué significa Client Side Rendering? <span aria-hidden="true">+</span></summary>
          <p>En CSR, el navegador ejecuta JavaScript para construir la interfaz. Una plantilla habitual de React con Vite carga un documento HTML y monta los componentes en un elemento raíz.</p>
          <p>Next.js no se limita a CSR: puede entregar HTML generado previamente o en el servidor y añadir interacción en el cliente. Un Client Component también puede participar en el HTML inicial generado en el servidor.</p>
          <a href="https://nextjs.org/docs/app/getting-started/server-and-client-components">Leer sobre componentes de servidor y cliente ↗</a>
        </details>
      </section>
      <section className="week-section" id="estructura">
        <span className="section-marker">03 / RECONOCER EL PROYECTO</span><h2>Las carpetas también<br /><em>cuentan una historia.</em></h2>
        <p className="section-lead">Estas estructuras ilustran dos formas de organizar una aplicación React. Los nombres pueden variar según la plantilla y las opciones elegidas.</p>
        <div className="structure-grid"><article className="file-card"><h3>React con Vite</h3><pre><code>{viteStructure}</code></pre></article><article className="file-card"><h3>Next.js · App Router</h3><pre><code>{nextStructure}</code></pre></article></div>
        <div className="dependency-note"><h3>¿Dónde se gestionan las dependencias?</h3><p><code>package.json</code> declara paquetes y scripts. El archivo de bloqueo, como <code>package-lock.json</code> con npm, registra versiones resueltas; <code>node_modules</code> contiene los paquetes instalados y normalmente se excluye de Git.</p><p>El comando para iniciar el proyecto depende de sus scripts. Conviene leer <code>package.json</code> antes de asumir cómo ejecutarlo.</p></div>
      </section>
      <section className="week-section" id="silabo">
        <span className="section-marker">04 / LA RUTA DEL SÍLABO</span><h2>Lo que viene<br /><em>después del inicio.</em></h2>
        <p className="section-lead">La semana plantea un recorrido más amplio. Estos temas quedan como referencia para continuar; no se presentan como ejercicios realizados en la sesión.</p>
        <div className="syllabus-list">
          <details>
            <summary>01 · Estructura, operación y CSR <span>Referencia</span></summary>
            <p>Comprender cómo se inicia una aplicación, cómo se gestionan sus dependencias y dónde se renderiza la interfaz.</p>
          </details>
          <details>
            <summary>02 · Componentes, JSX, props y children <span>Por desarrollar</span></summary>
            <p>JSX permite expresar marcado dentro de JavaScript. Las props transmiten información a un componente; children recibe el contenido anidado entre sus etiquetas.</p>
          </details>
          <details>
            <summary>03 · Estilos en una aplicación <span>Por desarrollar</span></summary>
            <p>El sílabo incluye estilos inline, hojas CSS, CSS Modules, styled-components y frameworks CSS. Son alternativas con diferentes formas de organizar y aplicar los estilos.</p>
          </details>
          <details>
            <summary>04 · Laboratorio 05A <span>Pendiente</span></summary>
            <p>Pasar datos con props y children para mostrarlos en un componente hijo. Este laboratorio no se desarrolló en la actividad descrita.</p>
            <a href="https://react.dev/learn/passing-props-to-a-component">Consultar props y children en React ↗</a>
          </details>
        </div>
      </section>
      <section className="week-section" id="repaso" aria-labelledby="review-title">
        <span className="section-marker">05 / UNA PAUSA PARA REPASAR</span>
        <h2 id="review-title">¿Quién hace <em>qué?</em></h2>
        <ToolQuiz />
        <noscript><p>Respuesta: Vite proporciona las herramientas de desarrollo y construcción; React se ocupa de la interfaz.</p></noscript>
      </section>
      <section className="week-section reflection" id="reflexion"><span className="section-marker">06 / MI REFLEXIÓN</span><h2>Crear la plantilla<br />es el <em>primer paso.</em></h2><p className="section-lead">Esta sesión fue un primer acercamiento a tres formas de iniciar un proyecto. La diferencia central es el papel de cada herramienta: React aporta los componentes, Vite prepara el entorno y Next.js organiza una aplicación basada en React.</p><p>El siguiente paso será dar contenido a esas estructuras y practicar la comunicación entre componentes con props y children.</p></section>
    </WeekLayout>
  );
}
