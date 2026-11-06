import { useContext } from 'react';
import { EvidenceViewerContext } from './EvidenceViewer.jsx';

export function EvidenceGallery({ images, compact = false }) {
  const open = useContext(EvidenceViewerContext);

  function handleClick(event, index) {
    if (event.defaultPrevented || event.button !== 0 ||
        event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }

    if (open?.(images, index, event.currentTarget)) event.preventDefault();
  }

  return (
    <div className="evidence-grid">
      {images.map((image, index) => {
        const link = {
          href: image.src,
          'aria-label': 'Ampliar: ' + image.title,
          onClick: event => handleClick(event, index),
        };
        const thumbnail = (
          <img
            src={image.src}
            alt={image.alt ?? image.description}
            width={image.width}
            height={image.height}
            loading="lazy"
          />
        );
        const caption = (
          <div className="evidence-caption">
            <h4>{image.title}{compact && <> <span aria-hidden="true">↗</span></>}</h4>
            <p>{image.description}</p>
          </div>
        );

        if (compact) {
          return (
            <a key={image.src} className="evidence-card" {...link}>
              {thumbnail}
              {caption}
            </a>
          );
        }

        return (
          <article className="evidence-card" key={image.src}>
            <a className="evidence-link" {...link}>
              <div className="evidence-image">
                {thumbnail}
                <span className="image-expand" aria-hidden="true">↗</span>
              </div>
              {caption}
            </a>
          </article>
        );
      })}
    </div>
  );
}
