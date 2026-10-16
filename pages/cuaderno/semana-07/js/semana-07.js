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
