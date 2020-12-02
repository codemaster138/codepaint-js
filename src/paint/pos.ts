export default class Pos {
  constructor(text: string, idx?: number, col?: number, ln?: number) {
    this.text = text;
    this.idx = idx || 0;
    this.col = col || 0;
    this.ln = ln || 0;
    this.oldLn = ln || 0;
  }

  advance(n: number) {
    this.idx += n;
    this.col += n;
    this.oldLn = this.ln;
    this.ln = this.text.slice(0, this.idx).split('\n').length;
    if (this.oldLn !== this.ln) this.col = 0;
  }

  clone(): Pos {
    return new Pos(this.text, this.idx, this.col, this.ln);
  }

  text: string;
  idx: number;
  col: number;
  ln: number;
  oldLn: number;
}