import { Link as ScrollLink } from 'react-scroll';
import MaterialIcon from '../MaterialIcon/MaterialIcon';
import portfolioData from '../../data/portfolioData';

const stats = [
  { label: '01 // EXPERIENCE', value: `${portfolioData.personalInfo.yearsExperience} YOE` },
  { label: '02 // REACH', value: '125M+ Users' },
  { label: '03 // STACK RATIO', value: '40:60 Mob/BE' },
  { label: '04 // THROUGHPUT', value: '500K+ Req/s' },
];

const Hero = () => {
  const { title, currentCompany, tagline } = portfolioData.personalInfo;

  return (
    <section
      className="reveal relative flex min-h-[85vh] flex-col justify-center code-grid"
      id="hero"
    >
      <div className="absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary-container/5 blur-[120px]" />

      <div className="max-w-4xl space-y-gutter">
        <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container-high px-3 py-1">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary-container" aria-hidden="true" />
          <span className="font-mono text-label-caps text-on-surface-variant">
            Available for Senior Systems &amp; Mobile Roles
          </span>
        </div>

        <h1 className="font-display text-display-lg-mobile leading-tight text-on-surface md:text-display-lg">
          {title} &amp;{' '}
          <span className="text-primary-container">Lead Android Engineer</span>
        </h1>

        <p className="max-w-2xl font-mono text-body-lg text-on-surface-variant">
          {tagline} Currently at {currentCompany}, specializing in microservices,
          reactive backends, and end-to-end system integrity.
        </p>

        <div className="flex flex-wrap gap-gutter pt-4">
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            offset={-90}
            className="technical-glow flex cursor-pointer items-center gap-2 rounded-lg bg-primary-container px-8 py-4 font-mono text-label-caps text-on-primary transition-all hover:-translate-y-0.5 active:scale-95"
          >
            View Projects
            <MaterialIcon name="arrow_forward" />
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-90}
            className="cursor-pointer rounded-lg border border-outline px-8 py-4 font-mono text-label-caps text-on-surface transition-all hover:bg-surface-variant/20 active:scale-95"
          >
            Let&apos;s Connect
          </ScrollLink>
        </div>
      </div>

      <div className="mt-section-gap grid grid-cols-2 gap-gutter md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <span className="font-mono text-label-caps text-primary-container">
              {stat.label}
            </span>
            <div className="font-display text-headline-lg-mobile text-on-surface md:text-headline-lg">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
