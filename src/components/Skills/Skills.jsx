import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython,
  FaGitAlt, FaDocker, FaAws, FaFigma,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiRedux, SiExpress,
  SiMongodb, SiPostgresql,
} from 'react-icons/si';
import portfolioData from '../../data/portfolioData';
import './Skills.css';

const iconMap = {
  FaReact: <FaReact />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaNodeJs: <FaNodeJs />,
  FaPython: <FaPython />,
  FaGitAlt: <FaGitAlt />,
  FaDocker: <FaDocker />,
  FaAws: <FaAws />,
  FaFigma: <FaFigma />,
  SiJavascript: <SiJavascript />,
  SiTypescript: <SiTypescript />,
  SiRedux: <SiRedux />,
  SiExpress: <SiExpress />,
  SiMongodb: <SiMongodb />,
  SiPostgresql: <SiPostgresql />,
};

const categories = ['Frontend', 'Backend', 'Tools & Others'];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="section__container">
        <h2 className="section__heading" data-aos="fade-up">
          My <span>Skills</span>
        </h2>
        <p className="section__subheading" data-aos="fade-up" data-aos-delay="100">
          Technologies and tools I work with
        </p>

        {categories.map((cat) => {
          const filtered = portfolioData.skills.filter((s) => s.category === cat);
          if (filtered.length === 0) return null;
          return (
            <div key={cat} className="skills__category">
              <h3 className="skills__category-title" data-aos="fade-up">
                {cat}
              </h3>
              <div className="skills__grid">
                {filtered.map((skill, i) => (
                  <div
                    className="skills__card"
                    key={skill.name}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                  >
                    <div className="skills__icon">
                      {iconMap[skill.icon] || <FaReact />}
                    </div>
                    <h4 className="skills__name">{skill.name}</h4>
                    <div className="skills__bar-bg">
                      <div
                        className="skills__bar-fill"
                        style={{ '--fill-width': `${skill.level}%` }}
                      />
                    </div>
                    <span className="skills__level mono">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
