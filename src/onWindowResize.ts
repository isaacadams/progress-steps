import Snap from 'snapsvg';
import { scaleDistance, diameter, id } from './settings';

export function onWindowResize() {
  let distance = scaleDistance();
  resizePaths(distance);
  moveStepGroups(distance);
}

function moveStepGroups(distance: number) {
  let count = 0;
  Snap.selectAll(`${id} > .progress-bar > .progress-bar-step`).forEach((e) => {
    if (count > 0) {
      e.attr({ transform: `matrix(1,0,0,1,${distance * count},0)` });
    }

    count++;
  });
}

function resizePaths(distance: number) {
  let lengthOfLine = distance - diameter;
  Snap.selectAll(`${id} > .progress-bar > .progress-bar-step > path`).forEach(
    (e) => {
      let [M, m, l] = e.attr('d').match(/([A-Za-z]\s\d+(.\d+)?\,\d+(.\d+)?)/g);
      e.attr({ d: [M, m, `l ${lengthOfLine},0`].join(' ') });
    }
  );
}
