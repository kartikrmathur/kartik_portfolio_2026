const stats = [
  { n: '4+', l: 'years shipping' },
  { n: '125M+', l: 'users served' },
  { n: '500K+', l: 'concurrent req/s' },
  { n: '17+', l: 'channels backed' },
];

const Stats = () => (
  <section style={{
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
    background: 'var(--border)', border: '1px solid var(--border)',
    borderRadius: 14, overflow: 'hidden', marginBottom: 120,
  }} className="stats-section">
    {stats.map((s) => (
      <div key={s.l} style={{ background: 'var(--bg)', padding: '26px 22px' }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 34, letterSpacing: '-0.02em', color: 'var(--primary)',
        }}>{s.n}</div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '11.5px',
          color: 'var(--muted)', marginTop: 6, letterSpacing: '0.02em',
        }}>{s.l}</div>
      </div>
    ))}
    <style>{`
      @media (max-width: 768px) {
        .stats-section { grid-template-columns: repeat(2, 1fr) !important; }
      }
    `}</style>
  </section>
);

export default Stats;
