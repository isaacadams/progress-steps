import { addCheckMarkToDefinitions } from './components/check-mark';
import { draw as drawProgressBar, steps } from './components/progressBar';
import { draw as drawSteps } from './components/step';

let [one, two, three] = steps;

interface IOptions {
  completeColor?: string;
}

export function draw({ completeColor }: IOptions = {}) {
  if (completeColor) window['progressBar']['completeColor'] = completeColor;

  addCheckMarkToDefinitions();
  drawProgressBar();
  drawSteps();
}

export function completeStepOne() {
  one.complete();
}

export function completeStepTwo() {
  two.complete();
}
