import portfolioData from '../../data/portfolioData';

const Testimonials = () => {
  const items = portfolioData.testimonials.map((r) => ({
    ...r,
    initials: r.name.split(' ').map((w) => w[0]).join('').slice(0, 2),
    roleLine: `${r.role} · ${r.company}`,
  }));

  return (
    <section style={{ marginBottom: 120 }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 12,
        color: 'var(--primary)', letterSpacing: '0.12em', marginBottom: 14,
      }}>{'// 06 — code review'}</div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(28px, 3.6vw, 44px)', letterSpacing: '-0.025em',
        margin: '0 0 28px', lineHeight: 1.05,
      }}>What teammates say.</h2>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
      }} className="testimonials-grid">
        {items.map((r) => (
          <div key={r.name} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 14, padding: 24,
            display: 'flex', flexDirection: 'column',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 14,
              lineHeight: 1.65, color: 'var(--text)',
              margin: '0 0 20px', flex: 1,
            }}>"{r.quote}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{
                width: 40, height: 40, borderRadius: 11,
                background: r.avatarColor,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 14, color: '#fff',
              }}>{r.initials}</span>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
                }}>{r.name}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--muted)',
                }}>{r.roleLine}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
