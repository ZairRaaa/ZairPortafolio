import { useEffect, useRef, useState } from 'react';

const initialTelemetry = '— FPS · — ms';

function createConstellation(width, height) {
  const particles = Array.from({ length: 55 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.7,
    vy: (Math.random() - 0.5) * 0.7,
    radius: Math.random() * 2 + 1.2,
  }));
  let pointer = null;

  return {
    update(dt, width, height) {
      for (const star of particles) {
        star.x += star.vx * dt * 60;
        star.y += star.vy * dt * 60;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        if (!pointer) continue;
        const dx = pointer.x - star.x;
        const dy = pointer.y - star.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) * 0.03;
          star.x -= Math.cos(angle) * force;
          star.y -= Math.sin(angle) * force;
        }
      }
    },

    draw(context, width, height) {
      context.clearRect(0, 0, width, height);
      context.lineWidth = 0.8;

      for (let i = 0; i < particles.length; i++) {
        const first = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const second = particles[j];
          const distance = Math.hypot(first.x - second.x, first.y - second.y);
          if (distance >= 85) continue;
          const opacity = (1 - distance / 85) * 0.28;
          context.strokeStyle = 'rgba(140, 200, 165, ' + opacity + ')';
          context.beginPath();
          context.moveTo(first.x, first.y);
          context.lineTo(second.x, second.y);
          context.stroke();
        }
      }

      context.fillStyle = 'rgba(180, 220, 195, 0.8)';
      for (const star of particles) {
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      }
    },

    setPointer(position) {
      pointer = position;
    },
  };
}

export function ConstellationDemo() {
  const canvasRef = useRef(null);
  const [telemetry, setTelemetry] = useState(initialTelemetry);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) {
      setTelemetry('Canvas no disponible');
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let constellation;
    let frame = null;
    let lastFrame = 0;
    let lastSample = 0;
    let frames = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      width = rect.width;
      height = rect.height;
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      context.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);
      constellation ??= createConstellation(width, height);
      constellation.draw(context, width, height);
    }

    function renderFrame(now) {
      const elapsed = now - lastFrame;
      lastFrame = now;
      constellation?.update(Math.min(Math.max(0, elapsed) / 1000, 0.1), width, height);
      constellation?.draw(context, width, height);

      frames++;
      const sample = now - lastSample;
      if (sample >= 500) {
        setTelemetry(Math.round(frames * 1000 / sample) + ' FPS · ' + (sample / frames).toFixed(1) + ' ms');
        lastSample = now;
        frames = 0;
      }

      frame = requestAnimationFrame(renderFrame);
    }

    function stop() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      constellation?.setPointer(null);
    }

    function syncAnimation() {
      if (document.hidden || reducedMotion.matches) {
        stop();
        if (reducedMotion.matches) setTelemetry('Movimiento reducido');
        return;
      }
      if (frame !== null) return;
      lastFrame = lastSample = performance.now();
      frames = 0;
      setTelemetry(initialTelemetry);
      frame = requestAnimationFrame(renderFrame);
    }

    function movePointer(event) {
      const rect = canvas.getBoundingClientRect();
      constellation?.setPointer({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }

    function clearPointer() {
      constellation?.setPointer(null);
    }

    resize();
    const observer = 'ResizeObserver' in window ? new ResizeObserver(resize) : null;
    observer?.observe(canvas);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', syncAnimation);
    reducedMotion.addEventListener('change', syncAnimation);
    canvas.addEventListener('mousemove', movePointer);
    canvas.addEventListener('mouseleave', clearPointer);
    syncAnimation();

    return () => {
      stop();
      observer?.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', syncAnimation);
      reducedMotion.removeEventListener('change', syncAnimation);
      canvas.removeEventListener('mousemove', movePointer);
      canvas.removeEventListener('mouseleave', clearPointer);
    };
  }, []);

  return (
    <div className="interactive-demo">
      <div className="demo-header">
        <div>
          <span className="practice-label">DEMOSTRACIÓN EN VIVO</span>
          <h3>Constelaciones reactivas con Canvas API</h3>
        </div>
        <p>Mueve el cursor sobre el lienzo para interactuar con las estrellas.</p>
      </div>
      <div className="demo-canvas-wrap">
        <canvas ref={canvasRef} id="constellation-canvas" aria-label="Simulador interactivo de partículas espaciales" />
      </div>
      <div className="demo-controls-bar">
        <span>Partículas conectadas mediante cálculo de distancia euclidiana</span>
        <div className="demo-fps" id="demo-fps-counter">{telemetry}</div>
      </div>
    </div>
  );
}
