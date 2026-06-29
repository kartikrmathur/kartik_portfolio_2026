const Footer = () => (
  <footer style={{
    padding: '30px 0 50px',
    borderTop: '1px solid var(--border)',
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', flexWrap: 'wrap', gap: 12,
    fontFamily: 'var(--font-mono)', fontSize: '11.5px',
    color: 'var(--muted)',
  }}>
    <span>© 2026 Kartik R Mathur — built with Kotlin energy.</span>
    <span style={{ color: 'var(--primary)' }}>{'// compiled clean ✓'}</span>
  </footer>
);

export default Footer;
