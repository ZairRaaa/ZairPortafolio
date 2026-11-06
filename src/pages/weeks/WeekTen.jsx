import { EvidenceGallery } from '../../components/gallery/EvidenceGallery.jsx';
import { EvidenceViewer } from '../../components/gallery/EvidenceViewer.jsx';
import { WeekLayout } from '../../components/notebook/WeekLayout.jsx';
import { weekTenEvidence } from '../../data/week-ten-evidence.js';
import { weeks } from '../../data/weeks.js';

const week = weeks[9];
const sections = [
  { id: 'recorrido', label: '01 · El punto de partida' },
  { id: 'python', label: '02 · Gestor en Python' },
  { id: 'api', label: '03 · API de inventario' },
  { id: 'pruebas', label: '04 · Pruebas HTTP' },
  { id: 'reflexion', label: '05 · Lo que aprendí' },
];

function WeekHero() {
  return (
    <section className="week-hero" aria-labelledby="week-title">
      <div>
        <p className="eyebrow">BITÁCORA DE APRENDIZAJE / SEMANA 10</p>
        <h1 id="week-title">Del modelo<br /><em>a la API.</em></h1>
        <p className="hero-summary">Un gestor de productos en Python y una API de inventario con Express y MySQL. Dos prácticas para modelar datos, validarlos y decidir cómo responder cuando una operación falla.</p>
        <a className="week-cta" href="#recorrido">Explorar mis trabajos <span aria-hidden="true">↘</span></a>
        <div className="topic-tags"><span>Python y POO</span><span>API REST</span><span>Express y MySQL</span></div>
      </div>
      <figure className="project-cover">
        <div className="cover-label"><span>GESTIÓN DE PRODUCTOS</span><span>10 / 15</span></div>
        <img src="images/trabajo-2-01.webp" alt="Panel de Almacén con indicadores de inventario, catálogo y formulario de productos" width="1351" height="1044" />
        <figcaption className="cover-caption"><span>Dos formas de gestionar productos.<br /><strong>De la consola al inventario web.</strong></span><span aria-hidden="true">{'{10}'}</span></figcaption>
      </figure>
    </section>
  );
}

