import Snap from 'snapsvg';
import paper from '../components/paper';

export function addImagePatternToDefs(id: string, src: string) {
  let image = paper.image(src, 0, 0, 512, 512);
  let p = image.pattern('0', '0', '100%', '100%');
  p.attr({
    id,
    viewBox: '0 0 512 512',
    patternUnits: 'objectBoundingBox',
  });
  p.toDefs();
}

export function addElementAsPatternToDefs(id: string, el: Snap.Element) {
  el.attr({
    x: 0,
    y: 0,
    width: 512,
    height: 512,
  });
  let p = el.pattern('0', '0', '100%', '100%');
  p.attr({
    id,
    viewBox: '0 0 512 512',
    patternUnits: 'objectBoundingBox',
  });
  p.toDefs();
}

export function addElementToDefs(id: string, el: Snap.Element) {
  el.clone()
    .attr({
      id,
    })
    .toDefs();
}
