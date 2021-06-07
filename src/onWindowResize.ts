import Snap from 'snapsvg';
import { id } from './settings';
import { scaleSvg } from './setup/scaling';

export function onWindowResize() {
  let { distance, lengthOfLines, maxLength } = scaleSvg();
  resizePaths(lengthOfLines);
  moveStepGroups(distance);
  resizeSvgWidth(maxLength);
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

function resizePaths(lengthOfLine: number) {
  Snap.selectAll(`${id} > .progress-bar > .progress-bar-step > path`).forEach(
    (e) => {
      let [M, m, l] = e.attr('d').match(/([A-Za-z]\s\d+(.\d+)?\,\d+(.\d+)?)/g);
      e.attr({ d: [M, m, `l ${lengthOfLine},0`].join(' ') });
    }
  );
}

function resizeSvgWidth(maxLength: number) {
  let svg = Snap.select(id);
  svg.attr({ width: maxLength });
}
