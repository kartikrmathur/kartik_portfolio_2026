import portfolioData from '../../data/portfolioData';

const Footer = () => {
  const { name, github, linkedin, email, title, currentCompany } =
    portfolioData.personalInfo;
  const displayName = name.replace(/\s+R\s+/i, ' ').replace(/"R"\s*/i, '').trim();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-outline-variant/10 bg-surface-container-lowest py-16">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-gutter px-margin-mobile md:flex-row md:px-margin-desktop">
        <div className="font-mono text-label-caps text-on-surface-variant">
          {displayName}{' // '}{title.toUpperCase()} @ {currentCompany.toUpperCase()}
        </div>
        <p className="font-mono text-body-md text-on-surface-variant opacity-60">
          © {year} {displayName}.
        </p>
        <div className="flex gap-8">
          {[
            { label: 'GitHub', href: github },
            { label: 'LinkedIn', href: linkedin },
            { label: 'Email', href: `mailto:${email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="font-mono text-label-caps text-on-surface-variant transition-all duration-200 hover:-translate-y-1 hover:text-primary-container"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
