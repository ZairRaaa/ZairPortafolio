export function observeReveal(targets) {
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const elements = Array.from(targets);
  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      if (isIntersecting) {
        target.classList.add('revealed');
        observer.unobserve(target);
      }
    }
  }, { threshold: 0.08 });

  for (const element of elements) {
    element.classList.add('reveal-ready');
    observer.observe(element);
  }

  return () => {
    observer.disconnect();
    for (const element of elements) {
      element.classList.remove('reveal-ready', 'revealed');
    }
  };
}
