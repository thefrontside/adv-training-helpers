import CardParser from './utils/card-parser';
import CardInputParser from './mixins/card-input-parser';

export function isDigit(event) {
  return String.fromCharCode(event.charCode).match(/\d/);
}

export { CardParser, CardInputParser };
