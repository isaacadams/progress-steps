import { addImagePatternToDefs } from '../functions/addImagePatternToDefs';
import checkMark from 'url:./../../check-mark.svg';

export function addCheckMarkToDefinitions() {
  addImagePatternToDefs('check-mark', checkMark);
}
