export const id = '#completion-bar';
const radius = 15;
const numOfCircles = 3;
const numOfLines = 2;
const diameter = radius * 2;
const padding = 10;

// these can change
const absoluteDistanceBetweenCircles = 200;
const absoluteLengthOfLines = absoluteDistanceBetweenCircles - diameter;
// sum of all circle's diameters, length of all lines, and some padding
const absoluteMaxLength = calculateWidthOfSvg(
  diameter,
  numOfCircles,
  absoluteLengthOfLines,
  numOfLines,
  padding
);

console.log(absoluteMaxLength);

function calculateWidthOfSvg(
  diameter: number,
  numberOfCircles: number,
  lengthOfLines: number,
  numberOfLines: number,
  padding: number
) {
  return diameter * numberOfCircles + lengthOfLines * numberOfLines + padding;
}

function scaleDistance() {
  if (window.innerWidth > absoluteMaxLength) {
    return absoluteDistanceBetweenCircles;
  }

  return (
    absoluteDistanceBetweenCircles - (absoluteMaxLength - window.innerWidth)
  );
}

export function scaleSvg() {
  let distance = scaleDistance();
  let lengthOfLines = distance - diameter;
  let maxLength = calculateWidthOfSvg(
    diameter,
    numOfCircles,
    lengthOfLines,
    numOfLines,
    padding
  );

  return {
    distance,
    lengthOfLines,
    maxLength,
  };
}

let { distance, lengthOfLines, maxLength } = scaleSvg();

export default {
  id,
  radius,
  diameter,
  x: 20,
  y: 20,
  beginAt: 0, // start the first step at x
  completeColor: '#ece23a',
  height: 40,
  distanceBetweenCircles: distance, // distance between each circle
  width: maxLength, //440 should be max
  lengthOfLines,
};
