import { useEffect, useRef, useState } from 'react';

const stepInfo = [
  {
    title: 'Base y metadatos',
    subtitle: 'El punto de partida',
    description: 'Base: idioma, viewport, descripción y frameworks. El interruptor muestra su franja introductoria; la configuración permanece cargada.',
  },
  {
    title: 'Navegación adaptable',
    subtitle: 'Siempre encuentra el camino',
    description: 'Bootstrap aporta navbar, collapse y el botón del menú. Prueba la vista móvil para ver cómo se adapta.',
  },
  {
    title: 'Una gran bienvenida',
    subtitle: 'La primera impresión',
    description: 'La bienvenida combina columnas y tipografía de Bootstrap con el fondo degradado y utilidades de Tailwind.',
  },
  {
    title: 'Tarjetas con personalidad',
    subtitle: 'Tres historias por conocer',
    description: 'Las tarjetas usan row y col-md-4; Tailwind añade sombras, bordes redondeados y movimiento al pasar el cursor.',
  },
  {
    title: 'Formulario y validación',
    subtitle: 'Una conversación que empieza',
    description: 'El formulario relaciona labels y mensajes con sus campos, muestra errores y confirma una validación local sin enviar datos.',
  },
  {
    title: 'Pie de página',
    subtitle: 'Mi nombre y mi facultad',
    description: 'El pie de página presenta mi nombre, la Facultad de Ingeniería de Sistemas de la UNCP y el IX semestre.',
  },
];

const initialSteps = stepInfo.map(() => true);

export function HuellitasPanel({ appearance }) {
  const frameRef = useRef(null);
  const [steps, setSteps] = useState(initialSteps);
  const [explanation, setExplanation] = useState('Componentes de Bootstrap y utilidades de Tailwind en una misma interfaz.');
  const [feedback, setFeedback] = useState('La página completa está lista para explorar.');
  const [isMobile, setMobile] = useState(false);
  const [height, setHeight] = useState(null);
  const count = steps.filter(Boolean).length;
  const theme = appearance?.theme ?? 'light';
  const palette = appearance?.palette ?? 'green';

  useEffect(() => {
    const frame = frameRef.current;
    const origin = window.location.origin;

    function syncPreview() {
      frame.contentWindow?.postMessage(
        { type: 'huellitas:state', steps, theme, palette },
        origin === 'null' ? '*' : origin,
      );
    }

    function handleMessage(event) {
      if (event.source !== frame.contentWindow || (origin !== 'null' && event.origin !== origin)) return;
      const data = event.data;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'huellitas:ready') syncPreview();
      if (data.type === 'huellitas:height' && Number.isFinite(data.height)) {
        setHeight(Math.max(350, Math.min(15000, data.height)));
      }
      if (data.type === 'huellitas:enable' && Number.isInteger(data.step) && data.step >= 1 && data.step <= stepInfo.length) {
        setSteps(current => current.map((enabled, index) => index === data.step - 1 || enabled));
        setFeedback('Paso ' + data.step + ' activado desde Huellitas.');
      }
    }

    frame.addEventListener('load', syncPreview);
    window.addEventListener('message', handleMessage);
    syncPreview();
    return () => {
      frame.removeEventListener('load', syncPreview);
      window.removeEventListener('message', handleMessage);
    };
  }, [steps, theme, palette]);

  function toggleStep(index) {
    const enabled = !steps[index];
    setSteps(current => current.map((step, position) => position === index ? enabled : step));
    setExplanation(stepInfo[index].description);
    setFeedback('Paso ' + (index + 1) + (enabled ? ' activado.' : ' desactivado.'));
  }

  function setAll(enabled) {
    setSteps(stepInfo.map(() => enabled));
    setFeedback(enabled ? 'Los seis pasos están activos.' : 'Todo está oculto. Activa un paso para empezar.');
  }

  return (
    <section className="lab-workspace" aria-label="Laboratorio interactivo de seis pasos">
      <aside className="step-panel">
        <div className="panel-dogs">
          <img src="images/huellitas.webp" alt="Milo, Luna y Bruno juntos en el jardín" />
          <span>El equipo Huellitas<span aria-hidden="true">♡</span></span>
        </div>
        <div className="panel-heading">
          <span className="section-marker">CONSTRUYE LA PÁGINA</span>
          <h2>Control de pasos<span aria-hidden="true">↘</span></h2>
          <p>Enciende o apaga cada parte.</p>
        </div>
        <div className="step-buttons">
          {stepInfo.map(({ title, subtitle }, index) => (
            <button
              key={title}
              className="step-toggle"
              type="button"
              data-step={index + 1}
              aria-pressed={steps[index]}
              onClick={() => toggleStep(index)}
            >
              <span className="step-index">{index + 1}</span>
              <span><strong>{title}</strong><small>{subtitle}</small></span>
              <span className="step-check" aria-hidden="true">✓</span>
            </button>
          ))}
        </div>
        <div className="bulk-controls">
          <button type="button" id="enable-all" onClick={() => setAll(true)}>Activar todos</button>
          <button type="button" id="disable-all" onClick={() => setAll(false)}>Desactivar todos</button>
        </div>
        <div className="step-progress">
          <div><span>Partes visibles</span><strong id="step-count">{count} / {stepInfo.length}</strong></div>
          <progress id="step-progress" value={count} max={stepInfo.length} aria-label="Partes visibles">
            {count} de {stepInfo.length}
          </progress>
        </div>
        <p id="step-feedback" role="status">{feedback}</p>
        <div className="step-insight">
          <span>QUÉ ESTOY PRACTICANDO</span>
          <p id="step-explanation">{explanation}</p>
        </div>
      </aside>
      <div className="preview-column">
        <div className="preview-toolbar">
          <div>
            <span className="preview-dot" aria-hidden="true"></span>
            <strong>Huellitas</strong>
            <span className="preview-label">/ vista previa</span>
          </div>
          <div className="viewport-controls" role="group" aria-label="Ancho de la vista previa">
            <button type="button" data-width="full" aria-pressed={!isMobile} onClick={() => setMobile(false)}>Amplia</button>
            <button type="button" data-width="390" aria-pressed={isMobile} onClick={() => setMobile(true)}>Móvil</button>
          </div>
          <a href="laboratorio.html" target="_blank" rel="noopener" aria-label="Abrir Huellitas en otra pestaña">↗</a>
        </div>
        <div className={isMobile ? 'preview-canvas is-mobile' : 'preview-canvas'}>
          <iframe
            ref={frameRef}
            id="dog-preview"
            src="laboratorio.html"
            title="Huellitas: web de perritos construida con Bootstrap y Tailwind"
            height="2000"
            style={height === null ? undefined : { height }}
          />
        </div>
        <p className="preview-footnote">
          Proyecto educativo ficticio. El formulario permite probar la
          validación; no envía solicitudes ni guarda datos personales.
        </p>
      </div>
    </section>
  );
}
