import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import portfolioData from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const { name, github, linkedin, twitter } = portfolioData.personalInfo;

  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__name">{name}</h3>
        <p className="footer__tagline">
          Building exceptional digital experiences.
        </p>

        <div className="footer__socials">
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
