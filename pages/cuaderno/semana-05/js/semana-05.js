// Repaso conceptual; complementa el registro de la clase.
(() => {
  "use strict";

  const quiz = document.querySelector("#tool-quiz");
  const feedback = document.querySelector("#quiz-feedback");
  if (!quiz || !feedback) return;

  const explanations = {
    react: "React construye la interfaz con componentes. La herramienta de desarrollo descrita aquí es Vite.",
    vite: "Correcto. Vite aporta el servidor de desarrollo y el build; puede trabajar con React y otras tecnologías.",
    next: "Next.js también integra herramientas de desarrollo, pero es un framework basado en React. La herramienta independiente descrita es Vite.",
  };

  quiz.querySelector('button[type="submit"]').hidden = false;
  quiz.addEventListener("submit", (event) => {
    event.preventDefault();
    const answer = new FormData(quiz).get("tool");
    feedback.textContent = explanations[answer] || "Selecciona una respuesta.";
  });
  quiz.addEventListener("change", () => {
    feedback.textContent = "";
  });
})();

// Índice lateral: refleja la sección situada al inicio de la zona de lectura.
(() => {
  "use strict";
  const links = [...document.querySelectorAll(".week-index a")];
  const sections = links.map((link) => document.querySelector(link.hash));
  if (!links.length || sections.some((section) => !section)) return;

  let scheduled = false;
  function updateCurrentSection() {
    const threshold = Math.min(window.innerHeight * 0.25, 180);
    let active = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= threshold) active = index;
    });
    links.forEach((link, index) => {
      if (index === active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scheduled = false;
  }
  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateCurrentSection);
  }
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("load", scheduleUpdate);
  document.querySelectorAll("details").forEach((details) => {
    details.addEventListener("toggle", scheduleUpdate);
  });
  updateCurrentSection();
})();
