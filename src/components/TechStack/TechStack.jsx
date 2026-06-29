import portfolioData from '../../data/portfolioData';

const order = ['Backend & Frameworks', 'Mobile', 'Cloud & DevOps', 'Data & APIs', 'Security & Tools'];

const TechStack = () => {
  const techGroups = order.map((label) => ({
    label,
    items: portfolioData.skills.filter((s) => s.category === label).map((s) => s.name),
  }));

  return (
    <section style={{ marginBottom: 120 }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 12,
        color: 'var(--primary)', letterSpacing: '0.12em', marginBottom: 14,
      }}>{'// 02 — toolbox'}</div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(28px, 3.6vw, 44px)', letterSpacing: '-0.025em',
        margin: '0 0 38px', lineHeight: 1.05,
      }}>The stack, end to end.</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {techGroups.map((g) => (
          <div key={g.label} style={{
            display: 'grid', gridTemplateColumns: '200px 1fr',
            gap: 24, alignItems: 'start',
          }} className="tech-row">
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--muted)', letterSpacing: '0.04em', paddingTop: 6,
            }}>{g.label}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
              {g.items.map((t) => (
                <span key={t} className="tech-chip-item" style={{
                  fontFamily: 'var(--font-mono)', fontSize: '12.5px',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  color: 'var(--text)', padding: '7px 13px', borderRadius: 8,
                  transition: 'border-color .18s, color .18s',
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .tech-chip-item:hover { border-color: var(--primary) !important; color: var(--primary) !important; }
        @media (max-width: 768px) {
          .tech-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
