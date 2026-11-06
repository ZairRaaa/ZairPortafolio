import { useContext } from 'react';
import { EvidenceViewerContext } from './EvidenceViewer.jsx';

export function EvidenceGallery({ images }) {
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
      {images.map((image, index) => (
        <article className="evidence-card" key={image.src}>
          <a
            className="evidence-link"
            href={image.src}
            aria-label={'Ampliar: ' + image.title}
            onClick={event => handleClick(event, index)}
          >
            <div className="evidence-image">
              <img src={image.src} alt={image.alt ?? image.description} loading="lazy" />
              <span className="image-expand" aria-hidden="true">↗</span>
            </div>
            <div className="evidence-caption">
              <h4>{image.title}</h4>
              <p>{image.description}</p>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}
