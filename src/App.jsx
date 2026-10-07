import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { copy, frameworkDescriptions, languageDescriptions } from './data/translations';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Home from './pages/Home';
import LanguageDetail from './pages/LanguageDetail';
import Timeline from './pages/Timeline';

export default function App() {
  const [lang, setLang] = useState('en');
  const t = {
    ...copy[lang],
    descriptions: languageDescriptions[lang],
    frameworkDescriptions: frameworkDescriptions[lang],
  };

  return (
    <main>
      <ScrollToTop />
      <Header lang={lang} setLang={setLang} t={t} />
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/destinations" element={<Destinations t={t} />} />
        <Route path="/destinations/:slug" element={<LanguageDetail t={t} />} />
        <Route path="/timeline" element={<Timeline t={t} />} />
        <Route path="/about" element={<About t={t} />} />
      </Routes>
      <Footer />
    </main>
  );
}
