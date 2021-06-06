import settings from './settings';
import paper from './components/paper';
import { createStep } from './components/step';
import { Element } from 'snapsvg';
import { addImagePatternToDefs } from './functions/addImagePatternToDefs';
import checkMark from 'url:./../check-mark.svg';
import Snap from 'snapsvg';
addImagePatternToDefs('check-mark', checkMark);

export const steps = [createStep(1), createStep(2), createStep(3)];
let [one, two, three] = steps;

// only need connecting lines between one and two
// the path/line should go first
// everything that appears after will be drawn on top of line
one.drawLine();
two.drawLine();

let cursorX = settings.beginAt;

addStepToProgressBar(cursorX, one.stepSVG);
addStepToProgressBar(cursorX, two.stepSVG);
addStepToProgressBar(cursorX, three.stepSVG);

function addStepToProgressBar(x: number, group: Element) {
  group.attr({ class: 'progress-bar-step', transform: 'translate(' + [x, 0].join(',') + ')' });
  paper.append(group);
  cursorX = cursorX + settings.distanceBetweenCircles;
}

export function completeStepOne() {
  one.complete();
}

export function completeStepTwo() {
  two.complete();
}

// enables the drawing of individual steps

function drawStep(stepNumber: number) {
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

drawStep(1);
drawStep(2);
drawStep(3);
