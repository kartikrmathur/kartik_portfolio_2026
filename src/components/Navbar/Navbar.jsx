import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useTheme } from '../../ThemeContext';
import portfolioData from '../../data/portfolioData';

const navItems = [
  { id: 'projects', label: 'Work', scroll: true },
  { id: 'skills-preview', label: 'Skills', scroll: true, homeOnly: true },
  { path: '/me', label: 'About', scroll: false },
  { id: 'contact', label: 'Contact', scroll: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isHome = location.pathname === '/';
  const { resumeLink } = portfolioData.personalInfo;

  const brand = portfolioData.personalInfo.name
    .replace(/\s+R\s+/i, ' ')
    .replace(/"R"\s*/i, '')
    .trim();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMobile = () => setMenuOpen(false);

  const linkClass = (active) =>
    `font-mono text-label-caps transition-colors duration-300 ${
      active
        ? 'border-b-2 border-primary-container pb-1 font-bold text-primary-container'
        : 'font-medium text-on-surface-variant hover:text-primary-container'
    }`;

  const renderNavLink = (item) => {
    if (item.path) {
      const active = location.pathname === item.path;
      return (
        <RouterLink
          key={item.label}
          to={item.path}
          className={linkClass(active)}
          onClick={closeMobile}
        >
          {item.label}
        </RouterLink>
      );
    }

    if (item.homeOnly && !isHome) {
      return (
        <RouterLink
          key={item.label}
          to="/#skills-preview"
          className={linkClass(false)}
          onClick={closeMobile}
        >
          {item.label}
        </RouterLink>
      );
    }

    if (isHome && item.scroll) {
      return (
        <ScrollLink
          key={item.label}
          to={item.id}
          smooth
          duration={500}
          offset={-90}
          spy
          className={`${linkClass(false)} cursor-pointer`}
          onClick={closeMobile}
        >
          {item.label}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        key={item.label}
        to={`/#${item.id}`}
        className={linkClass(false)}
        onClick={closeMobile}
      >
        {item.label}
      </RouterLink>
    );
  };

  return (
    <>
      <nav
        className="glass-nav fixed top-0 z-50 h-20 w-full"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-full max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
          <RouterLink
            to="/"
            className="font-display text-headline-lg-mobile font-bold tracking-tight text-primary-container md:text-headline-lg"
            onClick={closeMobile}
          >
            {brand}
          </RouterLink>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map(renderNavLink)}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden min-h-[44px] rounded px-3 py-2 font-mono text-label-caps text-on-surface-variant transition-colors hover:text-primary-container md:block"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 'DARK' : 'LIGHT'}
            </button>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded bg-primary-container px-6 py-3 font-mono text-label-caps text-on-primary transition-transform hover:scale-95 active:scale-90 md:inline-block"
            >
              Download CV
            </a>
            <button
              type="button"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center text-on-surface md:hidden"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-surface-container-lowest/95 pt-20 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {navItems.map(renderNavLink)}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-primary-container px-6 py-3 font-mono text-label-caps text-on-primary"
            onClick={closeMobile}
          >
            Download CV
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
