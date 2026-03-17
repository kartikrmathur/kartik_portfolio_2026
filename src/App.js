import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar';
import OrbitBg from './components/OrbitBg/OrbitBg';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

function MePage() {
  return (
    <>
      <About />
      <Skills />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 80,
    });
  }, []);

  return (
    <div className="App">
      <OrbitBg />
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
