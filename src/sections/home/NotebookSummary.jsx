import { useLayoutEffect, useRef } from 'react';
import { observeReveal } from './reveal.js';

const weeks = Array.from({ length: 15 }, (_, index) => index + 1);

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
          {weeks.map(week => {
            const number = String(week).padStart(2, '0');
            return (
              <a key={week} href={'pages/cuaderno/semana-' + number + '/index.html'} aria-label={'Abrir semana ' + week}>
                {number}<span aria-hidden="true">↗</span>
              </a>
            );
          })}
        </div>
        <p><span className="small-dot"></span> Un espacio en construcción, semana a semana.</p>
      </div>
    </div>
  );
}
