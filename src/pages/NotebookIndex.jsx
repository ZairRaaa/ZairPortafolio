import { weeks } from '../data/weeks.js';

export function NotebookIndex() {
  return (
    <>
      <header>
        <nav aria-label="Navegación principal">
          <a href="../../index.html">Inicio</a>
          <a href="../../pages/cuaderno/index.html">Cuaderno</a>
        </nav>
      </header>
      <main>
        <h1>Cuaderno de aprendizaje</h1>
        <p>{'Mis aprendizajes a lo largo de ' + weeks.length + ' semanas.'}</p>
        <ol>
          {weeks.map(week => (
            <li key={week.number}>
              <a href={week.path}>{week.topic ? week.label + ' · ' + week.topic : week.label}</a>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}
