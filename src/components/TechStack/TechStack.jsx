import MaterialIcon from '../MaterialIcon/MaterialIcon';

const androidChips = ['Kotlin', 'Jetpack', 'Android SDK', 'Coroutines'];
const backendItems = [
  { num: '01', title: 'Java & Spring Boot', desc: 'Enterprise microservices' },
  { num: '02', title: 'PostgreSQL & Redis', desc: 'Scalable data persistence' },
  { num: '03', title: 'Kubernetes', desc: 'Orchestration & scaling' },
];
const archTools = [
  { icon: 'schema', label: 'REST APIs' },
  { icon: 'monitoring', label: 'Datadog' },
  { icon: 'security', label: 'OAuth2' },
];

const TechStack = () => (
  <section className="reveal py-section-gap" id="skills-preview">
    <div className="mb-16 flex flex-col justify-between gap-gutter md:flex-row md:items-end">
      <div className="space-y-4">
        <span className="font-mono text-label-caps text-primary-container">
          Core Competencies
        </span>
        <h2 className="font-display text-headline-xl-mobile text-on-surface md:text-headline-xl">
          Technical Stack &amp; Engineering DNA
        </h2>
      </div>
      <p className="max-w-sm font-mono text-body-md text-on-surface-variant">
        A multi-layered approach to building software, focusing on modularity,
        testability, and enterprise-grade performance.
      </p>
    </div>

    <div className="grid h-full grid-cols-1 grid-rows-auto gap-gutter md:grid-cols-12 md:grid-rows-2">
      <div className="glass-card group relative overflow-hidden rounded-xl md:col-span-8">
        <div className="flex h-full flex-col justify-between p-8">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <MaterialIcon name="android" className="text-4xl text-primary-container" />
              <h3 className="font-display text-headline-lg text-on-surface">
                Android Leadership
              </h3>
            </div>
            <p className="mb-8 max-w-md text-on-surface-variant">
              Building scalable Android apps with Kotlin, Jetpack, Clean
              Architecture, and performance tuning for millions of users.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {androidChips.map((chip) => (
              <span key={chip} className="tech-chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-[-10%] right-[-5%] opacity-10 transition-opacity group-hover:opacity-20">
          <div className="h-64 w-64 rotate-45 border border-primary-container" />
        </div>
      </div>

      <div className="glass-card rounded-xl border-l-2 border-l-primary-container p-8 md:col-span-4">
        <div className="mb-6 flex items-center gap-4">
          <MaterialIcon name="database" className="text-4xl text-primary-container" />
          <h3 className="font-display text-headline-lg text-on-surface">
            Backend Systems
          </h3>
        </div>
        <ul className="space-y-4">
          {backendItems.map((item) => (
            <li key={item.num} className="flex items-start gap-3">
              <span className="mt-1 font-mono text-label-caps text-primary-container">
                {item.num}
              </span>
              <div>
                <div className="font-bold text-on-surface">{item.title}</div>
                <div className="text-sm text-on-surface-variant">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="glass-card rounded-xl p-8 md:col-span-5">
        <h4 className="mb-6 font-mono text-label-caps uppercase tracking-widest text-on-surface-variant">
          Architectural Tools
        </h4>
        <div className="grid grid-cols-3 gap-6 opacity-60">
          {archTools.map((tool) => (
            <div key={tool.label} className="text-center">
              <MaterialIcon
                name={tool.icon}
                className="mx-auto mb-2 block text-primary-container"
              />
              <span className="text-xs text-on-surface-variant">{tool.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-highest md:col-span-7">
        <div className="flex items-center gap-2 border-b border-outline-variant/30 bg-surface-container-high px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/50" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
            <div className="h-3 w-3 rounded-full bg-green-500/50" />
          </div>
          <span className="ml-4 font-mono text-code-sm text-on-surface-variant">
            SystemArchitecture.java
          </span>
        </div>
        <div className="flex-grow bg-surface-container-lowest p-6 font-mono text-code-sm text-on-surface-variant">
          <div className="flex gap-4">
            <span className="opacity-30">1</span>
            <span>
              <span className="syntax-keyword">public class</span>{' '}
              <span className="text-on-surface">ReliableSystem</span> {'{'}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="opacity-30">2</span>
            <span className="ml-4 syntax-keyword">@Inject</span>
          </div>
          <div className="flex gap-4">
            <span className="opacity-30">3</span>
            <span className="ml-4">
              <span className="syntax-keyword">private</span>{' '}
              <span className="text-on-surface">LoadBalancer lb;</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="opacity-30">4</span>
          </div>
          <div className="flex gap-4">
            <span className="opacity-30">5</span>
            <span className="ml-4">
              <span className="syntax-keyword">public void</span>{' '}
              <span className="text-on-surface">process()</span> {'{'}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="opacity-30">6</span>
            <span className="ml-8 syntax-comment">
              {'// Scale dynamic instances'}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="opacity-30">7</span>
            <span className="ml-8 text-on-surface">lb.ensureHealthyState();</span>
          </div>
          <div className="flex gap-4">
            <span className="opacity-30">8</span>
            <span className="ml-4">{'}'}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechStack;
