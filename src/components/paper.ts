import Snap from 'snapsvg';
import settings from '../settings';

const paper = Snap(settings.id);
paper.attr({
  x: 0,
  y: 0,
  width: settings.width,
  height: settings.height,
});

export default paper;
