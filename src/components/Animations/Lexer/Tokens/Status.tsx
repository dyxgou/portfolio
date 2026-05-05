import type { FunctionalComponent } from "preact";
import type { State } from "./useExtractedTokens";

export type StatusProps = {
  pos: number;
  readPos: number;
  state: State;
  isDone: boolean;
};

const Status: FunctionalComponent<StatusProps> = ({
  isDone,
  pos,
  readPos,
  state,
}) => {
  return (
    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-slate-300">
      <span className="mt-2">
        Positions:{" "}
        <span className="text-base font-bold font-mono text-blue-300">
          {pos}
        </span>
        →{" "}
        <span className="text-base font-bold font-mono text-slate-400">
          {readPos}
        </span>
      </span>
      <div className="flex items-center gap-2">
        <div className="size-2 rounded-full bg-slate-600 animate-pulse"></div>
        <span>{isDone ? "Done" : state}</span>
      </div>
    </div>
  );
};

export default Status;
