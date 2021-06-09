import { addElementAsPatternToDefs } from '../functions/addImagePatternToDefs';
import settings from '../settings';
import paper from './paper';

export function addCheckMarkToDefinitions() {
  createCheckMark('check-mark', settings.completeColor());
}

function createCheckMark(id, completeColor) {
  //'#e4db36'
  let svg = paper
    .svg(0, 0, 10, 10, 110, 110, 20, 20)
    .attr({
      id: 'check-mark-svg',
      preserveAspectRatio: 'xMidYMid meet',
    })
    .append(
      paper.group(
        paper.group(
          paper.group(
            paper.use('#e1o0uKc2vm').attr({
              opacity: 1,
              fillOpacity: 0,
              fill: '#ffffff',
            }),
            paper.group(
              paper.use('#e1o0uKc2vm').attr({
                opacity: 1,
                fillOpacity: 0,
                stroke: completeColor,
                strokeWidth: 1,
                strokeOpacity: 1,
              })
            )
          ),
          paper.group(
            paper.use('#g3GjuLG6zG').attr({
              opacity: 1,
              'fill-opacity': 1,
              fill: completeColor,
            })
          )
        )
      )
    );

  svg
    .path(
      'M130 120C130 125.52 125.52 130 120 130C114.48 130 110 125.52 110 120C110 114.48 114.48 110 120 110C125.52 110 130 114.48 130 120Z'
    )
    .attr({ id: 'e1o0uKc2vm' })
    .toDefs();

  svg
    .path(
      'M120.37 123.64L120.37 123.64L117.96 126.5L113.5 121.2L115.91 118.34L117.96 120.78L124.09 113.5L126.5 116.36L120.37 123.64Z'
    )
    .attr({ id: 'g3GjuLG6zG' })
    .toDefs();

  svg.toDefs();

  addElementAsPatternToDefs(id, paper.use('check-mark-svg'));
}
