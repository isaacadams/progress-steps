import Snap from 'snapsvg';
import { scaleDistance } from './settings';

export function onWindowResize() {
  let distance = scaleDistance();
  resizePaths(distance);

  let count = 0;
  Snap.selectAll('.progress-bar-step').forEach((e) => {
    if (count > 0) {
      e.attr({ transform: `matrix(1,0,0,1,${distance * count},0)` });
    }

    count++;
  });

  function resizePaths(distance: number) {
    Snap.selectAll('path').forEach((e) => {
      let [M, m, l] = e.attr('d').match(/([A-Za-z]\s\d+(.\d+)?\,\d+(.\d+)?)/g);
      e.attr({ d: [M, m, `l ${distance},0`].join(' ') });
    });
  }
}
