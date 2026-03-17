import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../ThemeContext';
import portfolioData from '../../data/portfolioData';
import './Navbar.css';

const scrollLinks = ['projects', 'contact'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nameParts = portfolioData.personalInfo.name
    .split(' ')
    .map((w) => w.replace(/[^a-zA-Z]/g, ''))
    .filter((w) => w.length > 1);
  const initials =
    nameParts.length >= 2
      ? nameParts[0][0] + nameParts[nameParts.length - 1][0]
      : nameParts[0]?.[0] || '';

  const closeMobile = () => setMenuOpen(false);
  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <RouterLink to="/" className="navbar__logo mono" onClick={closeMobile}>
          {initials}
        </RouterLink>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li>
            <RouterLink
              to="/me"
              className={`navbar__link ${location.pathname === '/me' ? 'navbar__link--active' : ''}`}
              onClick={closeMobile}
            >
              Me
            </RouterLink>
          </li>

          {scrollLinks.map((link) => (
            <li key={link}>
              {isHome ? (
                <ScrollLink
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="navbar__link--active"
                  className="navbar__link"
                  onClick={closeMobile}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={`/#${link}`}
                  className="navbar__link"
                  onClick={closeMobile}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </RouterLink>
              )}
            </li>
          ))}

          <li>
            <button
              className="navbar__theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </button>
          </li>
        </ul>

        <div className="navbar__right-group">
          <button
            className="navbar__theme-toggle navbar__theme-toggle--mobile"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
