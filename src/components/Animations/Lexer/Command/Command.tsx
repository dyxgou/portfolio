import type { FunctionalComponent } from "preact";
import type { Token } from "../utils/tokens";
import TokenLiteral from "./TokenLiteral";
import type { CommandKind } from "../Lexer";

type CommandProps = {
  tokens: Token[];
  readPos: number;
  commandLength: number;
  commandKind: CommandKind;
};

const Command: FunctionalComponent<CommandProps> = ({
  tokens,
  readPos,
  commandLength,
  commandKind,
}) => {
  return (
    <div
      data-command-kind={commandKind}
      className="position-anchor-name command-anchor flex code justify-center"
    >
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
