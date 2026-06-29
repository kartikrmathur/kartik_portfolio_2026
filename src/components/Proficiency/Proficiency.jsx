import portfolioData from '../../data/portfolioData';

const Proficiency = () => (
  <section style={{ marginBottom: 120 }}>
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '26px 56px',
    }} className="proficiency-grid">
      {portfolioData.skillCategories.map((c) => (
        <div key={c.label}>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 17, marginBottom: 16,
          }}>{c.label}</div>
          {c.skills.map((sk) => (
            <div key={sk.name} style={{ marginBottom: 13 }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)', fontSize: 12, marginBottom: 6,
              }}>
                <span style={{ color: 'var(--text)' }}>{sk.name}</span>
                <span style={{ color: 'var(--muted)' }}>{sk.pct}%</span>
              </div>
              <div style={{
                height: 5, background: 'var(--surface2)',
                borderRadius: 99, overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%', width: `${sk.pct}%`,
                  background: 'var(--primary)', borderRadius: 99,
                }} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    <style>{`
      @media (max-width: 768px) {
        .proficiency-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default Proficiency;
