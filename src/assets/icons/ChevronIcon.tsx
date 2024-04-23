export const ChevronIcon = ({ width = 800, height = 800, stroke = "#000" }): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path
      d="M17 18L12 13L7 18M17 11L12 6L7 11"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
