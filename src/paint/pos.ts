export default class Pos {
  constructor(text: string, idx?: number, col?: number, ln?: number) {
    this.text = text;
    this.idx = idx || 0;
    this.col = col || 0;
    this.ln = ln || 0;
  }

  advance(n: number) {
    for (let i: number = 0; i < n; i++) {
      if (this.text[this.idx] === '\n') {
        this.col = 0;
        this.ln++;
      }
      this.idx++;
    }
  }

  clone(): Pos {
    return new Pos(this.text, this.idx, this.col, this.ln);
  }

  text: string;
  idx: number;
  col: number;
  ln: number;
}