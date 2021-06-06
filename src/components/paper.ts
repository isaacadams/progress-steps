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
  //viewBox: [0, 0, settings.width, settings.height].join(' '),
  viewbox: '0 0 100 40',
  x: 0,
  y: 0,
  width: '100%', //w + 'rem',
  height: 'auto', // settings.height, //h + 'rem',
  //preserveAspectRatio: 'none',
  preserveAspectRatio: 'xMinYMin meet',
});

export default paper;
