import Tokens, { Token } from "./tokens";

const EOF_LITERAL = String.fromCharCode(Tokens.EOF);

const LOWER_A = "a".charCodeAt(0);
const LOWER_Z = "z".charCodeAt(0);

const UPPER_A = "A".charCodeAt(0);
const UPPER_Z = "Z".charCodeAt(0);

const isLetter = (char: string) => {
  const code = char.charCodeAt(0);

  return (
    (LOWER_A <= code && code <= LOWER_Z) || (UPPER_A <= code && code <= UPPER_Z)
  );
};

class CommandLexer {
  #input: string;
  #pos: number;
  #readPos: number;

  #ch: string;

  constructor(input: string) {
    this.#input = input.trim();
    this.#pos = 0;
    this.#readPos = 0;
    this.#ch = String.fromCharCode(Tokens.EMPTY);

    this.#next();
  }

  nextToken(): Token {
    if (this.#ch === EOF_LITERAL) {
      return new Token(Tokens.EOF, this.#ch);
    }

    this.#skipWhitespace();
    if (isLetter(this.#ch)) {
      const literal = this.#readIdent();
      const kind = this.#lookupIdent(literal);

      const token = new Token(kind, literal);
      const pos = this.#pos + this.#getReadOffset();

      token.setStart(Math.abs(pos - literal.length));
      token.setEnd(pos);

      return token;
    }

    return new Token(Tokens.ILLEGAL, "");
  }

  /** This function advances the `pos` and `readPos` indices and updates the ch */
  #next() {
    if (this.#readPos >= this.#input.length) {
      this.#ch = EOF_LITERAL;
      return;
    } else {
      this.#ch = this.#input[this.#readPos];
    }

    this.#pos = this.#readPos;
    this.#readPos++;
  }

  #lookupIdent(literal: string): Tokens {
    const SET_LITERAL = "SET";

    if (literal === SET_LITERAL) return Tokens.SET;

    return Tokens.IDENTIFIER;
  }

  #readIdent(): string {
    const pos = this.#pos;

    while (isLetter(this.#ch)) {
      this.#next();
    }

    const offset = this.#getReadOffset();

    return this.#input.slice(pos, this.#pos + offset);
  }

  /** This function returns an offset of `1`. Because if `readPos` reaches the end of the String, `pos` would not catch the full token. */
  #getReadOffset(): number {
    if (this.#pos === this.#input.length - 1) {
      return 1;
    }

    return 0;
  }

  #skipWhitespace() {
    while (this.#ch === " " || this.#ch === "\t" || this.#ch === "\n") {
      this.#next();
    }
  }

  getPos() {
    return this.#pos;
  }

  getReadPos() {
    return this.#readPos;
  }
}

export default CommandLexer;
