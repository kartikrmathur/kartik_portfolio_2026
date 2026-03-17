import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import portfolioData from '../../data/portfolioData';
import './Projects.css';

const filters = ['All', 'Mobile', 'AI / ML', 'Web'];

const gradients = [
  'linear-gradient(135deg, #667eea, #764ba2)',
  'linear-gradient(135deg, #f093fb, #f5576c)',
  'linear-gradient(135deg, #4facfe, #00f2fe)',
  'linear-gradient(135deg, #43e97b, #38f9d7)',
  'linear-gradient(135deg, #fa709a, #fee140)',
  'linear-gradient(135deg, #a18cd1, #fbc2eb)',
  'linear-gradient(135deg, #fccb90, #d57eeb)',
  'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
  'linear-gradient(135deg, #f5576c, #ff9a9e)',
];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === active);

  return (
    <section className="projects section" id="projects">
      <div className="section__container">
        <h2 className="section__heading" data-aos="fade-up">
          My <span>Projects</span>
        </h2>
        <p className="section__subheading" data-aos="fade-up" data-aos-delay="100">
          A selection of projects I've built recently
        </p>

        <div className="projects__filters" data-aos="fade-up" data-aos-delay="150">
          {filters.map((f) => (
            <button
              key={f}
              className={`projects__filter ${active === f ? 'projects__filter--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project, i) => (
            <div
              className="projects__card"
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div
                className="projects__image"
                style={{ background: gradients[i % gradients.length] }}
              >
                <span className="projects__image-label mono">
                  {project.title}
                </span>
              </div>

              <div className="projects__body">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>

                <div className="projects__tags">
                  {project.techStack.map((tech) => (
                    <span className="projects__tag mono" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="projects__links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
