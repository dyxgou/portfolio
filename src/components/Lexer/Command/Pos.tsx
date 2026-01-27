import type { FunctionalComponent } from "preact";
import UpArrow from "../Icons/UpArrow";

export type PositionProps = {
  currentPos: number;
};

const Pos: FunctionalComponent<PositionProps> = ({ currentPos }) => {
  return (
    <div
      style={`--anchor-offset: ${currentPos};`}
      className="position transition-transform w-fit code text-[10px] sm:text-xs text-blue-500 flex flex-col items-center"
    >
      <UpArrow />
      <span>Pos</span>
    </div>
  );
};

export default Pos;
