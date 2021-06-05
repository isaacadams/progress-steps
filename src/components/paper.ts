import Snap from 'snapsvg';
import settings from '../settings';

const [w, h] = getRectangle(settings.scale);

function getRectangle(s: number) {
  return [s, s / 6];
}

// sum of the length of all lines, diameter of all circles, some padding, and an adjustment
let widthOfViewBox =
  settings.distanceBetweenCircles * 2 + settings.diameter * 3 + 10 - 50;

const paper = Snap(settings.id);
paper.attr({
  viewBox: [-5, 0, '100%', 40].join(' '),
  x: 0,
  y: 0,
  height: settings.height, //h + 'rem',
  width: settings.width, //w + 'rem',
  preserveAspectRatio: 'none',
});

export default paper;
