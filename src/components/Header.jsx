import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header({ lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link className="brand" to="/" onClick={closeMenu}>
        <span>&lt;/&gt;</span> Code Travel
      </Link>
      <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
        <NavLink to="/destinations" onClick={closeMenu}>{t.nav[0]}</NavLink>
        <NavLink to="/timeline" onClick={closeMenu}>{t.nav[1]}</NavLink>
        <NavLink to="/about" onClick={closeMenu}>{t.nav[2]}</NavLink>
      </div>
      <div className="nav-controls">
        <label className="language-select">
          <span className="sr-only">Language</span>
          <select value={lang} onChange={(event) => setLang(event.target.value)}>
            <option value="en">EN</option>
            <option value="zh-Hant">繁中</option>
            <option value="zh-Hans">简中</option>
          </select>
        </label>
        <button className="menu-button" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? '×' : '☰'}
        </button>
      </div>
    </nav>
  );
}
