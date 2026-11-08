// Styles for the /work tiles.
// The tile title's text style is the .tile-title class in globals.css.

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
