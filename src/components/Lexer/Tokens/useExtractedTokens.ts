import { useMemo, useState } from "preact/hooks";
import type { Token } from "../utils/tokens";

const EXTRACTING_TOKEN_INDEX = 2;

export type State = "Scanning..." | "Extracting Token...";

const useExtractedTokens = (tokens: Token[], pos: number) => {
  const [state, setState] = useState<State>("Scanning...");

  const extractedTokens = useMemo(
    () =>
      tokens.filter((token) => {
        const end = token.getEnd() - EXTRACTING_TOKEN_INDEX;

        if (end > pos) return false;

        if (end === pos) {
          setState("Extracting Token...");
        } else {
          setState("Scanning...");
        }

        return true;
      }),
    [pos],
  );

  return { extractedTokens, state };
};

export default useExtractedTokens;
