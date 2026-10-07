import { publicAsset } from '../utils/publicAsset';

export default function PageIntro({ eyebrow, title, intro, image, children }) {
  const imageUrl = publicAsset(image);

  return (
    <section className="page">
      <div className="page-banner" style={{ '--page-image': `url(${imageUrl})` }}>
        <div className="page-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </div>
      {children}
    </section>
  );
}