export function WeekTen() {
  return (
    <EvidenceViewer>
      <WeekLayout
        week={week}
        title="Del modelo a la API"
        hero={<WeekHero />}
        sections={sections}
        indexNote={<>Modelar productos.<br />Validar entradas.<br />Comprobar respuestas.</>}
      >
        <section className="lesson" id="recorrido">
          <span className="section-marker">01 / EL PUNTO DE PARTIDA</span>
          <h2>El mismo recurso,<br /><em>dos formas de trabajarlo.</em></h2>
          <p className="section-lead">En la semana 9 seguí una petición desde el formulario hasta el servidor. Esta semana trabajé primero las reglas de un producto en Python y después gestioné un inventario mediante peticiones HTTP y una base de datos.</p>
          <div className="project-directory">
            <a href="#python"><span>01 / PRÁCTICA GRUPAL</span><h3>Gestor en Python ↗</h3><p>Clases, precios y stock desde un menú de consola.</p></a>
            <a href="#api"><span>02 / PRÁCTICA INDIVIDUAL</span><h3>Almacén ↗</h3><p>API REST de productos con Express, MySQL y pruebas en Postman.</p></a>
          </div>
        </section>
        <section className="lesson" id="python">
          <span className="section-marker">02 / TRABAJO 1 · <time dateTime="2026-11-04">4 DE NOVIEMBRE</time></span>
          <h2>Un producto base,<br /><em>distintas reglas de precio.</em></h2>
          <p className="section-lead">Junto con Ángel Tocas Anglas desarrollé un gestor por consola para registrar electrónicos y libros, listar sus precios finales, buscar productos y actualizar el stock.</p>
          <a className="repo-link" href="https://github.com/taangel687-netizen/PRACTICA-SEM-10-AGUILAR1"><span><small>EXPLORAR EL CÓDIGO</small><strong>PRACTICA-SEM-10-AGUILAR1</strong></span><span aria-hidden="true">↗</span></a>
          <div className="concept-grid">
            <article>
              <h3>Herencia y polimorfismo</h3>
              <p><code>Producto</code> reúne los atributos comunes. <code>Electronico</code> y <code>Libro</code> implementan <code>calcular_precio_final()</code> con sus propias reglas. Así, el menú puede llamar al mismo método al listar ambos tipos.</p>
            </article>
            <article>
              <h3>Encapsulamiento y validación</h3>
              <p>La guía propone usar <code>@property</code> y setters para controlar valores como el precio y el stock. Las pruebas muestran cómo el menú presenta <code>ValidationError</code> ante un precio negativo y <code>NotFoundError</code> si el identificador no existe.</p>
            </article>
          </div>
          <aside className="context-note"><strong>Organizar el código por responsabilidad</strong><p>La guía separa el menú en <code>main.py</code>, las clases en <code>models/</code> y las validaciones y excepciones en <code>utils/</code>. El diagrama incluye <code>DescuentoMixin</code> y permite estudiar el orden de resolución de métodos que sigue <code>super()</code>.</p></aside>
          <div className="evidence-heading"><h3>El trabajo en imágenes.</h3><p>3 capturas. Abre una y recorre la galería con las flechas.</p></div>
          <EvidenceGallery images={weekTenEvidence.python} compact />
        </section>
        <section className="lesson" id="api">
          <span className="section-marker">03 / TRABAJO 2 · <time dateTime="2026-11-05">5 DE NOVIEMBRE</time></span>
          <h2>Almacén conecta<br /><em>la interfaz con los datos.</em></h2>
          <p className="section-lead">En la práctica individual trabajé con Node.js y Express para exponer un CRUD de productos respaldado por MySQL. La interfaz de Almacén presenta el catálogo y el formulario de registro.</p>
          <a className="repo-link" href="https://github.com/ZairRaaa/Semana_10_practica_2"><span><small>EXPLORAR EL CÓDIGO</small><strong>Semana_10_practica_2</strong></span><span aria-hidden="true">↗</span></a>
          <ol className="request-flow" aria-label="Recorrido de una petición de inventario">
            <li>Cliente HTTP</li><li>Ruta de Express</li><li>Validación y controlador</li><li>Consulta a MySQL</li><li>Respuesta JSON</li>
          </ol>
          <div className="concept-grid">
            <article>
              <h3>Separar rutas y controladores</h3>
              <p>Las rutas vinculan cada método HTTP con su operación. Los controladores consultan o modifican la tabla <code>productos</code> y devuelven el resultado con un código HTTP.</p>
            </article>
            <article>
              <h3>Reutilizar conexiones</h3>
              <p><code>mysql2/promise</code> permite compartir un pool de conexiones. Los controladores usan <code>await</code> para ejecutar consultas y pasan los datos de entrada como parámetros en las operaciones que los necesitan.</p>
            </article>
          </div>
          <div className="evidence-heading"><h3>El trabajo en imágenes.</h3><p>9 capturas. Abre una y recorre la galería con las flechas.</p></div>
          <EvidenceGallery images={weekTenEvidence.api} compact />
        </section>
        <section className="lesson" id="pruebas">
          <span className="section-marker">04 / PRUEBAS HTTP</span>
          <h2>Cada respuesta<br /><em>dice qué pasó.</em></h2>
          <p className="section-lead">Las capturas de Postman documentan las consultas y el registro de un producto. La actualización y eliminación aparecen en el código del controlador.</p>
          <div className="comparison">
            <table>
              <caption>Operaciones del recurso <code>/api/productos</code></caption>
              <thead><tr><th scope="col">Método</th><th scope="col">Operación</th><th scope="col">Evidencia</th></tr></thead>
              <tbody>
                <tr><th scope="row">GET</th><td>Listar productos o buscar por <code>/:id</code>.</td><td>Postman muestra <code>200</code> al listar y <code>404</code> para un ID inexistente.</td></tr>
                <tr><th scope="row">POST</th><td>Registrar un producto con datos JSON.</td><td>Postman muestra <code>201</code> y el producto creado.</td></tr>
                <tr><th scope="row">PUT</th><td>Actualizar el producto de <code>/:id</code>.</td><td>La captura del controlador muestra la consulta de actualización.</td></tr>
                <tr><th scope="row">DELETE</th><td>Eliminar el producto de <code>/:id</code>.</td><td>La captura del controlador muestra la consulta de eliminación.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="source-note">La prueba adicional con <code>500</code> registra la respuesta genérica que recibe el cliente ante un fallo interno.</p>
        </section>
        <section className="lesson" id="reflexion">
          <span className="section-marker">05 / LO QUE APRENDÍ</span>
          <h2>Una regla clara<br /><em>facilita probar el sistema.</em></h2>
          <div className="reflection-grid">
            <article>
              <h3>Dar a cada clase su responsabilidad</h3>
              <p>El polimorfismo me permitió conservar una sola forma de listar productos y dejar las reglas de precio en la clase que conoce cada tipo.</p>
            </article>
            <article>
              <h3>Hacer visible el motivo del error</h3>
              <p>En consola, las excepciones separan un precio inválido de una búsqueda sin resultados. En la API, el código HTTP y el cuerpo JSON ayudan al cliente a decidir cómo reaccionar.</p>
            </article>
            <article>
              <h3>Comprobar el resultado desde el cliente</h3>
              <p>Postman me permitió revisar el estado HTTP y el cuerpo de la respuesta de forma independiente de la interfaz del inventario.</p>
            </article>
          </div>
          <p className="source-note">Entrada elaborada a partir de la guía de la semana y las 12 capturas de ambos trabajos.</p>
        </section>
      </WeekLayout>
    </EvidenceViewer>
  );
}
