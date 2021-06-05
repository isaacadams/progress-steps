import Snap from 'snapsvg';
import settings from '../settings';

const [w, h] = getRectangle(20);

function getRectangle(s: number) {
  return [s, s / 6];
}

const s = Snap(settings.id);
s.attr({
  viewBox: [-5, 0, 250, 40].join(' '),
  x: 0,
  y: 0,
  height: h + 'rem',
  width: w + 'rem',
  preserveAspectRatio: 'none',
});

export default s;
