import Snap from 'snapsvg';

// enables the drawing of individual steps
export function draw() {
  drawStep(1);
  drawStep(2);
  drawStep(3);
}

export function drawStep(stepNumber: number) {
  let stepPaper = Snap(`#draw-step-${stepNumber}`);
  if (!stepPaper) return;
  stepPaper.attr({
    viewBox: [0, 0].join(' '),
    x: 0,
    y: 0,
    width: '2.5rem',
    height: '2.5rem',
    preserveAspectRatio: 'none',
  });
  stepPaper.use(`#step-${stepNumber}`);
}
