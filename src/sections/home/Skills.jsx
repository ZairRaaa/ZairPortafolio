import { toolLevels, tools } from '../../data/tools.js';

const segments = [1, 2, 3, 4];

function ToolCard({ tool }) {
  const level = toolLevels[tool.level];

  return (
    <article className="tool-card">
      <div className="tool-top">
        <span className="tool-logo">
          <img
            src={'assets/images/herramientas/' + tool.icon}
            alt=""
            width="28"
            height="28"
            loading="lazy"
          />
        </span>
        <h4>{tool.name}</h4>
      </div>
      <p>{tool.description}</p>
      <div className="tool-level"><span>{level.label}</span></div>
      <div className="level-bar" aria-hidden="true">
        {segments.map(segment => (
          <span key={segment} className={segment <= level.filledSegments ? 'filled' : ''} />
        ))}
      </div>
    </article>
  );
}

export function Skills({ ref }) {
  return (
    <div className="skills" ref={ref}>
      <div className="skills-heading">
        <div>
          <span className="section-marker">CONOCIMIENTOS EN PRÁCTICA</span>
          <h3>Mi caja de <em>herramientas.</em></h3>
        </div>
        <p>Datos, desarrollo y colaboración.<br />Distintas herramientas, una misma curiosidad.</p>
      </div>
      <div className="tool-grid">
        {tools.map(tool => <ToolCard key={tool.name} tool={tool} />)}
      </div>
      <p className="level-legend">
        Escala orientativa: formación · básico · intermedio · avanzado. Las barras representan categorías, no porcentajes de dominio.
      </p>
      <div className="method-note">
        <span aria-hidden="true">↻</span>
        <div>
          <strong>También trabajo con Scrum</strong>
          <p>Organización ágil, documentación y colaboración en equipo.</p>
        </div>
      </div>
    </div>
  );
}
