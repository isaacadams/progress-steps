import { onWindowResize } from './onWindowResize';
import * as api from './api';

window['progressBar'] = api;

window.addEventListener(
  'resize',
  function (event) {
    onWindowResize();
  },
  true
);
