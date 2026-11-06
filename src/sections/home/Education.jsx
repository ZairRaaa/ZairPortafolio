import { additionalEducation, certificates, universityName } from '../../data/education.js';

function CertificateCard({ certificate }) {
  return (
    <article className="certificate-card">
      <div className="certificate-top">
        <span>{certificate.category}</span>
        <span aria-hidden="true">✧</span>
      </div>
      <p className="certificate-institution">{certificate.institution}</p>
      <h3>{certificate.title}</h3>
      <p>{certificate.description}</p>
      <div className="certificate-date">Finalizado · <time>{certificate.date}</time></div>
    </article>
  );
}

export function Education() {
  return (
    <>
      <div className="section-marker">03 / FORMACIÓN Y CERTIFICACIONES</div>
      <div className="section-heading">
        <h2>Aprender es invertir<br />en lo que <em>viene.</em></h2>
        <p>Una formación que conecta la universidad<br />con la práctica y el aprendizaje continuo.</p>
      </div>
      <div className="academic-banner">
        <div className="university-card">
          <img
            src="assets/images/logos/Logo_uncp.webp"
            alt="Escudo de la UNCP"
            width="80"
            height="80"
            loading="lazy"
          />
          <div>
            <span>2022 — ACTUALIDAD</span>
            <h3>Ingeniería de Sistemas</h3>
            <p>{universityName}</p>
          </div>
        </div>
        <div className="academic-semester"><strong>9.º</strong><span>SEMESTRE</span></div>
      </div>
      <div className="certificates-heading">
        <h3>Mis cursos y certificaciones</h3>
        <span>FORMACIÓN SELECCIONADA · 2025</span>
      </div>
      <div className="certificate-grid">
        {certificates.map(certificate => <CertificateCard key={certificate.title} certificate={certificate} />)}
      </div>
      <details className="more-education">
        <summary>
          <span>Más cursos y participación académica <small>{additionalEducation.length + ' experiencias adicionales'}</small></span>
          <span aria-hidden="true">+</span>
        </summary>
        <ul>
          {additionalEducation.map(({ title, institution, date }) => (
            <li key={title}>
              <div><h4>{title}</h4><p>{institution}</p></div>
              <span>{date}</span>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}
