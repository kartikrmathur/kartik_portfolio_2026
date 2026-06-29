import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import DualStack from './components/DualStack/DualStack';
import TechStack from './components/TechStack/TechStack';
import Proficiency from './components/Proficiency/Proficiency';
import CodeBlock from './components/CodeBlock/CodeBlock';
import Timeline from './components/Timeline/Timeline';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Music from './components/Music/Music';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: "var(--font-body)", minHeight: '100vh', position: 'relative', overflowX: 'hidden', transition: 'background .3s, color .3s' }}>
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.35,
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, #000 30%, transparent 80%)',
        }}
      />
      {/* Green glow */}
      <div
        aria-hidden="true"
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          top: -260,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 65%)',
          opacity: 0.12,
          filter: 'blur(30px)',
          zIndex: 0,
          transition: 'background .3s',
        }}
      />

      <Navbar />
      <main style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <Hero />
        <Stats />
        <About />
        <DualStack />
        <TechStack />
        <Proficiency />
        <CodeBlock />
        <Timeline />
        <Projects />
        <Testimonials />
        <Music />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
