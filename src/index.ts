import { onWindowResize } from './onWindowResize';
import * as api from './api';
import settings from './settings';

window['progressBar'] = {
  settings,
  ...api,
};

window.addEventListener(
  'resize',
  function (event) {
    onWindowResize();
  },
  true
);
