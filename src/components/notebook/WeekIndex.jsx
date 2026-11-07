import { useEffect, useState } from 'react';

export function WeekIndex({ items, contentRef, heading = 'MI RECORRIDO', observerMargin, children }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const content = contentRef.current;
    const sections = items.map(({ id }) => document.getElementById(id));
    if (!sections.length || sections.some(section => !section)) return;
    if (observerMargin) {
      if (!('IntersectionObserver' in window)) return;

      const observer = new IntersectionObserver(entries => {
        for (const { target, isIntersecting } of entries) {
          if (isIntersecting) setActive(target.id);
        }
      }, { rootMargin: observerMargin, threshold: 0 });

      for (const section of sections) observer.observe(section);
      return () => observer.disconnect();
    }

    let frame = 0;

    function updateCurrentSection() {
      frame = 0;
      const pageEnd = document.documentElement.scrollHeight - 1;
      const atEnd = window.scrollY > 0 && window.scrollY + window.innerHeight >= pageEnd;
      if (atEnd) {
        setActive(sections.at(-1).id);
        return;
      }

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
  }, [contentRef, items, observerMargin]);

  return (
    <aside className="week-index">
      <span className="section-marker">{heading}</span>
      <nav aria-label="Índice de contenidos">
        {items.map(({ id, label }) => (
          <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined}>{label}</a>
        ))}
      </nav>
      {children && <p>{children}</p>}
    </aside>
  );
}
