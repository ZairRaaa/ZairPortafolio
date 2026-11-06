import { useLayoutEffect, useRef } from 'react';
import { registerPhotoDrift } from './photo-drift.js';

export function EditorialPhoto({ photo, children }) {
  const image = useRef(null);

  useLayoutEffect(() => registerPhotoDrift(image.current.parentElement), []);

  return (
    <>
      <img
        ref={image}
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={photo.priority ? undefined : 'lazy'}
        fetchPriority={photo.priority ? 'high' : undefined}
      />
      <figcaption>{children ?? photo.caption}</figcaption>
    </>
  );
}
