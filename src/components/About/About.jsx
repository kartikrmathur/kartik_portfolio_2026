import portfolioData from '../../data/portfolioData';
import './About.css';

const getEndYear = (year) => {
  if (year.includes('Present')) return 'Now';
  const parts = year.split('—');
  const end = (parts[1] || parts[0]).trim();
  const match = end.match(/\d{4}/);
  return match ? match[0] : end;
};

const About = () => {
  const { bio } = portfolioData.personalInfo;
  const { onLoop, timeline, findMe } = portfolioData;

  return (
    <section className="me section" id="me">
      <div className="section__container">
        <p className="me__bio" data-aos="fade-up">
          {bio}
        </p>

        <div className="me__grid" data-aos="fade-up" data-aos-delay="200">
          {/* On Loop */}
          <div className="me__col">
            <h3 className="me__col-title">On Loop</h3>
            <ul className="me__list">
              {onLoop.map((song, i) => (
                <li className="me__song" key={i}>
                  <span
                    className="me__dot"
                    style={{ backgroundColor: song.color }}
                  />
                  <div>
                    <p className="me__song-title">{song.title}</p>
                    <p className="me__song-artist">{song.artist}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <div className="me__col">
            <h3 className="me__col-title">Timeline</h3>
            <ul className="me__list">
              {timeline.map((item, i) => (
                <li className="me__timeline-item" key={i}>
                  <p className="me__timeline-company">{item.company}</p>
                  <p className="me__timeline-role">
                    {item.role} &mdash; {getEndYear(item.year)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Me */}
          <div className="me__col">
            <h3 className="me__col-title">Find Me</h3>
            <ul className="me__list">
              {findMe.map((item, i) => (
                <li className="me__find-item" key={i}>
                  <span className="me__find-platform">{item.platform}</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me__find-handle"
                  >
                    {item.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
