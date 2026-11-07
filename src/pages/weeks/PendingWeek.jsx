import { WeekLayout } from '../../components/notebook/WeekLayout.jsx';

const sections = [
  { id: 'tema', label: 'Tema de la semana' },
  { id: 'aprendizajes', label: 'Lo que aprendí' },
  { id: 'evidencias', label: 'Actividades y evidencias' },
  { id: 'reflexion', label: 'Reflexión personal' },
];

export function PendingWeek({ week }) {
  const hero = (
    <section className="week-hero" aria-labelledby="week-title">
      <div>
        <p className="eyebrow">BITÁCORA DE APRENDIZAJE</p>
        <h1 id="week-title">{week.label}</h1>
        <p className="hero-summary">Entrada pendiente de completar.</p>
      </div>
    </section>
  );

  return (
    <WeekLayout week={week} title="Entrada pendiente" hero={hero} sections={sections}>
      {sections.map(({ id, label }) => (
        <section key={id} className="lesson" id={id} aria-labelledby={id + '-title'}>
          <h2 id={id + '-title'}>{label}</h2>
          <p className="section-lead">Pendiente de completar.</p>
        </section>
      ))}
    </WeekLayout>
  );
}
