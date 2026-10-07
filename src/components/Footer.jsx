import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const contentPage = location.pathname.startsWith('/destinations') || ['/timeline', '/about'].includes(location.pathname);

  return (
    <footer className={`site-footer ${contentPage ? 'site-footer-page' : ''}`}>
      <Link className="footer-home" to="/" aria-label="Return to Code Travel home">
        <span>Copyright © Code Travel Company {new Date().getFullYear()}.</span>
        <span>All rights reserved.</span>
      </Link>
    </footer>
  );
}
