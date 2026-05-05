enum Tokens {
  EOF,
  ILLEGAL,
  EMPTY,

  SET,
  IDENTIFIER,
}

export const tokenKindsToString = new Map<Tokens, string>();

tokenKindsToString.set(Tokens.SET, "SET");
tokenKindsToString.set(Tokens.IDENTIFIER, "IDENTIFIER");

export class Token {
  #kind: Tokens;
  #literal: string;

  #start: number;
  #end: number;

  constructor(kind: Tokens, literal: string) {
    this.#kind = kind;
    this.#literal = literal;

    this.#start = 0;
    this.#end = 0;
  }

  getKind(): Tokens {
    return this.#kind;
  }

  getLiteral(): string {
    return this.#literal;
  }

  setStart(start: number) {
    this.#start = start;
  }

  setEnd(end: number) {
    this.#end = end;
  }

  getStart() {
    return this.#start;
  }

  getEnd() {
    return this.#end;
  }
}

export default Tokens;
