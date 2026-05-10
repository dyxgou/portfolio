import type { FunctionalComponent } from "preact";
import ExtractedToken from "@/components/Animations/Lexer/Tokens/ExtractedToken";
import { useMemo } from "preact/hooks";
import CommandLexer from "@/components/Animations/Lexer/utils/lexer";
import { getTokens } from "@/components/Animations/Lexer/utils/useLexer";

type LexerTokensProps = {
  command: string;
};

const LexerTokens: FunctionalComponent<LexerTokensProps> = ({ command }) => {
  const tokens = useMemo(() => getTokens(new CommandLexer(command)), []);

  return (
    <section className="w-full min-h-20 my-10 flex flex-wrap gap-2 justify-center items-center">
      {tokens.map((token, index) => (
        <ExtractedToken token={token} index={index} />
      ))}
    </section>
  );
};

export default LexerTokens;
