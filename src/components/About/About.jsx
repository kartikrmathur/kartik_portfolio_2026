import { stitchImages } from '../../data/stitchImages';
import portfolioData from '../../data/portfolioData';
import MaterialIcon from '../MaterialIcon/MaterialIcon';
import Contact from '../Contact/Contact';

const About = () => {
  const { bio, yearsExperience } = portfolioData.personalInfo;

  const bioParts = bio.match(/[^.!?]+[.!?]+/g) || [bio];
  const intro = bioParts.slice(0, 2).join(' ').trim();
  const philosophy = bioParts.slice(2, 4).join(' ').trim() || bioParts.slice(-1)[0];

  return (
    <>
      <div className="reveal mb-section-gap grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <header>
            <span className="mb-4 block font-mono text-label-caps tracking-widest text-primary-container">
              {'// THE ARCHITECT\'S JOURNEY'}
            </span>
            <h1 className="font-display text-display-lg-mobile leading-none text-on-surface md:text-display-lg">
              From UI Pixel to <br />
              <span className="text-secondary">System Root.</span>
            </h1>
          </header>

          <div className="max-w-2xl space-y-6 font-sans text-body-lg text-on-surface-variant">
            <p>
              With{' '}
              <span className="font-bold text-primary-container">
                {yearsExperience} years of professional experience
              </span>{' '}
              across the full development stack, my journey began in Android
              development — crafting fluid interfaces and managing intricate
              mobile lifecycles.
            </p>
            {intro && <p>{intro}</p>}
            {philosophy && (
              <p>
                My philosophy:{' '}
                <span className="font-bold italic text-primary-container">
                  Clean Code &amp; Scalable Design.
                </span>{' '}
                {philosophy}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-gutter pt-8 md:grid-cols-2">
            <div className="glass-card rounded-xl border-l-4 border-l-primary-container p-6">
              <MaterialIcon name="terminal" className="mb-4 text-primary-container" filled />
              <h3 className="mb-2 font-display text-headline-md text-on-surface">
                Clean Code
              </h3>
              <p className="font-mono text-body-md text-on-surface-variant">
                Writing code for humans first, machines second. Modular, tested,
                and self-documenting.
              </p>
            </div>
            <div className="glass-card rounded-xl border-l-4 border-l-secondary p-6">
              <MaterialIcon name="lan" className="mb-4 text-secondary" filled />
              <h3 className="mb-2 font-display text-headline-md text-on-surface">
                Scalable Design
              </h3>
              <p className="font-mono text-body-md text-on-surface-variant">
                Architecture that breathes. Built to handle growth without a full
                rewrite.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-gutter lg:col-span-5 lg:sticky lg:top-32">
          <div className="group relative">
            <div className="absolute -inset-4 rounded-full bg-primary-container/10 opacity-50 blur-3xl transition-opacity group-hover:opacity-80" />
            <div className="glass-card relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={stitchImages.portrait}
                alt="Kartik Mathur"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="glass-card overflow-hidden rounded-xl border border-outline-variant/20 shadow-2xl">
            <div className="flex items-center justify-between border-b border-outline-variant/10 bg-surface-variant/30 px-4 py-2">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-error/40" />
                <div className="h-3 w-3 rounded-full bg-primary-fixed-dim/40" />
                <div className="h-3 w-3 rounded-full bg-secondary/40" />
              </div>
              <span className="font-mono text-code-sm text-on-surface-variant">
                SystemArchitect.java
              </span>
            </div>
            <div className="overflow-x-auto whitespace-nowrap p-6 font-mono text-code-sm leading-relaxed">
              <div className="flex gap-4">
                <span className="text-outline-variant">01</span>
                <span>
                  <span className="syntax-keyword">public class</span>{' '}
                  <span className="text-on-surface">SystemArchitect</span> {'{'}
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-outline-variant">02</span>
                <span className="pl-4 syntax-comment">
                  {'// Philosophy: Scalability by design'}
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-outline-variant">03</span>
                <span className="pl-4">
                  <span className="syntax-keyword">private static final</span> String GOAL ={' '}
                  <span className="syntax-string">&quot;RESILIENCE&quot;</span>;
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-outline-variant">05</span>
                <span className="pl-4">
                  <span className="syntax-keyword">public void</span>{' '}
                  <span className="text-secondary">build</span>(System s) {'{'}
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-outline-variant">06</span>
                <span className="pl-8 text-on-surface">
                  s.validate().optimize().deploy();
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-outline-variant">07</span>
                <span className="pl-4">{'}'}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-outline-variant">08</span>
                <span>{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact variant="full" />
    </>
  );
};

export default About;
