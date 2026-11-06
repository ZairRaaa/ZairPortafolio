import { EvidenceGallery } from '../../components/gallery/EvidenceGallery.jsx';
import { EvidenceViewer } from '../../components/gallery/EvidenceViewer.jsx';
import { WeekLayout } from '../../components/notebook/WeekLayout.jsx';
import { weekNineEvidence } from '../../data/week-nine-evidence.js';
import { weeks } from '../../data/weeks.js';

const week = weeks[8];
const sections = [
  { id: 'recorrido', label: '01 · El punto de partida' },
  { id: 'patio', label: '02 · Patio' },
  { id: 'contactos', label: '03 · Registro de contactos' },
  { id: 'comparativa', label: '04 · PHP frente a JSP' },
  { id: 'reflexion', label: '05 · Lo que aprendí' },
];

function WeekHero() {
  return (
    <section className="week-hero" aria-labelledby="week-title">
      <div>
        <p className="eyebrow">BITÁCORA DE APRENDIZAJE / SEMANA 09</p>
        <h1 id="week-title">Detrás de cada formulario,<br /><em>un servidor responde.</em></h1>
        <p className="hero-summary">Una inscripción a talleres y un registro de contactos. Dos prácticas para seguir una petición desde el navegador hasta el código que la valida, guarda los datos y construye la respuesta.</p>
        <a className="week-cta" href="#recorrido">Explorar mis trabajos <span aria-hidden="true">↘</span></a>
        <div className="topic-tags"><span>PHP y JSP</span><span>HTTP y sesiones</span><span>Apache y Tomcat</span></div>
      </div>
      <figure className="project-cover">
        <div className="cover-label"><span>DEL NAVEGADOR AL SERVIDOR</span><span>09 / 15</span></div>
        <img src="images/trabajo-1-04.webp" alt="Portada de Patio con catálogo de talleres y formulario de inscripción" width="962" height="452" />
        <figcaption className="cover-caption"><span>Dos prácticas de backend.<br /><strong>Un mismo ciclo de solicitud y respuesta.</strong></span><span aria-hidden="true">{'{09}'}</span></figcaption>
      </figure>
    </section>
  );
}

