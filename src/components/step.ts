import paper from './paper';
import settings from '../settings';
import { Element } from 'snapsvg';
import { addElementToDefs } from '../functions/addImagePatternToDefs';

export function createStep(number: number) {
  let g = paper.g();

  let circle = createCircle();
  let text = createText(number);

  g.add(circle);
  g.add(text);

  addElementToDefs(`step-${number}`, g);

  let line = createLine(circle);
  line.remove(); // remove until we re-add it

  return {
    stepSVG: g,
    complete: function () {
      circle.attr({
        stroke: settings.completeColor,
        fill: 'url(#check-mark)',
      });

      line.attr({
        stroke: settings.completeColor,
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
  let { cx, cy } = circle.getBBox();
  let lengthOfLine = settings.distanceBetweenCircles - settings.diameter;

  let moveToCenterOfCircle = 'M ' + [cx, cy].join(',');
  let moveCursorToRightEdge = 'm ' + [settings.radius, 0].join(','); // relative cursor move
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
