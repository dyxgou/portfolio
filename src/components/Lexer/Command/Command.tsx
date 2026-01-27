import type { FunctionalComponent } from "preact";
import type { Token } from "../utils/tokens";
import TokenLiteral from "./TokenLiteral";

type CommandProps = {
  tokens: Token[];
  readPos: number;
};

const Command: FunctionalComponent<CommandProps> = ({ tokens, readPos }) => {
  return (
    <div className="command-anchor flex code justify-center">
      {tokens.map((token, index) => (
        <TokenLiteral
          token={token}
          hasSpace={index < tokens.length - 1}
          readPos={readPos}
        />
      ))}
    </div>
  );
};

export default Command;
