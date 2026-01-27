import type { FunctionalComponent } from "preact";
import type { Token } from "../utils/tokens";
import TokenLiteral from "./TokenLiteral";

type CommandProps = {
  tokens: Token[];
  readPos: number;
  commandLength: number;
};

const Command: FunctionalComponent<CommandProps> = ({
  tokens,
  readPos,
  commandLength,
}) => {
  return (
    <div className="command-anchor flex code justify-center">
      {tokens.map((token, index) => (
        <TokenLiteral
          commandLength={commandLength}
          readPos={readPos}
          token={token}
          hasSpace={index < tokens.length - 1}
        />
      ))}
    </div>
  );
};

export default Command;
