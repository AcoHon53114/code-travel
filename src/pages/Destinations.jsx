import { Link, useLocation } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import { languages } from '../data/languages';

const descriptionFor = (t, language) => t.descriptions[language.slug] || language.description;

export default function Destinations({ t }) {
  const location = useLocation();
  const from = location.state?.from || '/destinations';
  const label = location.state?.label || t.nav[0];

  return (
    <PageIntro image="/assets/destinations-world-map.webp" eyebrow={t.choose} title={t.destinationsTitle} intro={t.destinationsIntro}>
      <div className="destination-grid">
        {languages.map((language) => (
          <Link to={`/destinations/${language.slug}`} state={{ from, label }} className="destination-card" key={language.slug} style={{ '--card-color': language.color }}>
            <span className="card-mark">{language.short}</span>
            <p className="eyebrow">{language.zone}</p>
            <h2>{language.name}</h2>
            <p>{descriptionFor(t, language)}</p>
            <span className="card-link">{t.explore} →</span>
          </Link>
        ))}
      </div>
    </PageIntro>
  );
}
