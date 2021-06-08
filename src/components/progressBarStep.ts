import paper from './paper';
import settings from '../settings';
import { Element } from 'snapsvg';
import { addElementToDefs } from '../functions/addImagePatternToDefs';

export function createStep(number: number) {
  let circle = createCircle();
  let text = createText(number);

  let g = paper.group(circle, text);

  addElementToDefs(`step-${number}`, g);

  let line = createLine(circle);

  // remove elements until they are added by user
  line.remove();
  g.remove();

  return {
    stepSVG: g,
    complete: function () {
      circle.attr({
        stroke: settings.completeColor(),
        fill: 'url(#check-mark)',
      });

      line.attr({
        stroke: settings.completeColor(),
      });

      text.remove();
    },
    drawLine: function () {
      g.prepend(line);
    },
  };
}

function createCircle() {
  let { x, y, radius } = settings;
  let circle = paper.circle(x, y, radius);
  circle.attr({
    stroke: 'black',
    strokeWidth: '3',
    fill: 'none',
  });
  return circle;
}

function createText(number: number) {
  let text = paper.text(settings.x, settings.y + 2, number);
  text.attr({
    textAnchor: 'middle',
    dominantBaseline: 'middle',
    stroke: 'black',
    strokeWidth: '1px',
  });
  return text;
}

function createLine(circle: Element) {
  let { cx, cy, r2 } = circle.getBBox();
  let lengthOfLine = settings.distanceBetweenCircles - settings.diameter;

  let moveToCenterOfCircle = 'M ' + [cx, cy].join(',');
  let moveCursorToRightEdge = 'm ' + [r2, 0].join(','); // relative cursor move
  let drawLineFromRightEdgeToLeftEdge = 'l ' + [lengthOfLine, 0].join(','); // relative line draw

  let path = paper.path(
    [
      moveToCenterOfCircle,
      moveCursorToRightEdge,
      drawLineFromRightEdgeToLeftEdge,
    ].join(' ')
  );

  path.attr({
    stroke: 'black',
    strokeWidth: '3',
  });

  return path;
}
