import type { FunctionalComponent } from "preact";
import DownArrow from "../Icons/DownArrow";
import type { PositionProps } from "./Pos";

const ReadPos: FunctionalComponent<PositionProps> = ({ currentPos }) => {
  return (
    <div
      style={`--anchor-offset: ${currentPos};`}
      className="read-position transition-transform w-fit relative flex flex-col items-center code text-[10px] sm:text-xs"
    >
      <span>ReadPos</span>
      <DownArrow />
    </div>
  );
};

export default ReadPos;
