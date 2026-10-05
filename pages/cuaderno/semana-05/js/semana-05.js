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
