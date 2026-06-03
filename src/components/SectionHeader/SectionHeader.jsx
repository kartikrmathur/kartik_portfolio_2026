const SectionHeader = ({ title, className = '' }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <h2 className="font-display text-headline-md text-on-surface">{title}</h2>
    <div className="section-divider" />
  </div>
);

export const SectionEyebrow = ({ children }) => (
  <span className="mb-4 block font-mono text-label-caps tracking-widest text-primary-container">
    {children}
  </span>
);

export default SectionHeader;
