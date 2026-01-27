import type { FunctionalComponent } from "preact";
import Header from "./Header";
import Command from "./Command/Command";
import ReadPos from "./Command/ReadPos";
import Pos from "./Command/Pos";
import Tokens from "./Tokens/Tokens";
import useLexer from "./utils/useLexer";

const COMMAND = "SET username Alejandro";

const Lexer: FunctionalComponent = () => {
  const { pos, readPos, step, tokens, restart, setIsPlaying, isPlaying } =
    useLexer(COMMAND);

  const allowedSteps = COMMAND.length - readPos - 1;

  return (
    <div
      id="lexer-animation"
      className="w-full rounded-lg border-1 border-gray-300 bg-white overflow-hidden"
    >
      <Header
        restart={restart}
        setIsPlaying={setIsPlaying}
        step={() => {
          if (allowedSteps > 0) step();
        }}
        isPlaying={isPlaying}
      />

      <div className="py-12">
        <ReadPos currentPos={readPos} />
        <Command
          commandLength={COMMAND.length}
          tokens={tokens}
          readPos={readPos}
        />
        <Pos currentPos={pos} />
      </div>

      <Tokens tokens={tokens} pos={pos} readPos={readPos} />
    </div>
  );
};

export default Lexer;
