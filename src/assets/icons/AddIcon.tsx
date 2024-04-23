export const AddIcon = ({ width = 800, height = 800, stroke = "#000" }): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <title />

    <g id="Complete">
      <g data-name="add" id="add-2">
        <g>
          <line
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="12"
            x2="12"
            y1="19"
            y2="5"
          />

          <line
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="5"
            x2="19"
            y1="12"
            y2="12"
          />
        </g>
      </g>
    </g>
  </svg>
);
