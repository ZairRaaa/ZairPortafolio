import { useState } from 'react';

const chapters = [
  { id: 'sobre-mi', label: 'Sobre mí', note: 'De dónde vengo y qué me da curiosidad.', x: 64, y: 190 },
  { id: 'proyectos', label: 'Proyectos', note: 'Ideas puestas a prueba con software y datos.', x: 145, y: 120 },
  { id: 'formacion', label: 'Formación', note: 'Lo que aprendí dentro y fuera de la universidad.', x: 239, y: 168 },
  { id: 'cuaderno', label: 'Cuaderno', note: 'Quince semanas para seguir el rastro de lo aprendido.', x: 326, y: 96 },
  { id: 'contacto', label: 'Contacto', note: 'Un punto de partida para conversar y colaborar.', x: 408, y: 49 },
];

const route = [
  'M64 190C97 208 107 120 145 120',
  'M145 120C183 120 205 185 239 168',
  'M239 168C273 151 284 98 326 96',
  'M326 96C368 94 378 87 408 49',
];

function chapterNumber(index) {
  return String(index + 1).padStart(2, '0');
}

export function JourneyMap() {
  const [preview, setPreview] = useState(0);
  const current = chapters[preview];

  return (
    <section className="journey-section wrap" aria-labelledby="journey-title">
      <div className="journey-intro">
        <div>
          <p className="journey-kicker">MAPA DEL PORTAFOLIO</p>
          <h2 id="journey-title">Una idea lleva a <em>otra.</em></h2>
        </div>
        <p>Elige una de las cinco paradas para explorar mi recorrido.</p>
      </div>
      <div className="journey-board">
        <figure className="journey-figure">
          <div className="journey-coordinate" aria-hidden="true">FIG. 01 <span>CHUPACA · PERÚ</span></div>
          <svg className="journey-chart" viewBox="0 0 470 240" aria-hidden="true" focusable="false">
            <path className="journey-axis" d="M29 20V216H440M29 164H440M29 111H440M29 59H440M121 20V216M213 20V216M305 20V216M397 20V216" />
            {route.map((segment, index) => (
              <g key={segment}>
                <path className="journey-route" d={segment} />
                <path className={index < preview ? 'journey-trace is-traced' : 'journey-trace'} d={segment} pathLength="1" />
              </g>
            ))}
            {chapters.map(({ id, x, y }, index) => (
              <g className={index === preview ? 'journey-node is-preview' : 'journey-node'} key={id}>
                <circle className="journey-halo" cx={x} cy={y} r="14" />
                <circle className="journey-point" cx={x} cy={y} r="4.5" />
                <text x={x + 12} y={y - 10}>{chapterNumber(index)}</text>
              </g>
            ))}
          </svg>
          <figcaption className="journey-caption">
            <span>{chapterNumber(preview) + ' / ' + current.label}</span>
            <p>{current.note}</p>
          </figcaption>
        </figure>
        <nav className="journey-nav" aria-label="Explorar el portafolio">
          <ol>
            {chapters.map(({ id, label, note }, index) => (
              <li key={id}>
                <a
                  href={'#' + id}
                  aria-describedby={'journey-note-' + id}
                  className={index === preview ? 'is-preview' : undefined}
                  onFocus={() => setPreview(index)}
                  onPointerEnter={() => setPreview(index)}
                >
                  <span className="journey-number" aria-hidden="true">{chapterNumber(index)}</span>
                  <span>{label}</span>
                  <span className="journey-arrow" aria-hidden="true">↗</span>
                </a>
                <span id={'journey-note-' + id} hidden>{note}</span>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
