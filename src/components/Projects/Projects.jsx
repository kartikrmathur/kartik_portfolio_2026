import { useState } from 'react';
import MaterialIcon from '../MaterialIcon/MaterialIcon';
import { getProjectImage } from '../../data/stitchImages';
import portfolioData from '../../data/portfolioData';

const filterMap = {
  All: null,
  Mobile: 'Mobile',
  Backend: 'Backend',
  'AI / ML': 'AI / ML',
};

const filters = Object.keys(filterMap);

const categoryIcon = {
  Mobile: 'phone_android',
  Backend: 'terminal',
  'AI / ML': 'psychology',
  Web: 'language',
};

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filterMap[active]);

  const featured = portfolioData.projects.filter((p) => p.featured);
  const showFeatured = active === 'All' && featured.length >= 2;

  return (
    <section className="reveal py-section-gap" id="projects">
      {showFeatured && (
        <>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 font-mono text-label-caps text-primary-container">
              Portfolio Highlights
            </span>
            <h2 className="mb-6 font-display text-headline-xl-mobile text-on-surface md:text-headline-xl">
              High-Impact Architectures
            </h2>
            <div className="h-1 w-24 rounded-full bg-primary-container" />
          </div>

          <div className="mb-section-gap grid grid-cols-1 gap-12 md:grid-cols-2">
            {featured.slice(0, 2).map((project, index) => {
              const imageIndex = portfolioData.projects.findIndex(
                (p) => p.id === project.id
              );
              return (
                <a
                  key={project.id}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                >
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl bg-surface-container">
                    <img
                      src={getProjectImage(imageIndex)}
                      alt={project.title}
                      className="img-grayscale h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 flex gap-2">
                      <span className="rounded bg-surface/80 px-3 py-1 font-mono text-xs backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 font-display text-headline-lg text-on-surface transition-colors group-hover:text-primary-container">
                    {project.title}
                  </h3>
                  <p className="mb-4 font-mono text-body-md text-on-surface-variant">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-label-caps text-primary-container transition-transform group-hover:translate-x-2">
                    Explore Case Study
                    <MaterialIcon name="arrow_outward" />
                  </span>
                </a>
              );
            })}
          </div>
        </>
      )}

      <div className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-outline-variant/10 pb-8">
        <div className="flex flex-wrap gap-2 rounded-xl bg-surface-container-low p-1">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`min-h-[44px] rounded-lg px-6 py-2 font-mono text-label-caps transition-all ${
                active === f
                  ? 'bg-primary-container text-on-primary'
                  : 'text-on-surface-variant hover:text-primary-container'
              }`}
            >
              {f === 'All' ? 'ALL_SYSTEMS' : f.toUpperCase().replace(/\s/g, '_')}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 font-mono text-code-sm text-on-surface-variant">
          <MaterialIcon name="terminal" className="text-[18px]" />
          <span>
            FILTER_STATUS:{' '}
            <span className="text-primary-container">{active === 'All' ? 'ACTIVE' : active}</span>
          </span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center font-mono text-body-md text-on-surface-variant">
          No projects in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => {
            const imageIndex = portfolioData.projects.findIndex(
              (p) => p.id === project.id
            );
            const icon = categoryIcon[project.category] || 'code_blocks';

            return (
              <article
                key={project.id}
                className="glass-card technical-glow group flex h-full flex-col overflow-hidden rounded-xl transition-all duration-500"
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={getProjectImage(imageIndex)}
                      alt={project.title}
                      className="h-full w-full object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60" />
                  </div>
                  <div className="flex flex-grow flex-col gap-4 p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="font-display text-headline-md text-on-surface">
                        {project.title}
                      </h3>
                      <MaterialIcon
                        name={icon}
                        className="text-primary-container"
                        filled
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-primary-container/20 bg-primary-container/5 px-2 py-1 font-mono text-[10px] uppercase text-primary-container"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="font-mono text-body-md text-on-surface-variant">
                      {project.description}
                    </p>
                    <div className="mt-auto pt-6">
                      <span className="flex items-center gap-2 font-mono text-label-caps text-primary-container transition-colors group-hover:text-primary-container/80">
                        VIEW CASE STUDY
                        <MaterialIcon
                          name="arrow_forward"
                          className="text-[16px] transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Projects;
