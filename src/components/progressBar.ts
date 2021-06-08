import settings from '../settings';
import paper from './paper';
import { createStep } from './progressBarStep';
import { Element } from 'snapsvg';

export const steps = [createStep(1), createStep(2), createStep(3)];
let [one, two, three] = steps;

export function draw() {
  // only need connecting lines between one and two
  // the path/line should go first
  // everything that appears after will be drawn on top of line
  one.drawLine();
  two.drawLine();

  let cursorX = settings.beginAt;

  let g1 = addStepToProgressBar(cursorX, one.stepSVG);
  let g2 = addStepToProgressBar(cursorX, two.stepSVG);
  let g3 = addStepToProgressBar(cursorX, three.stepSVG);

  function addStepToProgressBar(x: number, group: Element) {
    group.attr({
      class: 'progress-bar-step',
      transform: 'translate(' + [x, 0].join(',') + ')',
    });

    cursorX = cursorX + settings.distanceBetweenCircles;
    return group;
  }

  let g = paper.group(g1, g2, g3);
  g.attr({ class: 'progress-bar' });
  paper.append(g);
}
