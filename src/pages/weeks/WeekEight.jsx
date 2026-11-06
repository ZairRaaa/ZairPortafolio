import { WeekLayout } from '../../components/notebook/WeekLayout.jsx';
import { weeks } from '../../data/weeks.js';

const week = weeks[7];
const sections = [
  { id: 'semana', label: '01 · Esta semana' },
  { id: 'balance', label: '02 · El camino recorrido' },
  { id: 'continuidad', label: '03 · Lo que sigue' },
];

const journey = [
  {
    number: '01–02',
    title: 'Entender la web',
    subtitle: 'Fundamentos, requerimientos e interfaces',
    description: 'El recorrido comienza con el funcionamiento de la web y la organización de interfaces con HTML y CSS.',
    links: [
      { week: 1, label: 'S01 · Fundamentos web ↗' },
      { week: 2, label: 'S02 · Primeras interfaces ↗' },
    ],
  },
  {
    number: '03–04',
    title: 'Dar vida a la interfaz',
    subtitle: 'Interacción y JavaScript',
    description: 'Los trabajos pasan de la composición visual a los eventos, la manipulación del DOM y las animaciones en Canvas.',
    links: [
      { week: 3, label: 'S03 · Huellitas y evidencias ↗' },
      { week: 4, label: 'S04 · JavaScript en acción ↗' },
    ],
  },
  {
    number: '05–06',
    title: 'Construir con componentes',
    subtitle: 'Plantillas, props y navegación',
    description: 'React, Vite y Next.js introducen el entorno de trabajo. Después, los componentes y las props conectan las piezas de la aplicación.',
    links: [
      { week: 5, label: 'S05 · El entorno de desarrollo ↗' },
      { week: 6, label: 'S06 · Componentes que conectan ↗' },
    ],
  },
  {
    number: '07',
    title: 'Integrar lo aprendido',
    subtitle: 'Parcial y React Hooks',
    description: 'La biblioteca universitaria integra lo aprendido. Apex Motors y TaskMaster Pro amplían el recorrido hacia estado, efectos y persistencia.',
    links: [{ week: 7, label: 'S07 · Estado que transforma ↗' }],
  },
];

function WeekHero() {
  return (
    <section className="week-hero" aria-labelledby="week-title">
      <div>
        <p className="eyebrow">{'BITÁCORA DE APRENDIZAJE / SEMANA ' + week.code}</p>
        <h1 id="week-title">Una pausa para mirar<br /><em>lo construido.</em></h1>
        <p className="hero-summary">Esta semana el ingeniero realizó la consolidación de notas. El examen parcial ya se había desarrollado en la semana 7, por lo que no hubo una nueva práctica.</p>
        <a className="week-cta" href="#balance">Recorrer esta etapa <span aria-hidden="true">↘</span></a>
        <div className="topic-tags"><span>Consolidación de notas</span><span>Cierre de etapa</span></div>
      </div>
      <div className="chapter-card" aria-label="Semana 8: consolidación de notas; parcial realizado en la semana 7">
        <div className="cover-label"><span>CUADERNO DE APRENDIZAJE</span><span>{week.code + ' / ' + weeks.length}</span></div>
        <span className="chapter-number" aria-hidden="true">{week.code}<span>.</span></span>
        <p className="chapter-caption">Cada avance cuenta.<br /><strong>También detenerse a observar.</strong></p>
        <div className="chapter-status"><span>07 · Parcial realizado</span><span>08 · Consolidación</span></div>
      </div>
    </section>
  );
}

function JourneyStep({ step }) {
  return (
    <details className="journey-step">
      <summary>
        <span className="journey-number">{step.number}</span>
        <span><strong>{step.title}</strong><small>{step.subtitle}</small></span>
        <span className="journey-toggle" aria-hidden="true">+</span>
      </summary>
      <div className="journey-body">
        <p>{step.description}</p>
        <div className="journey-links">
          {step.links.map(link => (
            <a key={link.week} href={'../' + weeks[link.week - 1].path}>{link.label}</a>
          ))}
        </div>
      </div>
    </details>
  );
}

export function WeekEight() {
  return (
    <WeekLayout
      week={week}
      title="Una pausa para consolidar"
      hero={<WeekHero />}
      sections={sections}
      indexNote={<>Mirar el recorrido.<br />Reconocer las conexiones.<br />Continuar aprendiendo.</>}
    >
      <section className="lesson" id="semana">
        <span className="section-marker">01 / ESTA SEMANA</span>
        <h2>Un espacio para<br /><em>consolidar.</em></h2>
        <p className="section-lead">La actividad de la semana estuvo a cargo del docente: consolidar las notas. Esta entrada deja constancia de ese momento dentro del cuaderno.</p>
        <div className="concept-grid">
          <article><h3>El parcial fue en la S7</h3><p>La evaluación de biblioteca universitaria y sus evidencias están documentadas en la semana anterior, junto con los trabajos de hooks.</p></article>
          <article><h3>Sin nuevas actividades</h3><p>No se desarrollaron nuevas prácticas ni se incorporaron entregables durante esta semana. Por eso, este espacio funciona como una pausa entre etapas.</p></article>
        </div>
        <a className="repo-link" href="../semana-07/index.html#biblioteca">
          <span><small>VOLVER A LA EVALUACIÓN</small><strong>El parcial de biblioteca universitaria</strong></span><span aria-hidden="true">↗</span>
        </a>
      </section>
      <section className="lesson" id="balance">
        <span className="section-marker">02 / EL CAMINO RECORRIDO</span>
        <h2>De la primera idea<br />a una <em>aplicación.</em></h2>
        <p className="section-lead">Una mirada a las entradas anteriores del cuaderno. Abre cada etapa para recordar sus temas y volver a los trabajos.</p>
        <div className="journey">
          {journey.map(step => <JourneyStep key={step.number} step={step} />)}
        </div>
        <p className="source-note">Este recorrido resume contenido ya documentado; no representa actividades nuevas de la semana 8.</p>
      </section>
      <section className="lesson" id="continuidad">
        <span className="section-marker">03 / LO QUE SIGUE</span>
        <h2>El cuaderno<br /><em>continúa abierto.</em></h2>
        <p className="section-lead">Hasta aquí, el recorrido conecta estructura, interacción, componentes y estado. Las siguientes entradas recogerán los nuevos temas y prácticas conforme se desarrollen.</p>
        <div className="closing-note">
          <span aria-hidden="true">↗</span>
          <p>Una semana sin una nueva práctica también forma parte del proceso.<br /><strong>Queda registrado el cierre; el aprendizaje continúa.</strong></p>
        </div>
      </section>
    </WeekLayout>
  );
}
