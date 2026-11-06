import { useEffect, useState } from 'react';

export function WeekIndex({ items, contentRef, children }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const content = contentRef.current;
    const sections = items.map(({ id }) => document.getElementById(id));
    if (!sections.length || sections.some(section => !section)) return;
    let frame = 0;

    function updateCurrentSection() {
      frame = 0;
      const threshold = Math.min(window.innerHeight * 0.25, 180);
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
      }
      setActive(current);
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(updateCurrentSection);
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('load', scheduleUpdate);
    content.addEventListener('toggle', scheduleUpdate, true);
    updateCurrentSection();

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('load', scheduleUpdate);
      content.removeEventListener('toggle', scheduleUpdate, true);
      cancelAnimationFrame(frame);
    };
  }, [contentRef, items]);

  return (
    <aside className="week-index">
      <span className="section-marker">MI RECORRIDO</span>
      <nav aria-label="Índice de contenidos">
        {items.map(({ id, label }) => (
          <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined}>{label}</a>
        ))}
      </nav>
      {children && <p>{children}</p>}
    </aside>
  );
}
