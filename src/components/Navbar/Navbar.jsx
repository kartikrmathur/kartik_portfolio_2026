import { useState, useEffect } from 'react';
import { useTheme } from '../../ThemeContext';

const navLinks = [
  { label: '~/about', href: '#about' },
  { label: '~/stacks', href: '#stacks' },
  { label: '~/work', href: '#work' },
  { label: '~/timeline', href: '#timeline' },
  { label: '~/contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        background: 'var(--nav-bg)',
        borderBottom: '1px solid var(--border)',
        transition: 'background .3s, border-color .3s',
      }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto', padding: '14px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
        }}>
          <a href="#index" style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <span style={{
              width: 34, height: 34, borderRadius: 9,
              background: 'var(--primary)', color: isDark ? '#04130b' : '#fff',
              fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              letterSpacing: '-0.5px', transition: 'background .3s',
            }}>KM</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 500, letterSpacing: '0.5px' }}>
              kartik<span style={{ color: 'var(--primary)' }}>.dev</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="nav-desktop">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="nav-link" style={{
                color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '12.5px',
                letterSpacing: '0.04em', padding: '8px 12px', borderRadius: 7,
                transition: 'color .18s, background .18s',
              }}>{l.label}</a>
            ))}

            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              className="theme-toggle"
              style={{
                width: 36, height: 36, borderRadius: 9,
                background: 'var(--surface)', border: '1px solid var(--border)',
                color: 'var(--text)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 16,
                transition: 'background .18s, border-color .18s, transform .18s',
                marginLeft: 4,
              }}
            >{isDark ? '☀' : '☾'}</button>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn" style={{
              display: 'flex', alignItems: 'center', gap: 7,
              background: 'var(--primary)', color: isDark ? '#04130b' : '#fff',
              fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '12.5px',
              padding: '9px 15px', borderRadius: 8,
              transition: 'transform .18s, box-shadow .18s, background .3s',
            }}>resume.pdf ↗</a>
          </div>

          {/* Mobile controls */}
          <div style={{ display: 'none', alignItems: 'center', gap: 8 }} className="nav-mobile-controls">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              style={{
                width: 36, height: 36, borderRadius: 9,
                background: 'var(--surface)', border: '1px solid var(--border)',
                color: 'var(--text)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 16,
              }}
            >{isDark ? '☀' : '☾'}</button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                background: 'none', color: 'var(--text)',
                fontFamily: 'var(--font-mono)', fontSize: 20, padding: 8,
              }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        <style>{`
          .nav-link:hover { color: var(--text) !important; background: var(--surface) !important; }
          .resume-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 22px var(--glass-mix); }
          .theme-toggle:hover { border-color: var(--primary) !important; transform: scale(1.08); }
          @media (max-width: 768px) {
            .nav-desktop { display: none !important; }
            .nav-mobile-controls { display: flex !important; }
          }
        `}</style>
      </nav>

      {/* Mobile menu — rendered OUTSIDE nav to avoid backdrop-filter stacking context */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          paddingTop: 62,
          background: 'var(--bg)',
          zIndex: 49,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 24,
        }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              color: 'var(--text)', fontFamily: 'var(--font-mono)', fontSize: 16,
              padding: '12px 24px',
            }}>{l.label}</a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} style={{
            background: 'var(--primary)', color: isDark ? '#04130b' : '#fff',
            fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14,
            padding: '12px 24px', borderRadius: 10,
          }}>resume.pdf ↗</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
