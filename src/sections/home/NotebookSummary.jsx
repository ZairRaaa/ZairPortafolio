import { useLayoutEffect, useRef } from 'react';
import { weeks } from '../../data/weeks.js';
import { observeReveal } from './reveal.js';

export function NotebookSummary() {
  const panel = useRef(null);

  useLayoutEffect(() => observeReveal([panel.current]), []);

  return (
    <div className="notebook-inner" ref={panel}>
      <div className="notebook-copy">
        <div className="section-marker">04 / CUADERNO DE APRENDIZAJE</div>
        <h2>Una semana.<br />Una nueva <em>perspectiva.</em></h2>
        <p>Mi recorrido en Desarrollo de Aplicaciones Web: un espacio para documentar lo que aprendo, lo que practico y lo que descubro.</p>
        <a className="button light" href="pages/cuaderno/index.html">Abrir mi cuaderno <span aria-hidden="true">↗</span></a>
      </div>
      <div className="week-panel">
        <div className="week-panel-heading"><span>EL RECORRIDO</span><span>{weeks.length + ' SEMANAS'}</span></div>
        <div className="week-grid">
          {weeks.map(week => (
            <a key={week.number} href={'pages/cuaderno/' + week.path} aria-label={'Abrir semana ' + week.number}>
              {week.code}<span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <p><span className="small-dot"></span> Un espacio en construcción, semana a semana.</p>
      </div>
    </div>
  );
}
