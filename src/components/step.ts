import Snap from 'snapsvg';

export const steps = [drawStep(1), drawStep(2), drawStep(3)];

// enables the drawing of individual steps
export function draw() {
  drawStep(1);
  drawStep(2);
  drawStep(3);
  steps.forEach((s) => s.draw());
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

  return {
    paper: stepPaper,
    draw: () => stepPaper.use(`#step-${stepNumber}`),
    complete: () => {
      stepPaper.select('use').remove();
      stepPaper.use(`#step-${stepNumber}-completed`);
    },
  };
}
