const Hero = () => (
  <section id="index" style={{
    padding: '150px 0 90px',
    display: 'grid', gridTemplateColumns: '1.25fr 0.95fr',
    gap: 48, alignItems: 'center',
  }} className="hero-section">
    <div style={{ animation: 'fadeup .7s ease both' }}>
      {/* Status badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 9,
        fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)',
        border: '1px solid var(--border)', borderRadius: 999,
        padding: '6px 13px', marginBottom: 26,
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: '50%',
          background: 'var(--primary)',
          boxShadow: '0 0 10px var(--primary)',
        }} />
        Gurugram, India · open to staff-level roles
      </div>

      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(38px, 5.4vw, 68px)', lineHeight: 1.02,
        letterSpacing: '-0.03em', margin: '0 0 22px',
      }}>
        Android apps millions<br />trust — and the{' '}
        <span style={{ color: 'var(--primary)' }}>backends</span><br />
        that keep them up.
      </h1>

      <p style={{
        fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6,
        color: 'var(--muted)', maxWidth: 540, margin: '0 0 30px',
      }}>
        I'm <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Kartik R Mathur</strong> — a software
        engineer who ships large-scale Kotlin/Android apps and the Java/Spring services behind them. 4+ years
        across Deloitte, Tata Elxsi, and Jio.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a href="#work" className="hero-cta-primary" style={{
          background: 'var(--primary)', color: '#04130b',
          fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13,
          padding: '13px 22px', borderRadius: 10,
          transition: 'transform .18s, box-shadow .18s',
        }}>View work</a>
        <a href="#contact" className="hero-cta-secondary" style={{
          background: 'transparent', color: 'var(--text)',
          fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 13,
          padding: '13px 22px', borderRadius: 10,
          border: '1px solid var(--border)',
          transition: 'background .18s, border-color .18s',
        }}>Get in touch</a>
      </div>
    </div>

    {/* Right column: hero image + terminal */}
    <div style={{ position: 'relative', animation: 'fadeup .9s ease both' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '-10% 0 0',
        background: 'radial-gradient(circle at 60% 40%, var(--glow-mix), transparent 60%)',
        filter: 'blur(40px)',
      }} />
      <img
        src="/hero.png"
        alt="Layered architecture"
        style={{
          position: 'relative', width: '78%', display: 'block',
          margin: '0 auto 18px',
          animation: 'floaty 6s ease-in-out infinite',
          filter: `drop-shadow(0 30px 50px rgba(0,0,0,var(--shadow-alpha)))`,
        }}
      />
      {/* Terminal mockup */}
      <div style={{
        position: 'relative', background: 'var(--surface)',
        border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden',
        fontFamily: 'var(--font-mono)', fontSize: '11.5px',
        boxShadow: `0 24px 60px rgba(0,0,0,var(--shadow-alpha))`,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 7,
          padding: '9px 13px', borderBottom: '1px solid var(--border)',
          background: 'var(--surface2)',
        }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57' }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#febc2e' }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28c840' }} />
          <span style={{ marginLeft: 8, color: 'var(--muted)', fontSize: '10.5px' }}>zsh — gradle</span>
        </div>
        <div style={{ padding: '13px 15px', lineHeight: 1.85, color: 'var(--muted)' }}>
          <div><span style={{ color: 'var(--primary)' }}>$</span> ./gradlew :app:assembleRelease</div>
          <div style={{ color: '#7d848e' }}>&gt; Task :backend:bootJar</div>
          <div style={{ color: '#7d848e' }}>&gt; Task :app:compileKotlin</div>
          <div style={{ color: 'var(--primary)' }}>BUILD SUCCESSFUL <span style={{ color: 'var(--muted)' }}>in 4s</span></div>
          <div>
            <span style={{ color: 'var(--primary)' }}>$</span>{' '}
            <span style={{
              display: 'inline-block', width: 8, height: 14,
              background: 'var(--primary)', verticalAlign: -2,
              animation: 'blink 1.1s step-end infinite',
            }} />
          </div>
        </div>
      </div>
    </div>

    <style>{`
      .hero-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px var(--glass-mix); }
      .hero-cta-secondary:hover { background: var(--surface) !important; border-color: var(--primary) !important; }
      @media (max-width: 768px) {
        .hero-section { grid-template-columns: 1fr !important; padding-top: 120px !important; gap: 32px !important; }
      }
    `}</style>
  </section>
);

export default Hero;
