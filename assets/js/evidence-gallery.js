// Galerías independientes: los enlaces siguen funcionando sin JavaScript.
(() => {
  "use strict";

  const dialog = document.querySelector("#evidence-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;

  const image = dialog.querySelector("#evidence-full");
  const title = dialog.querySelector("#evidence-title");
  const description = dialog.querySelector("#evidence-description");
  const position = dialog.querySelector("#evidence-position");
  const links = [...document.querySelectorAll("[data-gallery]")];
  let gallery = [];
  let current = 0;
  let trigger;

  function display(index) {
    current = (index + gallery.length) % gallery.length;
    const link = gallery[current];
    image.src = link.href;
    image.alt = link.querySelector("img").alt;
    title.textContent = link.dataset.title;
    description.textContent = link.dataset.description;
    position.textContent = `${current + 1} / ${gallery.length} · Evidencias`;
    dialog.querySelector(".viewer-stage").scrollTop = 0;
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      gallery = links.filter((item) => item.dataset.gallery === link.dataset.gallery);
      display(gallery.indexOf(link));
      dialog.showModal();
      document.documentElement.classList.add("evidence-open");
    });
  });

  dialog.querySelector("#evidence-close").addEventListener("click", () => dialog.close());
  dialog.querySelector("#evidence-prev").addEventListener("click", () => display(current - 1));
  dialog.querySelector("#evidence-next").addEventListener("click", () => display(current + 1));
  dialog.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    display(current + (event.key === "ArrowRight" ? 1 : -1));
  });
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("evidence-open");
    trigger?.focus({ preventScroll: true });
  });
})();
