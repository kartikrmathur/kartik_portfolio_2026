import { useEffect } from 'react';

/**
 * Stitch about-page effect: radial highlight on glass cards at cursor position.
 */
export function useGlassCardGlow() {
  useEffect(() => {
    const onMove = (e) => {
      document.querySelectorAll('.glass-card').forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
}
