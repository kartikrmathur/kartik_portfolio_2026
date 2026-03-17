import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import portfolioData from '../../data/portfolioData';
import './Hero.css';

const roles = ['Full Stack Developer', 'React Developer', 'Educator'];

const Hero = () => {
  const { name, github, linkedin, twitter, resumeLink } =
    portfolioData.personalInfo;

  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <p className="hero__greeting mono accent">Hi, my name is</p>
        <h1 className="hero__name">{name}.</h1>
        <h2 className="hero__role">
          I'm a <span className="accent mono">{text}</span>
          <span className="hero__cursor">|</span>
        </h2>
        <p className="hero__tagline">
          I build exceptional digital experiences that live on the web.
        </p>

        <div className="hero__cta">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="hero__btn hero__btn--primary"
          >
            View Projects
          </ScrollLink>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--secondary"
          >
            Download Resume
          </a>
        </div>

        <div className="hero__socials">
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
      </div>
    </section>
  );
};

export default Hero;
