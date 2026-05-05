import { type FunctionalComponent } from "preact";
import type { Token } from "../utils/tokens";
import Char from "./Char";

type TokenProps = {
  token: Token;
  hasSpace: boolean;
  readPos: number;
  commandLength: number;
};

const TokenLiteral: FunctionalComponent<TokenProps> = ({
  token,
  hasSpace,
  readPos,
  commandLength,
}) => {
  const literal = token.getLiteral() + (hasSpace ? " " : "");

  return (
    <>
      {literal.split("").map((char, i) => (
        <Char
          commandLength={commandLength}
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
