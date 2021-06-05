const radius = 15;
const scale = 28; // width will be 20 rem

export default {
  id: '#completion-bar',
  radius,
  diameter: radius * 2,
  x: 20,
  y: 20,
  distanceBetweenCircles: 100, // distance between each circle
  beginAt: 0, // start the first item at x
  completeColor: '#ece23a',
  scale,
};
