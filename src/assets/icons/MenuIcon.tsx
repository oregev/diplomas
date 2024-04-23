export const MenuIcon = ({ width = 800, height = 800, stroke = "#000" }): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
