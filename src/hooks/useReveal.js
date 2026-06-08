import { useEffect } from 'react';

/**
 * Stitch-style scroll reveal for section groups.
 */
export function useRevealGroup(selector = '.reveal') {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = document.querySelectorAll(selector);
    if (prefersReduced) {
      nodes.forEach((n) => n.classList.add('reveal-active'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [selector]);
}
