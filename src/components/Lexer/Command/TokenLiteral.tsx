import { type FunctionalComponent } from "preact";
import type { Token } from "../utils/tokens";
import Char from "./Char";

type TokenProps = {
  token: Token;
  hasSpace: boolean;
  readPos: number;
};

const TokenLiteral: FunctionalComponent<TokenProps> = ({
  token,
  hasSpace,
  readPos,
}) => {
  const literal = token.getLiteral() + (hasSpace ? " " : "");

  return (
    <>
      {literal.split("").map((char, i) => (
        <Char
          kind={token.getKind()}
          character={char}
          readPos={readPos}
          tokenEnd={token.getEnd()}
          index={i + token.getStart()}
        />
      ))}
    </>
  );
};

export default TokenLiteral;
