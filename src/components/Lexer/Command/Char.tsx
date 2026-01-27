import type { FunctionalComponent } from "preact";
import type Tokens from "../utils/tokens";
import { tokenKindsToString } from "../utils/tokens";

type CharProps = {
  character: string;
  index: number;
  readPos: number;
  tokenEnd: number;
  kind: Tokens;
  commandLength: number;
};

const WHITE_SPACE = "\u00A0";

const Char: FunctionalComponent<CharProps> = ({
  character,
  index,
  readPos,
  tokenEnd,
  kind,
  commandLength,
}: CharProps) => {
  const isTokenLexed = tokenEnd < readPos || commandLength - 1 === readPos;
  const isTokenCharSelected = !isTokenLexed && index <= readPos;

  return (
    <span
      key={index}
      data-token-kind={tokenKindsToString.get(kind)}
      className={`sm:px-1 text-xl transition-colors sm:text-2xl first:pl-0 last:pr-0 ${isTokenCharSelected && "command-char-in-range char-ping-once"} ${isTokenLexed && "lexed-char"}`}
    >
      {character === " " ? WHITE_SPACE : character}
    </span>
  );
};

export default Char;
