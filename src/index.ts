import { onWindowResize } from './onWindowResize';
import * as progress from './progress';

window['progressBar'] = progress;

window.addEventListener(
  'resize',
  function (event) {
    onWindowResize();
  },
  true
);
