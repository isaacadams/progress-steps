import { diameter, radius } from './setup/constants';
import { scaleSvg } from './setup/scaling';

export const id = '#completion-bar';

let { distance, lengthOfLines, maxLength } = scaleSvg();

export default {
  id,
  radius,
  diameter,
  x: 20,
  y: 20,
  beginAt: 0, // start the first step at x
  completeColor:
    (window['progressBar'] && window['progressBar']['completeColor']) ||
    '#ece23a',
  height: 40,
  distanceBetweenCircles: distance, // distance between each circle
  width: maxLength, //440 should be max
  lengthOfLines,
};
