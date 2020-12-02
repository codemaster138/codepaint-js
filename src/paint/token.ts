import Pos from './pos';

export default class Token {
  constructor(type: string, value: string, pos_start: Pos, pos_end: Pos) {
    this.type = type;
    this.value = value;
    this.pos_start = pos_start;
    this.pos_end = pos_end;
  }

  type: string;
  value: string;
  pos_start: Pos;
  pos_end: Pos;
}