export function WeekNine() {
  return (
    <EvidenceViewer>
      <WeekLayout
        week={week}
        title="Detrás del formulario"
        hero={<WeekHero />}
        sections={sections}
        indexNote={<>Recibir la petición.<br />Validar los datos.<br />Responder con claridad.</>}
      >
        <section className="lesson" id="recorrido">
          <span className="section-marker">01 / EL PUNTO DE PARTIDA</span>
          <h2>De la interfaz<br /><em>al lado del servidor.</em></h2>
          <p className="section-lead">Después de trabajar con componentes y estado en React, empecé la unidad de desarrollo fullstack. El punto de partida fue seguir qué ocurre cuando el navegador envía un formulario y el servidor debe decidir cómo responder.</p>
          <div className="project-directory">
            <a href="#patio"><span>01 / PRÁCTICA INDIVIDUAL</span><h3>Patio ↗</h3><p>Inscripción a talleres con una versión en PHP y otra en JSP.</p></a>
            <a href="#contactos"><span>02 / PRÁCTICA GRUPAL</span><h3>Registro de contactos ↗</h3><p>Validación, listas por sesión y pruebas de solicitudes HTTP.</p></a>
          </div>
          <ol className="request-flow" aria-label="Recorrido de una petición HTTP">
            <li>Navegador</li><li>Resolución del nombre</li><li>Conexión TCP</li><li>Petición HTTP</li><li>Servidor y backend</li><li>Respuesta y renderizado</li>
          </ol>
          <p className="source-note">El diagrama resume el flujo estudiado. En el laboratorio se usó <code>localhost</code>, que apunta al propio equipo.</p>
        </section>
        <section className="lesson" id="patio">
          <span className="section-marker">02 / TRABAJO 1 · 28 DE OCTUBRE</span>
          <h2>Patio: reservar un lugar<br /><em>para crear.</em></h2>
          <p className="section-lead">El reto individual fue desplegar dos versiones del mismo formulario. Patio permite elegir un taller, enviar nombre y correo y ver una confirmación con la actividad seleccionada.</p>
          <a className="repo-link" href="https://github.com/ZairRaaa/Semana_9_practica_1"><span><small>EXPLORAR EL CÓDIGO</small><strong>Semana_9_practica_1</strong></span><span aria-hidden="true">↗</span></a>
          <div className="concept-grid">
            <article>
              <h3>PHP con Apache</h3>
              <p>El formulario envía los campos por <code>POST</code>. El código comprueba el método, valida el correo y el taller, guarda la inscripción en <code>$_SESSION</code> y redirige con un <code>302</code> a la página de confirmación.</p>
            </article>
            <article>
              <h3>JSP con Tomcat</h3>
              <p>La versión JSP recibe los parámetros mediante el objeto <code>request</code>. La confirmación muestra la inscripción de demostración conservada en la sesión. Las capturas muestran PHP en el puerto 8080 y JSP en el 8081.</p>
            </article>
          </div>
          <div className="evidence-heading"><h3>El trabajo en imágenes.</h3><p>7 capturas. Abre una y recorre la galería con las flechas.</p></div>
          <EvidenceGallery images={weekNineEvidence.patio} compact />
        </section>
        <section className="lesson" id="contactos">
          <span className="section-marker">03 / TRABAJO 2 · 29 DE OCTUBRE</span>
          <h2>Un formulario,<br /><em>una lista por sesión.</em></h2>
          <p className="section-lead">En equipo con <strong>Ángel Tocas Anglas</strong>, desarrollamos un registro de contactos en PHP y JSP. Me encargué del módulo PHP y el despliegue en XAMPP/Apache; Ángel trabajó el módulo JSP, el despliegue en Tomcat y las pruebas.</p>
          <a className="repo-link" href="https://github.com/ZairRaaa/Semana_9_practica_2"><span><small>EXPLORAR EL CÓDIGO</small><strong>Semana_9_practica_2</strong></span><span aria-hidden="true">↗</span></a>
          <div className="concept-grid">
            <article>
              <h3>Validar y guardar</h3>
              <p>PHP recibe el formulario por <code>POST</code> y usa <code>$_SESSION</code> para mantener la lista de contactos. En la versión JSP, Tomcat procesa el registro y la vista presenta la tabla con JSTL, según el informe.</p>
            </article>
            <article>
              <h3>Probar también el error</h3>
              <p>Las capturas de PHP muestran una entrada de prueba con etiquetas de script presentada como texto y el aviso <code>405</code> al acceder por <code>GET</code>. El primero ilustra el escape de salida; el segundo comprueba la restricción del método.</p>
            </article>
          </div>
          <aside className="context-note"><strong>Estado de sesión</strong><p>Los contactos del ejercicio se conservan entre peticiones de la misma sesión. Las capturas no muestran almacenamiento en una base de datos.</p></aside>
          <div className="evidence-heading"><h3>El trabajo en imágenes.</h3><p>8 capturas. Abre una y recorre la galería con las flechas.</p></div>
          <EvidenceGallery images={weekNineEvidence.contactos} compact />
        </section>
        <section className="lesson" id="comparativa">
          <span className="section-marker">04 / PHP FRENTE A JSP</span>
          <h2>Dos entornos.<br /><em>El mismo problema.</em></h2>
          <p className="section-lead">Comparé cómo cada entorno despliega la aplicación, procesa los datos del formulario y recupera el estado de la sesión.</p>
          <div className="comparison">
            <table>
              <caption>Comparativa de las dos versiones del laboratorio</caption>
              <thead><tr><th scope="col">Aspecto</th><th scope="col">PHP</th><th scope="col">JSP</th></tr></thead>
              <tbody>
                <tr><th scope="row">Despliegue local</th><td>Apache en XAMPP; archivos bajo <code>htdocs</code>.</td><td>Tomcat; aplicación bajo <code>webapps</code>.</td></tr>
                <tr><th scope="row">Procesamiento</th><td>El intérprete ejecuta el script que atiende la petición.</td><td>El contenedor traduce y compila la página como servlet cuando corresponde.</td></tr>
                <tr><th scope="row">Datos y sesión</th><td><code>filter_input()</code> y <code>$_SESSION</code>.</td><td><code>request.getParameter()</code> y objeto <code>session</code>.</td></tr>
                <tr><th scope="row">Escape en HTML</th><td><code>htmlspecialchars()</code> para datos insertados como texto.</td><td>La guía propone <code>&lt;c:out&gt;</code> al mostrar datos en la vista.</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="lesson" id="reflexion">
          <span className="section-marker">05 / LO QUE APRENDÍ</span>
          <h2>La respuesta empieza<br /><em>antes de renderizar.</em></h2>
          <div className="reflection-grid">
            <article>
              <h3>La interfaz solo inicia el viaje</h3>
              <p>Entendí por qué el servidor debe comprobar el método y validar los datos aunque el navegador ya revise el formulario. Cada petición puede llegar por un camino distinto.</p>
            </article>
            <article>
              <h3>Validar y escapar resuelven problemas distintos</h3>
              <p>Validar me ayuda a decidir si acepto un dato. Escaparlo al mostrarlo hace que el navegador lo lea como texto dentro del HTML.</p>
            </article>
            <article>
              <h3>Los puertos y los logs también cuentan</h3>
              <p>Revisar el puerto activo, la URL y el código de respuesta me ayuda a distinguir un problema de despliegue de un error en el código que procesa el formulario.</p>
            </article>
          </div>
          <p className="source-note">Entrada elaborada a partir de la guía individual, la guía grupal y las 15 capturas aportadas.</p>
        </section>
      </WeekLayout>
    </EvidenceViewer>
  );
}
