import Snap from 'snapsvg';
import settings from '../settings';

const s = Snap(settings.id);
s.attr({
  viewBox: [-5, 0, 250, 40].join(' '),
  x: 0,
  y: 0,
  height: 'unset',
  width: 'unset',
  preserveAspectRatio: 'none',
});

export default s;
