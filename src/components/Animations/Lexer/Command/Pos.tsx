import type { FunctionalComponent } from "preact";
import UpArrow from "../../Icons/UpArrow";
import type { CommandKind } from "../Lexer";

export type PositionProps = {
  currentPos: number;
  commandKind: CommandKind;
};

const Pos: FunctionalComponent<PositionProps> = ({
  currentPos,
  commandKind,
}) => {
  return (
    <div
      style={`--anchor-offset: ${currentPos};`}
      data-command-kind={commandKind}
      className="position-anchor-name position transition-transform w-fit code text-[10px] sm:text-xs text-blue-500 flex flex-col items-center"
    >
      <UpArrow />
      <span>Pos</span>
    </div>
  );
};

export default Pos;
