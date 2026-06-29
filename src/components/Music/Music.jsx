import portfolioData from '../../data/portfolioData';

const Music = () => (
  <section style={{ marginBottom: 120 }}>
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: 12,
      color: 'var(--primary)', letterSpacing: '0.12em', marginBottom: 14,
    }}>{'// 07 — background process'}</div>
    <div style={{
      display: 'flex', alignItems: 'flex-end',
      justifyContent: 'space-between', flexWrap: 'wrap',
      gap: 16, marginBottom: 28,
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(28px, 3.6vw, 44px)', letterSpacing: '-0.025em',
        margin: 0, lineHeight: 1.05,
      }}>On loop while I build.</h2>
      <a
        href={portfolioData.playlistLink}
        target="_blank" rel="noopener noreferrer"
        className="playlist-link"
        style={{
          fontFamily: 'var(--font-mono)', fontSize: '12.5px',
          color: 'var(--primary)', border: '1px solid var(--primary)',
          borderRadius: 8, padding: '9px 15px',
          transition: 'background .18s',
        }}
      >full playlist ↗</a>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }} className="music-grid">
      {portfolioData.onLoop.map((m) => (
        <a
          key={m.title}
          href={m.link}
          target="_blank" rel="noopener noreferrer"
          className="music-item"
          style={{
            display: 'flex', alignItems: 'center', gap: 14,
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 11, padding: '13px 16px',
            transition: 'border-color .18s, transform .18s',
          }}
        >
          <span style={{
            width: 36, height: 36, borderRadius: 8,
            background: m.color, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-mono)', fontSize: 13, color: '#fff',
          }}>♪</span>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 15, whiteSpace: 'nowrap', overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>{m.title}</div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '11.5px',
              color: 'var(--muted)',
            }}>{m.artist}</div>
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: 'var(--muted)',
          }}>↗</span>
        </a>
      ))}
    </div>
    <style>{`
      .playlist-link:hover { background: color-mix(in srgb, var(--primary) 12%, transparent); }
      .music-item:hover { border-color: var(--primary) !important; transform: translateX(3px); }
      @media (max-width: 768px) {
        .music-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default Music;
