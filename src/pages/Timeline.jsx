import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import { languages } from '../data/languages';

const descriptionFor = (t, language) => t.descriptions[language.slug] || language.description;

export default function Timeline({ t }) {
  return (
    <PageIntro image="/assets/timeline-earth-route.webp" eyebrow={t.timeline} title={t.timelineTitle} intro={t.timelineIntro}>
      <ol className="timeline">
        {[...languages].sort((a, b) => a.year - b.year).map((language) => (
          <li key={language.slug}>
            <time>{language.year}</time>
            <span className="timeline-dot" style={{ background: language.color }} />
            <div>
              <p className="eyebrow">{language.zone}</p>
              <h2>{language.name}</h2>
              <p>{descriptionFor(t, language)}</p>
              <Link to={`/destinations/${language.slug}`} state={{ from: '/timeline', label: t.nav[1] }}>{t.explore} →</Link>
            </div>
          </li>
        ))}
      </ol>
    </PageIntro>
  );
}
