import { EvidenceLink } from './EvidenceLink.jsx';

export function EvidenceGallery({ images, compact = false }) {
  return (
    <div className="evidence-grid">
      {images.map(image => {
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
            <EvidenceLink key={image.src} className="evidence-card" image={image} images={images}>
              {thumbnail}
              {caption}
            </EvidenceLink>
          );
        }

        return (
          <article className="evidence-card" key={image.src}>
            <EvidenceLink className="evidence-link" image={image} images={images}>
              <div className="evidence-image">
                {thumbnail}
                <span className="image-expand" aria-hidden="true">↗</span>
              </div>
              {caption}
            </EvidenceLink>
          </article>
        );
      })}
    </div>
  );
}
