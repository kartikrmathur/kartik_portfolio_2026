import portfolioData from '../../data/portfolioData';

const facts = [
  { k: 'name', v: 'Kartik R Mathur' },
  { k: 'role', v: 'Software Engineer @ Deloitte' },
  { k: 'based', v: 'Gurugram, India' },
  { k: 'focus', v: 'Android · Java backend · Cloud' },
  { k: 'langs', v: 'Kotlin · Java · JavaScript' },
];

const About = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="about" style={{ marginBottom: 120 }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 12,
        color: 'var(--primary)', letterSpacing: '0.12em', marginBottom: 14,
      }}>{'// 00 — about'}</div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(28px, 3.6vw, 44px)', letterSpacing: '-0.025em',
        margin: '0 0 38px', lineHeight: 1.05,
      }}>$ whoami</h2>

      <div style={{
        display: 'grid', gridTemplateColumns: '0.85fr 1.15fr',
        gap: 24, alignItems: 'start',
      }} className="about-grid">
        {/* Terminal card */}
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 14, overflow: 'hidden', position: 'sticky', top: 88,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 7,
            padding: '10px 14px', borderBottom: '1px solid var(--border)',
            background: 'var(--surface2)', fontFamily: 'var(--font-mono)',
            fontSize: 11, color: 'var(--muted)',
          }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--dot-red)' }} />
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--dot-yellow)' }} />
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--dot-green)' }} />
            <span style={{ marginLeft: 6 }}>cat ~/about.json</span>
          </div>
          <div style={{
            padding: 18, fontFamily: 'var(--font-mono)',
            fontSize: '12.5px', lineHeight: 1.5,
          }}>
            {facts.map((f) => (
              <div key={f.k} style={{
                display: 'flex', gap: 10, padding: '7px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ color: 'var(--muted)', minWidth: 64 }}>{f.k}</span>
                <span style={{ color: 'var(--text)' }}>{f.v}</span>
              </div>
            ))}
            <div style={{
              display: 'flex', gap: 8, alignItems: 'center',
              paddingTop: 12, color: 'var(--primary)',
            }}>
              <span>● available for staff-level roles</span>
            </div>
          </div>
        </div>

        {/* Bio & education */}
        <div>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7,
            color: 'var(--text)', margin: '0 0 16px',
          }}>
            Software Engineer with 4+ years across Java and Kotlin, focused on robust backend systems and scalable Android applications. I specialize in microservices, cloud-native solutions on Azure, and enterprise system integration with Spring Boot, Docker and Kubernetes.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7,
            color: 'var(--muted)', margin: '0 0 36px',
          }}>
            At Deloitte I work on national healthcare (ABDM) integrations; before that I built high-throughput streaming backends at Tata Elxsi and consumer apps at Jio serving 125M+ users. I like root-cause problem solving, clean layered APIs, and production-grade code with strong test coverage.
          </p>

          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 12,
            color: 'var(--muted)', letterSpacing: '0.06em', marginBottom: 16,
          }}>EDUCATION</div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 36 }}>
            {education.map((e) => (
              <div key={e.year} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr',
                gap: 16, padding: '14px 0',
                borderTop: '1px solid var(--border)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 13,
                  color: 'var(--primary)', paddingTop: 1,
                }}>{e.year}</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600,
                    fontSize: 16, marginBottom: 3,
                  }}>{e.degree}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '13.5px',
                    color: 'var(--muted)',
                  }}>{e.institution}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 12,
            color: 'var(--muted)', letterSpacing: '0.06em', marginBottom: 14,
          }}>CERTIFICATIONS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
            {certifications.map((c) => (
              <span key={c} style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                background: 'var(--surface)', border: '1px solid var(--border)',
                color: 'var(--text)', padding: '8px 13px', borderRadius: 8,
              }}>✓ {c}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
