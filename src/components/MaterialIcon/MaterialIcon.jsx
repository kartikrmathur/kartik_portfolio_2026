const MaterialIcon = ({ name, className = '', filled = false }) => (
  <span
    className={`material-symbols-outlined align-middle ${className}`}
    style={filled ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : undefined}
    aria-hidden="true"
  >
    {name}
  </span>
);

export default MaterialIcon;
