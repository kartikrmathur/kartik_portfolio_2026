import portfolioData from '../../data/portfolioData';
import './About.css';

const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Projects Completed', value: '20+' }
  // { label: 'Happy Clients', value: '10+' },
];

const About = () => {
  const { name, bio } = portfolioData.personalInfo;
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <section className="about section" id="about">
      <div className="section__container">
        <h2 className="section__heading" data-aos="fade-up">
          About <span>Me</span>
        </h2>
        <p className="section__subheading" data-aos="fade-up" data-aos-delay="100">
          Here you'll find more information about me, what I do, and my current skills
        </p>

        <div className="about__grid">
          <div className="about__image-col" data-aos="fade-right" data-aos-delay="200">
            <div className="about__avatar">
              <span>{initials}</span>
            </div>
          </div>

          <div className="about__text-col" data-aos="fade-left" data-aos-delay="300">
            <h3 className="about__subtitle">
              Get to know me!
            </h3>
            <p className="about__bio">{bio}</p>

            <div className="about__stats">
              {stats.map((stat, i) => (
                <div className="about__stat" key={i} data-aos="zoom-in" data-aos-delay={400 + i * 100}>
                  <h4 className="about__stat-value accent">{stat.value}</h4>
                  <p className="about__stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
