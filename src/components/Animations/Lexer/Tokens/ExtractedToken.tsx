import type { FunctionalComponent } from "preact";
import { tokenKindsToString, type Token } from "../utils/tokens";

type ExtractedTokensProps = {
  token: Token;
  index: number;
};

const ExtractedToken: FunctionalComponent<ExtractedTokensProps> = ({
  token,
  index,
}) => {
  return (
    <article
      key={index}
      data-token-kind={tokenKindsToString.get(token.getKind())}
      className="transition-transform char-ping-once px-3 py-2 extracted-token rounded-md border code text-sm animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <span className={`font-bold block`}>{token.getLiteral()}</span>
      <span className="text-[10px] text-slate-500 mt-1">
        {tokenKindsToString.get(token.getKind())}
      </span>
    </article>
  );
};

export default ExtractedToken;
