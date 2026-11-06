import { weeks } from '../../data/weeks.js';

export function WeekPagination({ week }) {
  const previous = weeks[week.number - 2];
  const next = weeks[week.number];

  return (
    <nav className="week-pagination" aria-label="Navegación del cuaderno">
      {previous && (
        <a href={'../' + previous.path}><small>SEMANA ANTERIOR</small>{'← ' + previous.label}</a>
      )}
      <a href="../index.html"><small>VOLVER AL CUADERNO</small>{'Las ' + weeks.length + ' semanas ↗'}</a>
      {next && (
        <a href={'../' + next.path}><small>SEMANA SIGUIENTE</small>{next.label + ' →'}</a>
      )}
    </nav>
  );
}
