import type { FunctionalComponent } from "preact";
import Header from "./Header";
import Command from "./Command/Command";
import ReadPos from "./Command/ReadPos";
import Pos from "./Command/Pos";
import Tokens from "./Tokens/Tokens";
import useLexer from "./utils/useLexer";

export type CommandKind = "SET" | "INCRBY";

type LexerProps = {
  command: string;
  commandKind: "SET" | "INCRBY";
};

const Lexer: FunctionalComponent<LexerProps> = ({ command, commandKind }) => {
  const { pos, readPos, step, tokens, restart, setIsPlaying, isPlaying } =
    useLexer(command);

  const allowedSteps = command.length - readPos - 1;

  return (
    <div className="rounded-lg border border-gray-300 bg-white overflow-hidden">
      <Header
        restart={restart}
        setIsPlaying={setIsPlaying}
        step={() => {
          if (allowedSteps > 0) step();
        }}
        isPlaying={isPlaying}
      />

      <div className="py-12">
        <ReadPos commandKind={commandKind} currentPos={readPos} />
        <Command
          commandKind={commandKind}
          commandLength={command.length}
          tokens={tokens}
          readPos={readPos}
        />
        <Pos commandKind={commandKind} currentPos={pos} />
      </div>

      <Tokens tokens={tokens} pos={pos} readPos={readPos} />
    </div>
  );
};

export default Lexer;
