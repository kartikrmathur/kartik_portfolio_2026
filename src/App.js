import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RadialGlow from './components/RadialGlow/RadialGlow';
import Hero from './components/Hero/Hero';
import TechStack from './components/TechStack/TechStack';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useRevealGroup } from './hooks/useReveal';
import { useGlassCardGlow } from './hooks/useGlassCardGlow';
import './App.css';

function HomePage() {
  useRevealGroup('.reveal');
  return (
    <main className="relative z-10 mx-auto max-w-container-max px-margin-mobile pb-section-gap pt-24 md:px-margin-desktop">
      <Hero />
      <TechStack />
      <Projects />
      <Contact variant="cta" />
    </main>
  );
}

function MePage() {
  useRevealGroup('.reveal');
  return (
    <main className="relative z-10 mx-auto max-w-container-max px-margin-mobile pb-section-gap pt-24 md:px-margin-desktop">
      <About />
      <Skills />
    </main>
  );
}

function App() {
  const location = useLocation();
  useGlassCardGlow();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 grid-overlay -z-[1]" aria-hidden="true" />
      <RadialGlow />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/me" element={<MePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
