const pillars = [
  {
    title: 'Android', tag: 'mobile', accent: 'var(--primary)',
    metric: '125M+ users at Jio',
    items: [
      'Kotlin · Jetpack Compose',
      'Clean Architecture · MVVM',
      'Coroutines · Flow · WorkManager',
      '+120% download performance',
      'On-device AI recs (TF-IDF / NLP)',
    ],
  },
  {
    title: 'Backend', tag: 'systems', accent: 'var(--blue)',
    metric: '500K+ concurrent at Tata Elxsi',
    items: [
      'Java 17 · Spring Boot 3',
      'Microservices · Kafka · WebFlux',
      'PostgreSQL · Redis · Elasticsearch',
      'Docker · Kubernetes · Azure',
      'JWT / RBAC · OAuth2 security',
    ],
  },
];

const DualStack = () => (
  <section id="stacks" style={{ marginBottom: 120 }}>
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: 12,
      color: 'var(--primary)', letterSpacing: '0.12em', marginBottom: 14,
    }}>{'// 01 — what i do'}</div>
    <h2 style={{
      fontFamily: 'var(--font-display)', fontWeight: 800,
      fontSize: 'clamp(28px, 3.6vw, 44px)', letterSpacing: '-0.025em',
      margin: '0 0 12px', lineHeight: 1.05,
    }}>Two stacks, one engineer.</h2>
    <p style={{
      fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 17,
      maxWidth: 600, margin: '0 0 38px', lineHeight: 1.6,
    }}>
      Most people pick a side. I ship the screen <em>and</em> the service it talks to — from Compose UI down to the Postgres index.
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="dual-grid">
      {pillars.map((p) => (
        <div key={p.title} className="pillar-card" style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 16, padding: 28, position: 'relative', overflow: 'hidden',
          transition: 'border-color .2s, transform .2s',
          '--pillar-accent': p.accent,
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: 3, background: p.accent,
          }} />
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', marginBottom: 18,
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 24, margin: 0,
            }}>{p.title}</h3>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, color: p.accent,
              border: `1px solid ${p.accent}`, borderRadius: 999,
              padding: '4px 10px',
            }}>{p.tag}</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
            {p.items.map((it) => (
              <li key={it} style={{
                fontFamily: 'var(--font-body)', fontSize: '14.5px',
                color: 'var(--text)', padding: '7px 0',
                display: 'flex', gap: 10, alignItems: 'flex-start',
              }}>
                <span style={{ color: p.accent, fontFamily: 'var(--font-mono)' }}>▸</span>
                {it}
              </li>
            ))}
          </ul>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)',
            borderTop: '1px solid var(--border)', paddingTop: 14,
          }}>{p.metric}</div>
        </div>
      ))}
    </div>
    <style>{`
      .pillar-card:hover { border-color: var(--pillar-accent) !important; transform: translateY(-3px); }
      @media (max-width: 768px) {
        .dual-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default DualStack;
