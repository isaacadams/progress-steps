import {
  absoluteMaxLength,
  calculateDistance,
  diameter,
  numOfCircles,
  numOfLines,
  padding,
} from './constants';

function scaleWidth() {
  let baseline = window.innerWidth - 30;
  if (baseline > absoluteMaxLength) {
    return absoluteMaxLength;
  }

  if (window.innerWidth < 300) {
    return window.innerWidth - window.innerWidth * 0.1;
  }

  return baseline;
}

export function scaleSvg() {
  let maxLength = scaleWidth();
  /* console.log(`window.innerWidth: ${window.innerWidth}`);
  console.log(`maxLength: ${maxLength}`); */
  let distance = calculateDistance(
    maxLength,
    padding,
    diameter,
    numOfCircles,
    numOfLines
  );
  let lengthOfLines = distance - diameter;

  return {
    distance,
    lengthOfLines,
    maxLength,
  };
}
