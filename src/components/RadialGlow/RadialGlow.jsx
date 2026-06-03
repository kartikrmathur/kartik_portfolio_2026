import { useEffect, useRef } from 'react';

const RadialGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return undefined;

    const onMove = (e) => {
      glow.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(var(--glow-rgb), 0.08) 0%, transparent 60%)`;
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          'radial-gradient(circle at 50% 50%, rgba(var(--glow-rgb), 0.1) 0%, transparent 50%)',
      }}
      aria-hidden="true"
    />
  );
};

export default RadialGlow;
