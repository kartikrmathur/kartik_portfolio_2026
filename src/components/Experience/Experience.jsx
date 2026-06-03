import portfolioData from '../../data/portfolioData';

const Experience = () => {
  const { timeline } = portfolioData;

  return (
    <section className="reveal py-section-gap" id="experience">
      <div className="flex flex-col gap-gutter md:flex-row">
        <div className="space-y-4 md:w-1/3">
          <span className="font-sans text-label-sm uppercase tracking-[0.1em] text-primary">
            Career Narrative
          </span>
          <h2 className="font-serif text-headline-md text-on-surface">
            Experience Snapshot
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Building scalable systems at some of the world&apos;s most
            influential technology firms.
          </p>
        </div>

        <div className="md:w-2/3">
          {timeline.map((item) => (
            <div
              key={`${item.company}-${item.year}`}
              className="group flex flex-col justify-between gap-4 border-b border-outline-variant/10 px-6 py-8 transition-all duration-300 hover:bg-glass-bg md:flex-row md:items-center"
            >
              <div className="space-y-1">
                <h4 className="font-sans text-lg text-on-surface transition-colors group-hover:text-primary">
                  {item.company}
                </h4>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {item.role}
                </p>
              </div>
              <span className="font-sans text-label-sm text-on-surface-variant md:text-right">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
