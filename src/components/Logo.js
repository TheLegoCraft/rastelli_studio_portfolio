// Inline copy of public/TestLogo.svg, split into one path per stroke so each can be animated.
// pathLength={1} lets the CSS treat every stroke as length 1, whatever its real size.
// --d staggers the strokes when the hover animation redraws them.
const STROKES = [
  { d: 'M120 280V120H1200', delay: '0s' }, // F stem and top bar
  { d: 'M120 200H1200', delay: '0.08s' }, // F middle bar
  { d: 'M1300 280V120H2110C2110 120 2380 120 2380 160C2380 200 2110 200 2110 200H1300', delay: '0.16s' }, // R stem and bowl
  { d: 'M1300 200L2380 280', delay: '0.32s' }, // R leg
];

export default function Logo({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 2500 400"
      fill="none"
      stroke="currentColor"
      strokeWidth={20}
      className={`logo ${className}`}
      aria-hidden="true"
      {...props}
    >
      <rect x="10" y="10" width="2480" height="380" />
      {STROKES.map(({ d, delay }) => (
        // The page-load animation runs on the <g> and the path inherits its stroke-dashoffset, so the
        // hover animation on the path can come and go without restarting the page-load one
        <g key={d} className="logo__intro" style={{ '--d': delay }}>
          <path d={d} pathLength={1} strokeLinecap="round" className="logo__stroke" />
        </g>
      ))}
    </svg>
  );
}
