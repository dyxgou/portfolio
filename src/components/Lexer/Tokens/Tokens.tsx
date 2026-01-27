import type { FunctionalComponent } from "preact";
import Header from "./Header";
import Status from "./Status";
import type { Token } from "../utils/tokens";
import ExtractedToken from "./ExtractedToken";
import useExtractedTokens from "./useExtractedTokens";

type TokensProps = {
  tokens: Token[];
  pos: number;
  readPos: number;
};

const Tokens: FunctionalComponent<TokensProps> = ({ tokens, pos, readPos }) => {
  const { extractedTokens, state } = useExtractedTokens(tokens, pos);

  return (
    <footer className="px-6 pb-2">
      <Header />
      <section className="min-h-[80px] mt-2 flex flex-wrap gap-2 items-start">
        {tokens.length === 0 ? (
          <span className="text-sm text-slate-400 italic">
            No tokens extracted yet...
          </span>
        ) : (
          extractedTokens.map((token, index) => (
            <ExtractedToken token={token} index={index} />
          ))
        )}
      </section>

      <Status
        isDone={tokens.length === extractedTokens.length}
        readPos={readPos}
        state={state}
        pos={pos}
      />
    </footer>
  );
};

export default Tokens;
