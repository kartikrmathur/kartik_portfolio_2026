import portfolioData from '../../data/portfolioData';

const accentFor = (f) =>
  /android|kotlin|jetpack|compose/i.test(f) ? 'var(--primary)'
    : /ios|swift/i.test(f) ? 'var(--cyan)' : 'var(--blue)';

const tagFor = (f) =>
  /android|kotlin|jetpack|compose/i.test(f) ? 'ANDROID'
    : /ios|swift/i.test(f) ? 'iOS' : 'BACKEND';

const Timeline = () => {
  const items = portfolioData.timeline.map((t) => ({
    ...t,
    accent: accentFor(t.focus),
    tag: tagFor(t.focus),
  }));

  return (
    <section id="timeline" style={{ marginBottom: 120 }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 12,
        color: 'var(--primary)', letterSpacing: '0.12em', marginBottom: 14,
      }}>{'// 04 — career'}</div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(28px, 3.6vw, 44px)', letterSpacing: '-0.025em',
        margin: '0 0 28px', lineHeight: 1.05,
      }}>adb logcat — career</h2>

      <div style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 14, overflow: 'hidden',
      }}>
        {/* Header bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '11px 16px', borderBottom: '1px solid var(--border)',
          background: 'var(--surface2)', fontFamily: 'var(--font-mono)',
          fontSize: '11.5px', color: 'var(--muted)',
        }}>
          <span style={{ color: 'var(--primary)' }}>●</span> Logcat
          <span style={{ marginLeft: 'auto' }}>
            filter: <span style={{ color: 'var(--text)' }}>tag:career</span>
          </span>
        </div>

        <div>
          {items.map((t, i) => (
            <div key={i} className="timeline-row" style={{
              display: 'grid', gridTemplateColumns: '130px 96px 1fr',
              gap: 14, padding: 16,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              transition: 'background .15s',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '11.5px',
                color: 'var(--muted)', paddingTop: 2,
              }}>{t.year}</div>
              <div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  fontWeight: 700, letterSpacing: '0.06em',
                  color: t.accent, border: `1px solid ${t.accent}`,
                  borderRadius: 5, padding: '3px 7px', whiteSpace: 'nowrap',
                }}>{t.tag}</span>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                  fontSize: 16, marginBottom: 2,
                }}>
                  {t.company}{' '}
                  <span style={{
                    color: 'var(--muted)', fontWeight: 400,
                    fontSize: 13, fontFamily: 'var(--font-body)',
                  }}>· {t.role}</span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 14,
                  color: 'var(--muted)', lineHeight: 1.55,
                }}>{t.highlight}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-row:hover { background: var(--surface2); }
        @media (max-width: 768px) {
          .timeline-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
