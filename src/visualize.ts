import settings from './settings';
import snap from './components/snap';
import { createItem } from './components/item';
import { Element } from 'snapsvg';
//import { addImagePatternToDefs } from './functions/addImagePatternToDefs';
//import checkMark from 'url:./../check-mark.svg';
//addImagePatternToDefs('check-mark', checkMark);

export const steps = [createItem(1), createItem(2), createItem(3)];
let [one, two, three] = steps;

// only need connecting lines between one and two
// the path/line should go first
// everything that appears after will be drawn on top of line
one.drawLine();
two.drawLine();

let cursorX = settings.beginAt;

addItemToFlow(cursorX, one.stepSVG);
addItemToFlow(cursorX, two.stepSVG);
addItemToFlow(cursorX, three.stepSVG);

function addItemToFlow(x: number, group: Element) {
  group.attr({ transform: 'translate(' + [x, 0].join(',') + ')' });
  snap.append(group);
  cursorX = cursorX + settings.distanceBetweenCircles;
}

export function completeStepOne() {
  one.complete();
}

export function completeStepTwo() {
  two.complete();
}
