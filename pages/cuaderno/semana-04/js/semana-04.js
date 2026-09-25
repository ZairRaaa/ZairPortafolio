(() => {
  "use strict";

  // 1. Visor accesible de evidencias con <dialog>
  const dialog = document.querySelector("#evidence-dialog");
  if (dialog && typeof dialog.showModal === "function") {
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
      image.alt = link.querySelector("img")?.alt || "Captura de evidencia";
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

    dialog.querySelector("#evidence-close")?.addEventListener("click", () => dialog.close());
    dialog.querySelector("#evidence-prev")?.addEventListener("click", () => display(current - 1));
    dialog.querySelector("#evidence-next")?.addEventListener("click", () => display(current + 1));
    dialog.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      display(current + (event.key === "ArrowRight" ? 1 : -1));
    });
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      if (
        event.target === dialog &&
        (event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom)
      ) {
        dialog.close();
      }
    });
    dialog.addEventListener("close", () => {
      document.documentElement.classList.remove("evidence-open");
      trigger?.focus({ preventScroll: true });
    });
  }

  // 2. Demostración interactiva de Canvas API con Closures y requestAnimationFrame (Delta Time)
  const canvas = document.querySelector("#constellation-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    const fpsDisplay = document.querySelector("#demo-fps-counter");
    let animationFrameId;
    let lastTime = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();
    let fps = 60;

    // Redimensionar canvas manteniendo densidad de píxeles
    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Creación de partículas encapsuladas en un Closure para retener estado
    const createConstellation = (count) => {
      const particles = [];
      const mouse = { x: -1000, y: -1000, radius: 100 };

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * (canvas.width / window.devicePixelRatio),
          y: Math.random() * (canvas.height / window.devicePixelRatio),
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 2 + 1.2,
          baseColor: "rgba(180, 220, 195, 0.8)",
        });
      }

      // Retorna funciones con acceso léxico al array de partículas (Closure)
      return {
        update: (dt, width, height) => {
          particles.forEach((p) => {
            p.x += p.vx * dt * 60;
            p.y += p.vy * dt * 60;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            // Interacción gravitacional suave con el mouse
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);
            if (dist < mouse.radius) {
              const angle = Math.atan2(dy, dx);
              p.x -= Math.cos(angle) * (mouse.radius - dist) * 0.03;
              p.y -= Math.sin(angle) * (mouse.radius - dist) * 0.03;
            }
          });
        },
        render: (context, width, height) => {
          context.clearRect(0, 0, width, height);

          // Dibujar líneas de constelación entre partículas cercanas
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const dist = Math.hypot(dx, dy);

              if (dist < 85) {
                const opacity = (1 - dist / 85) * 0.28;
                context.strokeStyle = `rgba(140, 200, 165, ${opacity})`;
                context.lineWidth = 0.8;
                context.beginPath();
                context.moveTo(particles[i].x, particles[i].y);
                context.lineTo(particles[j].x, particles[j].y);
                context.stroke();
              }
            }
          }

          // Dibujar las partículas/estrellas
          particles.forEach((p) => {
            context.fillStyle = p.baseColor;
            context.beginPath();
            context.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            context.fill();
          });
        },
        setMouse: (x, y) => {
          mouse.x = x;
          mouse.y = y;
        },
      };
    };

    const constellation = createConstellation(55);

    // Eventos del mouse sobre el canvas
    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      constellation.setMouse(x, y);
    });

    canvas.addEventListener("mouseleave", () => {
      constellation.setMouse(-1000, -1000);
    });

    // Bucle principal de animación desacoplado con Delta Time
    function renderLoop(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.1); // Protección contra saltos al cambiar de pestaña
      lastTime = now;

      // Cálculo de FPS en tiempo real
      frameCount++;
      if (now - lastFpsUpdate >= 500) {
        fps = Math.round((frameCount * 1000) / (now - lastFpsUpdate));
        frameCount = 0;
        lastFpsUpdate = now;
        if (fpsDisplay) {
          fpsDisplay.textContent = `${fps} FPS · ${(dt * 1000).toFixed(1)} ms`;
        }
      }

      const rect = canvas.getBoundingClientRect();
      constellation.update(dt, rect.width, rect.height);
      constellation.render(ctx, rect.width, rect.height);

      animationFrameId = requestAnimationFrame(renderLoop);
    }

    animationFrameId = requestAnimationFrame(renderLoop);

    // Cancelar animación si la página no está visible para ahorrar CPU
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(renderLoop);
      }
    });
  }

  // 3. Scroll Spy para resaltar la sección activa en el menú lateral
  if ("IntersectionObserver" in window) {
    const indexLinks = [...document.querySelectorAll(".week-index a")];
    const sections = document.querySelectorAll(
      "#recorrido, #aula-virtual, #orbita-canvas, section[aria-labelledby='reflexion-title']"
    );
    // Asegurar que la sección de reflexión tenga id si no lo tenía
    const reflexionSec = document.querySelector("section[aria-labelledby='reflexion-title']");
    if (reflexionSec && !reflexionSec.id) reflexionSec.id = "reflexion";

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
