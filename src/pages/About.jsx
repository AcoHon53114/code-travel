import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';

export default function About({ t }) {
  return (
    <PageIntro image="/assets/about-code-flight.webp" eyebrow={t.about} title={t.aboutTitle} intro={t.aboutIntro}>
      <section className="about-copy">
        <p>{t.aboutBody}</p>
        <p>{t.aboutBody2}</p>
        <Link className="primary-button" to="/destinations" state={{ from: '/about', label: t.nav[2] }}>
          {t.chooseDestination} <span>↗</span>
        </Link>
      </section>
    </PageIntro>
  );
}
