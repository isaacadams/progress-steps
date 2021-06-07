export const id = '#completion-bar';
export const radius = 15;
export const numOfCircles = 3;
export const numOfLines = 2;
export const diameter = radius * 2;
export const padding = 10;
export const absoluteMaxLength = 440;
export const absoluteDistance = calculateDistance(
  absoluteMaxLength,
  padding,
  diameter,
  numOfCircles,
  numOfLines
);

export function calculateDistance(
  widthOfSvg: number,
  paddingOfSvg: number,
  diameterOfCircles: number,
  numberOfCircles: number,
  numberOfLines: number
) {
  return (
    diameterOfCircles +
    (widthOfSvg - paddingOfSvg - diameterOfCircles * numberOfCircles) /
      numberOfLines
  );
}
