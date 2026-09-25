// Panel de pasos y comunicación con la demostración aislada.
(() => {
  "use strict";
  const frame = document.querySelector("#dog-preview");
  const toggles = [...document.querySelectorAll("[data-step]")];
  const steps = toggles.map(() => true);
  const origin = location.origin === "null" ? "*" : location.origin;
  const descriptions = [
    "Base: idioma, viewport, descripción y frameworks. El interruptor muestra su franja introductoria; la configuración permanece cargada.",
    "Bootstrap aporta navbar, collapse y el botón del menú. Prueba la vista móvil para ver cómo se adapta.",
    "La bienvenida combina columnas y tipografía de Bootstrap con el fondo degradado y utilidades de Tailwind.",
    "Las tarjetas usan row y col-md-4; Tailwind añade sombras, bordes redondeados y movimiento al pasar el cursor.",
    "El formulario relaciona labels y mensajes con sus campos, muestra errores y confirma una validación local sin enviar datos.",
    "El pie de página presenta mi nombre, la Facultad de Ingeniería de Sistemas de la UNCP y el IX semestre.",
  ];
  const sync = () => {
    frame.contentWindow?.postMessage(
      {
        type: "huellitas:state",
        steps: [...steps],
        theme: document.documentElement.dataset.theme || "light",
        palette: document.documentElement.dataset.palette || "green",
      },
      origin,
    );
  };
  const render = (message) => {
    toggles.forEach((button, index) =>
      button.setAttribute("aria-pressed", String(steps[index])),
    );
    const count = steps.filter(Boolean).length;
    document.querySelector("#step-count").textContent =
      `${count} / ${steps.length}`;
    document.querySelector("#step-progress").value = count;
    document.querySelector("#step-feedback").textContent = message;
    sync();
  };
  toggles.forEach((button, index) =>
    button.addEventListener("click", () => {
      steps[index] = !steps[index];
      document.querySelector("#step-explanation").textContent =
        descriptions[index];
      render(`Paso ${index + 1} ${steps[index] ? "activado" : "desactivado"}.`);
    }),
  );
  document.querySelector("#enable-all").addEventListener("click", () => {
    steps.fill(true);
    render("Los seis pasos están activos.");
  });
  document.querySelector("#disable-all").addEventListener("click", () => {
    steps.fill(false);
    render("Todo está oculto. Activa un paso para empezar.");
  });
  document.querySelectorAll("[data-width]").forEach((button) =>
    button.addEventListener("click", () => {
      document
        .querySelectorAll("[data-width]")
        .forEach((item) =>
          item.setAttribute("aria-pressed", String(item === button)),
        );
      document
        .querySelector(".preview-canvas")
        .classList.toggle("is-mobile", button.dataset.width !== "full");
    }),
  );
  frame.addEventListener("load", sync);
  window.addEventListener("message", (event) => {
    if (
      event.source !== frame.contentWindow ||
      (location.origin !== "null" && event.origin !== location.origin)
    )
      return;
    const data = event.data;
    if (!data || typeof data !== "object") return;
    if (data.type === "huellitas:ready") sync();
    if (data.type === "huellitas:height" && Number.isFinite(data.height))
      frame.style.height = `${Math.max(350, Math.min(15000, data.height))}px`;
    if (
      data.type === "huellitas:enable" &&
      Number.isInteger(data.step) &&
      data.step >= 1 &&
      data.step <= steps.length
    ) {
      steps[data.step - 1] = true;
      render(`Paso ${data.step} activado desde Huellitas.`);
    }
  });
  new MutationObserver(sync).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "data-palette"],
  });
  sync();

  // Scroll Spy para resaltar la sección activa en el menú lateral
  if ("IntersectionObserver" in window) {
    const indexLinks = [...document.querySelectorAll(".week-index a")];
    const sections = document.querySelectorAll(
      "#huellitas, #pulso, #calificada, #reflexion"
    );
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            indexLinks.forEach((link) => {
              const active = link.hash === `#${entry.target.id}`;
              link.classList.toggle("active", active);
              if (active) link.setAttribute("aria-current", "location");
              else link.removeAttribute("aria-current");
            });
          }
        });
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }
})();
