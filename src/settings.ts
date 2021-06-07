export const id = '#completion-bar';
const radius = 15;
const distanceBetweenCircles = 200;
const scale = 28; // width will be 20 rem
export const diameter = radius * 2;
export const lengthOfLines = distanceBetweenCircles - diameter;
const numOfCircles = 3;
const numOfLines = 2;

const maxLength = diameter * numOfCircles + distanceBetweenCircles * numOfLines;

export function scaleDistance() {
  if (window.innerWidth > maxLength) {
    return distanceBetweenCircles;
  }

  return distanceBetweenCircles - (maxLength - window.innerWidth);
}

export default {
  id,
  radius,
  diameter,
  x: 20,
  y: 20,
  distanceBetweenCircles: scaleDistance(), // distance between each circle
  beginAt: 0, // start the first step at x
  completeColor: '#ece23a',
  width: 440, //'27.5rem',
  height: 40, //'2.5rem',
  scale,
  scaleDistance,
};
