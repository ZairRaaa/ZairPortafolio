const photos = new Set();
let reducedMotion;
let frame = 0;

function updatePhotos() {
  frame = 0;
  for (const photo of photos) {
    if (reducedMotion.matches) {
      photo.style.removeProperty('--drift');
      continue;
    }

    const rect = photo.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) continue;

    const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.025;
    photo.style.setProperty('--drift', `${Math.max(-9, Math.min(9, offset))}px`);
  }
}

function scheduleUpdate() {
  if (!frame) frame = requestAnimationFrame(updatePhotos);
}

export function registerPhotoDrift(photo) {
  if (!photos.size) {
    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion.addEventListener('change', scheduleUpdate);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
  }

  photos.add(photo);
  scheduleUpdate();

  return () => {
    photos.delete(photo);
    photo.style.removeProperty('--drift');
    if (photos.size) return;

    reducedMotion.removeEventListener('change', scheduleUpdate);
    window.removeEventListener('scroll', scheduleUpdate);
    window.removeEventListener('resize', scheduleUpdate);
    cancelAnimationFrame(frame);
    frame = 0;
  };
}
