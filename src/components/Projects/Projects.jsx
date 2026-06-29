import portfolioData from '../../data/portfolioData';

const projAccent = (c) =>
  c === 'Backend' ? 'var(--blue)'
    : c === 'Mobile' ? 'var(--primary)'
    : c === 'AI / ML' ? 'var(--cyan)'
    : 'var(--muted)';

const Projects = () => {
  const projects = portfolioData.projects.map((p) => ({
    ...p,
    accent: projAccent(p.category),
    chips: p.techStack.slice(0, 3),
  }));
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="work" style={{ marginBottom: 120 }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 12,
        color: 'var(--primary)', letterSpacing: '0.12em', marginBottom: 14,
      }}>{'// 05 — selected work'}</div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(28px, 3.6vw, 44px)', letterSpacing: '-0.025em',
        margin: '0 0 28px', lineHeight: 1.05,
      }}>Things I've shipped.</h2>

      {/* Featured project */}
      {featured && (
        <a
          href={featured.githubLink}
          target="_blank" rel="noopener noreferrer"
          className="featured-card"
          style={{
            display: 'block', background: 'var(--surface)',
            border: '1px solid var(--border)', borderRadius: 18,
            padding: 32, marginBottom: 20, position: 'relative',
            overflow: 'hidden', transition: 'border-color .2s, transform .2s',
          }}
        >
          <div aria-hidden="true" style={{
            position: 'absolute', top: -40, right: -40,
            width: 240, height: 240, borderRadius: '50%',
            background: 'radial-gradient(circle, color-mix(in srgb, var(--blue) 14%, transparent), transparent 65%)',
          }} />
          <div style={{
            position: 'relative', display: 'grid',
            gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'start',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10.5px',
                  fontWeight: 700, letterSpacing: '0.08em',
                  color: 'var(--blue)', border: '1px solid var(--blue)',
                  borderRadius: 5, padding: '3px 8px',
                }}>FEATURED · {featured.category}</span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 30, margin: '0 0 10px', letterSpacing: '-0.02em',
              }}>{featured.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 15,
                lineHeight: 1.6, color: 'var(--muted)',
                maxWidth: 640, margin: '0 0 18px',
              }}>{featured.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {featured.techStack.map((tech) => (
                  <span key={tech} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    background: 'var(--surface2)', color: 'var(--muted)',
                    padding: '5px 10px', borderRadius: 6,
                  }}>{tech}</span>
                ))}
              </div>
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 13,
              color: 'var(--blue)', whiteSpace: 'nowrap',
            }}>GitHub ↗</span>
          </div>
        </a>
      )}

      {/* Other projects grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
      }} className="projects-grid">
        {others.map((proj) => (
          <a
            key={proj.title}
            href={proj.githubLink}
            target="_blank" rel="noopener noreferrer"
            className="project-card"
            style={{
              display: 'flex', flexDirection: 'column',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 14, padding: 22,
              transition: 'border-color .2s, transform .2s',
              '--proj-accent': proj.accent,
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', marginBottom: 12,
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                fontWeight: 700, letterSpacing: '0.06em', color: proj.accent,
              }}>{proj.category}</span>
              <span style={{
                color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: 12,
              }}>↗</span>
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 18, margin: '0 0 8px',
            }}>{proj.title}</h3>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 13,
              lineHeight: 1.55, color: 'var(--muted)',
              margin: '0 0 16px', flex: 1,
            }}>{proj.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {proj.chips.map((tech) => (
                <span key={tech} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10.5px',
                  background: 'var(--surface2)', color: 'var(--muted)',
                  padding: '4px 8px', borderRadius: 5,
                }}>{tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .featured-card:hover { border-color: var(--blue) !important; transform: translateY(-3px); }
        .project-card:hover { border-color: var(--proj-accent) !important; transform: translateY(-3px); }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
