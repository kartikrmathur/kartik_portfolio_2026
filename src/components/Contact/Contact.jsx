import portfolioData from '../../data/portfolioData';

const Contact = () => (
  <section id="contact" style={{ marginBottom: 60 }}>
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 20, padding: 'clamp(28px, 5vw, 56px)',
      position: 'relative', overflow: 'hidden',
      transition: 'background .3s, border-color .3s',
    }}>
      {/* Bottom glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: -120, left: '50%',
        transform: 'translateX(-50%)', width: 600, height: 300,
        borderRadius: '50%',
        background: `radial-gradient(circle, var(--glass-mix), transparent 65%)`,
        filter: 'blur(30px)',
      }} />

      <div style={{ position: 'relative' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 12,
          color: 'var(--primary)', letterSpacing: '0.12em', marginBottom: 14,
        }}>{'// 08 — open a connection'}</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(26px, 4.4vw, 52px)', letterSpacing: '-0.03em',
          margin: '0 0 14px', lineHeight: 1.03,
        }}>Let's build something<br className="contact-br" />that scales.</h2>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 16,
          color: 'var(--muted)', maxWidth: 520,
          margin: '0 0 28px', lineHeight: 1.6,
        }}>Backend, Android, or both — if it needs to be fast, reliable, and shipped, I'm in.</p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 34 }}>
          <a href="mailto:kartiksmathur@gmail.com" className="contact-email-btn" style={{
            background: 'var(--primary)', color: '#fff',
            fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13,
            padding: '14px 24px', borderRadius: 10,
            transition: 'transform .18s, box-shadow .18s',
          }}>kartiksmathur@gmail.com</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-resume-btn" style={{
            background: 'transparent', border: '1px solid var(--border)',
            color: 'var(--text)', fontFamily: 'var(--font-mono)',
            fontWeight: 500, fontSize: 13, padding: '14px 24px', borderRadius: 10,
            transition: 'border-color .18s',
          }}>Download résumé ↗</a>
        </div>

        {/* Find me grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 1, background: 'var(--border)',
          border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden',
        }}>
          {portfolioData.findMe.map((f) => (
            <a
              key={f.platform}
              href={f.link}
              target="_blank" rel="noopener noreferrer"
              className="findme-link"
              style={{
                background: 'var(--surface)', padding: '16px 18px',
                display: 'block', transition: 'background .15s',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10.5px',
                color: 'var(--muted)', letterSpacing: '0.08em',
                textTransform: 'uppercase', marginBottom: 5,
              }}>{f.platform}</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>{f.handle}</div>
            </a>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      .contact-email-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px var(--glass-mix); }
      .contact-resume-btn:hover { border-color: var(--primary) !important; }
      .findme-link:hover { background: var(--surface2) !important; }
      @media (max-width: 768px) {
        .contact-br { display: none; }
        .contact-email-btn, .contact-resume-btn { width: 100%; text-align: center; }
      }
    `}</style>
  </section>
);

export default Contact;
