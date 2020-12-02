import Pos from './pos';
import Token from './token';
import { TokenRule } from './languages';

export function tokenize(text: string, tokens: { [key: string]: TokenRule }): Token[] {
  const lex = new Lexer(text, tokens);
  return lex.create_tokens();
}

export class Lexer {
  constructor(text: string, tokens: { [key: string]: TokenRule }) {
    this.pos = new Pos(text);
    this.text = text;
    this.selection = text;
    this.tokens = tokens;
  }

  advance(n: number) {
    this.pos.advance(n);
    this.selection = this.pos.idx < this.text.length
      ? this.text.slice(this.pos.idx)
      : null;
  }

  create_tokens() {
    const tokens: Token[] = [];

    while (this.selection) {
      let token: Token | undefined = undefined;
      for (let name in this.tokens) {
        const res = typeof this.tokens[name].match === 'string'
          ? { 0: (this.tokens[name].match as string), index: this.selection.startsWith(this.tokens[name].match as string) ? 0 : null }
          : (this.tokens[name].match as RegExp).exec(this.selection);
        if (res && (res.index === 0)) {
          const pos_start = this.pos.clone();
          this.advance(res[0].length);
          const pos_end = this.pos.clone();
          token = new Token(name, res[0], pos_start, pos_end);
          break;
        }
      }
      if (!token) {
        const pos_start = this.pos.clone();
        const text = this.selection[0];
        this.advance(1);
        const pos_end = this.pos.clone();
        token = new Token('raw', text, pos_start, pos_end);
      }
      tokens.push(token);
    }

    return tokens;
  }

  pos: Pos;
  text: string;
  selection: string | null;
  tokens: { [key: string]: TokenRule };
}