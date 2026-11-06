import { useLayoutEffect, useRef } from 'react';

export function ReadingProgress() {
  const bar = useRef(null);

  useLayoutEffect(() => {
    const progress = bar.current;
    let frame = 0;

    function updateProgress() {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(scheduleUpdate) : null;
    resizeObserver?.observe(document.body);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      resizeObserver?.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="reading-progress" aria-hidden="true" ref={bar} />;
}
