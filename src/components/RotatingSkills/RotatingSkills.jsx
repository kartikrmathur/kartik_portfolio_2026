import portfolioData from '../../data/portfolioData';

const allSkills = portfolioData.skills.map((s) => s.name);
const track = [...allSkills, ...allSkills];

const RotatingSkills = () => (
  <div className="skills-scroll-strip" aria-label="Technical skills">
    <div className="skills-scroll-strip-fade skills-scroll-strip-fade--left" aria-hidden="true" />
    <div className="skills-scroll-strip-fade skills-scroll-strip-fade--right" aria-hidden="true" />
    <div className="skills-scroll-strip-track">
      {track.map((skill, i) => (
        <span key={`${skill}-${i}`} className="skills-scroll-chip">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default RotatingSkills;
