import { Link, useLocation, useParams } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import { frameworkLinks, languages } from '../data/languages';

const descriptionFor = (t, language) => t.descriptions[language.slug] || language.description;

export default function LanguageDetail({ t }) {
  const { slug } = useParams();
  const location = useLocation();
  const language = languages.find((item) => item.slug === slug);
  const backTo = location.state?.from || '/destinations';
  const backLabel = location.state?.label || t.nav[0];

  if (!language) {
    return <PageIntro image="/assets/language-passport.webp" eyebrow="404" title="Route not found" intro="Choose another destination." />;
  }

  return (
    <PageIntro image={language.bannerImage} eyebrow={`${language.zone} ${t.destination}`} title={language.name} intro={descriptionFor(t, language)}>
      <Link className="back-button" to={backTo}>← {backLabel}</Link>
      <div className="detail-layout">
        <section className="detail-facts">
          <p><strong>{t.first}</strong>{language.year}</p>
          <p><strong>{t.origin}</strong>{language.origin}</p>
          <p><strong>{t.route}</strong>{language.zone}</p>
          <p className="official-language-link">
            <strong>{t.officialWebsite}</strong>
            <a href={language.officialUrl} target="_blank" rel="noreferrer">{t.visitLanguageOfficial.replace('{name}', language.name)} <span aria-hidden="true">↗</span></a>
          </p>
        </section>
        <section className="framework-panel">
          <p className="eyebrow">{t.popular}</p>
          <h2>{t.continue}</h2>
          <div className="framework-list">
            {language.frameworks.map((framework, index) => (
              <a className="framework-card" key={framework} href={frameworkLinks[framework]} target="_blank" rel="noreferrer" aria-label={`${framework}: ${t.visitOfficial}`}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{framework}</h3>
                  <p>{t.frameworkDescriptions[language.slug]?.[framework] || t.frameworkText.replace('{name}', language.name)}</p>
                </div>
                <strong className="framework-cta">{t.visitOfficial} <span aria-hidden="true">↗</span></strong>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageIntro>
  );
}
