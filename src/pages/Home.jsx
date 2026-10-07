import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { languages } from '../data/languages';
import { useDashboardProgress } from '../hooks/useDashboardProgress';
import { publicAsset } from '../utils/publicAsset';

const CodePlanet = lazy(() => import('../components/CodePlanet'));

export default function Home({ t }) {
  const [first, focus, last] = t.heroTitle.split('|');
  const frameworkTotal = languages.reduce((sum, language) => sum + language.frameworks.length, 0);
  const progress = useDashboardProgress();
  const displayCount = (target) => Math.round(target * progress);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{first}<br /><em>{focus}</em>{last}</h1>
          <p className="intro">{t.heroIntro}</p>
          <div className="hero-actions">
            <Link className="primary-button" to="/destinations">{t.start} <span>↗</span></Link>
            <Link className="secondary-button" to="/timeline">{t.viewTimeline}</Link>
          </div>
          <dl className="hero-stats">
            <div><dt>{displayCount(languages.length)}</dt><dd>{t.destinations}</dd></div>
            <div><dt>{displayCount(40)}+</dt><dd>{t.years}</dd></div>
            <div><dt>{displayCount(frameworkTotal)}</dt><dd>{t.frameworks}</dd></div>
          </dl>
        </div>
        <div className="hero-visual">
          <img src={publicAsset('/assets/code-travel-hero.webp')} alt="A colorful code planet in space" />
          <Suspense fallback={null}><CodePlanet languages={languages} t={t} /></Suspense>
        </div>
      </section>
      <section className="next-section">
        <p className="eyebrow">{t.next}</p>
        <h2>{t.nextTitle}</h2>
      </section>
    </>
  );
}
