import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { SpeakersPage } from './pages/SpeakersPage';
import { AgendaPage } from './pages/AgendaPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { SubmitArticlePage } from './pages/SubmitArticlePage';
import { ResultsPage } from './pages/ResultsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top or anchor automatically on route changes
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try immediately, then retry in case DOM is still rendering
      if (!scrollToElement()) {
        const timeout1 = setTimeout(scrollToElement, 100);
        const timeout2 = setTimeout(scrollToElement, 300);
        return () => {
          clearTimeout(timeout1);
          clearTimeout(timeout2);
        };
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#fafbfc] text-slate-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/fees" element={<RegistrationPage />} />
            <Route path="/registration-fees" element={<RegistrationPage />} />
            <Route path="/submit-article" element={<SubmitArticlePage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
