// Shared by the /work tiles and the home page wheel so the two stay matched.

export const TILE_RADIUS = '1.75%';
export const TILE_BRIGHTNESS = { rest: 0.5, active: 1.1 };
export const TILE_BAR_COLOR = 'rgba(0, 0, 0, 0.8)';

export const tileBarStyle = {
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: 3,
  padding: '0.7rem 1.25rem',
  backgroundColor: TILE_BAR_COLOR,
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
};

export const tileTitleStyle = {
  color: '#ffffff',
  fontFamily: 'var(--font-jetbrains-mono), monospace',
  fontSize: 'clamp(0.95rem, 1.35vw, 1.22rem)',
  fontWeight: 500,
  lineHeight: 1.35,
  letterSpacing: '0.02em',
  margin: 0,
  wordBreak: 'break-word',
};
