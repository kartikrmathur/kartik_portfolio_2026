import MaterialIcon from '../MaterialIcon/MaterialIcon';
import RotatingSkills from '../RotatingSkills/RotatingSkills';
import portfolioData from '../../data/portfolioData';

const mobileSkills = [
  { name: 'Kotlin / Android SDK', pct: 94 },
  { name: 'Jetpack & Compose', pct: 90 },
  { name: 'Clean Architecture', pct: 92 },
];

const mobileChips = ['Coroutines', 'REST APIs', 'MVVM', 'CI/CD'];

const backendCards = [
  { icon: 'coffee', title: 'JAVA / SPRING BOOT', desc: 'Microservices & Kafka' },
  { icon: 'hub', title: 'API GATEWAYS', desc: 'High-concurrency traffic' },
  { icon: 'storage', title: 'DATABASE DESIGN', desc: 'PostgreSQL, Redis, Elasticsearch' },
];

const devopsTools = [
  { icon: 'deployed_code', label: 'DOCKER' },
  { icon: 'cloud', label: 'KUBERNETES' },
  { icon: 'cloud_sync', label: 'AZURE' },
  { icon: 'monitoring', label: 'DATADOG' },
];

const Skills = () => {
  const { yearsExperience, bio } = portfolioData.personalInfo;

  return (
    <section className="reveal" id="skills">
      <header className="mb-24">
        <div className="mb-4 flex items-center gap-2">
          <MaterialIcon name="terminal" className="text-primary-container" filled />
          <span className="font-mono text-label-md tracking-[0.2em] text-primary-container">
            KNOWLEDGE BASE // V.{yearsExperience.replace('+', '')}.0
          </span>
        </div>
        <h1 className="max-w-4xl font-display text-headline-xl-mobile leading-tight text-on-background md:text-headline-xl">
          Engineering <span className="text-primary-container">Reliability</span>{' '}
          Over {yearsExperience} Years of Scale.
        </h1>
      </header>

      <RotatingSkills />

      <div className="mb-24 grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="glass-card relative overflow-hidden rounded-xl p-8 md:col-span-7">
          <div className="pointer-events-none absolute right-0 top-0 p-4 opacity-10">
            <MaterialIcon name="android" className="text-8xl" filled />
          </div>
          <h2 className="mb-8 font-display text-headline-md text-primary-container">
            System Architecture &amp; Mobile
          </h2>
          <div className="space-y-8">
            {mobileSkills.map((skill) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex items-end justify-between">
                  <span className="font-mono text-label-md tracking-wider text-on-surface">
                    {skill.name}
                  </span>
                  <span className="font-mono text-code-sm text-on-surface-variant">
                    {skill.pct}%
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-surface-variant">
                  <div
                    className="h-full bg-primary-container transition-all duration-1000"
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-2">
              {mobileChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded border border-primary-container/20 bg-primary-container/5 px-3 py-1 font-mono text-[10px] text-primary-container"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card relative overflow-hidden rounded-xl p-8 md:col-span-5">
          <div className="pointer-events-none absolute -bottom-10 -right-10 opacity-5">
            <MaterialIcon name="database" className="text-[12rem]" filled />
          </div>
          <h2 className="mb-8 font-display text-headline-md text-secondary">
            Backend Systems
          </h2>
          <div className="space-y-6">
            {backendCards.map((card) => (
              <div
                key={card.title}
                className="flex items-center gap-4 rounded-lg border border-outline-variant/10 bg-surface-container-high/50 p-4"
              >
                <MaterialIcon name={card.icon} className="text-secondary" filled />
                <div>
                  <div className="font-mono text-label-md">{card.title}</div>
                  <div className="text-sm text-on-surface-variant">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 border-t border-outline-variant/10 pt-6 font-mono text-code-sm italic text-on-surface-variant">
            &quot;Architecting resilient foundations across healthcare, streaming,
            and consumer-scale platforms.&quot;
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 md:col-span-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-md">
              <h2 className="mb-4 font-display text-headline-md text-tertiary">
                Observability &amp; DevOps
              </h2>
              <p className="text-on-surface-variant">
                Automating infrastructure lifecycle with Docker, Kubernetes, and
                Azure for reliable deployments.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {devopsTools.map((tool) => (
                <div
                  key={tool.label}
                  className="flex min-w-[120px] flex-col items-center gap-2 rounded-lg border border-outline-variant/10 bg-surface-container-low px-6 py-4"
                >
                  <MaterialIcon name={tool.icon} className="text-tertiary" />
                  <span className="font-mono text-label-md">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mb-24">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-4 font-display text-headline-lg text-on-surface">
            Core Systems Architecture
          </h2>
          <div className="h-1 w-24 rounded-full bg-primary-container" />
        </div>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="glass-card scanline-effect relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl">
            <div className="flex h-full w-full flex-col justify-between p-8">
              <div className="z-10 flex justify-around">
                {[
                  { icon: 'smartphone', label: 'Mobile Core' },
                  { icon: 'laptop', label: 'Web Portal' },
                ].map((node) => (
                  <div
                    key={node.label}
                    className="flex h-32 w-24 flex-col items-center justify-center gap-2 rounded-lg border border-primary-container/40 bg-primary-container/5"
                  >
                    <MaterialIcon name={node.icon} className="text-primary-container" />
                    <span className="font-mono text-[10px]">{node.label}</span>
                  </div>
                ))}
              </div>
              <div className="z-10 flex justify-center">
                <div className="flex h-16 w-48 items-center justify-center rounded-full border-2 border-dashed border-secondary/40 bg-secondary/5">
                  <span className="font-mono text-label-md text-secondary">
                    INGRESS / LOAD BALANCER
                  </span>
                </div>
              </div>
              <div className="z-10 flex justify-around">
                {['Identity', 'Billing', 'Analytics'].map((label) => (
                  <div
                    key={label}
                    className="flex h-20 w-20 rotate-45 items-center justify-center overflow-hidden rounded border border-tertiary/40 bg-tertiary/5"
                  >
                    <span className="-rotate-45 font-mono text-[8px]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-headline-md text-primary-container">
                End-to-End Integrity
              </h3>
              <p className="font-mono text-body-lg leading-relaxed text-on-surface-variant">
                {bio.split('.')[0]}.
              </p>
            </div>
            <div className="rounded-lg border border-outline-variant/10 bg-surface-container p-6 font-mono text-code-sm">
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
              </div>
              <pre className="overflow-x-auto text-sm">
                <span className="syntax-keyword">public class</span>{' '}
                <span className="text-on-surface">DataSyncService</span> {'{'}
                {'\n'}
                <span className="syntax-comment">
                  {'  // Deterministic state management'}
                </span>
                {'\n'}
                <span className="syntax-keyword">  private void</span>{' '}
                <span className="text-on-surface">onTriggerSync</span>() {'{'}
                {'\n'}
                <span className="text-on-surface">
                  {'    '}this.repository.pushBatch(
                </span>
                {'\n'}
                <span className="syntax-string">
                  {'      '}&quot;POST /v1/telemetry&quot;,
                </span>
                {'\n'}
                <span className="text-on-surface">{'      '}currentContext</span>
                {'\n'}
                <span className="text-on-surface">{'    '});</span>
                {'\n'}
                <span>{'  }'}</span>
                {'\n'}
                <span>{'}'}</span>
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['High Availability', 'Event-Driven', 'Test Coverage', 'Cloud Native'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <MaterialIcon
                      name="check_circle"
                      className="text-sm text-primary-container"
                    />
                    <span className="font-mono text-[10px]">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
