import './OrbitBg.css';

const OrbitBg = () => {
  return (
    <div className="orbit-bg" aria-hidden="true">
      <div className="orbit-bg__center" />
      <div className="orbit-bg__ring orbit-bg__ring--1">
        <div className="orbit-bg__dot" />
      </div>
      <div className="orbit-bg__ring orbit-bg__ring--2">
        <div className="orbit-bg__dot" />
      </div>
      <div className="orbit-bg__ring orbit-bg__ring--3">
        <div className="orbit-bg__dot" />
      </div>
      <div className="orbit-bg__ring orbit-bg__ring--4">
        <div className="orbit-bg__dot" />
      </div>
      <div className="orbit-bg__ring orbit-bg__ring--5">
        <div className="orbit-bg__dot" />
      </div>
      <div className="orbit-bg__glow orbit-bg__glow--1" />
      <div className="orbit-bg__glow orbit-bg__glow--2" />
    </div>
  );
};

export default OrbitBg;
