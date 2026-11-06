import { useLayoutEffect, useRef } from 'react';
import { projects } from '../../data/projects.js';
import { observeReveal } from './reveal.js';

function ProjectCard({ project }) {
  return (
    <article className={project.alternative ? 'project-card alternative' : 'project-card'}>
      <div className="project-top">
        <span>{project.label}</span>
        <span>{project.year}</span>
      </div>
      <div className="project-symbol" aria-hidden="true">{project.symbol}</div>
      <h3>{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <details>
        <summary>Mi participación <span aria-hidden="true">+</span></summary>
        <div className="project-detail">
          <strong>{project.role}</strong>
          <p>{project.contribution}</p>
        </div>
      </details>
    </article>
  );
}

export function Projects() {
  const grid = useRef(null);

  useLayoutEffect(() => observeReveal(grid.current.children), []);

  return (
    <>
      <div className="section-marker">02 / PROYECTOS</div>
      <div className="section-heading">
        <h2>Ideas que toman<br /><em>forma.</em></h2>
        <p>Experiencias donde conecté lo aprendido<br />con problemas de nuestro entorno.</p>
      </div>
      <div className="project-grid" ref={grid}>
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </>
  );
}
