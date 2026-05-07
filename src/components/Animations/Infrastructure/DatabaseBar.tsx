import type { FunctionalComponent } from "preact";

type DatabaseBarProps = {
  isPlaying: boolean;
  isWithRedis: boolean;
};

const DatabaseBar: FunctionalComponent<DatabaseBarProps> = ({
  isPlaying,
  isWithRedis,
}) => {
  return (
    <div className="w-full px-3 pt-1 pb-5 sm:px-12 sm:py-5 grid place-items-end">
      <div className="w-16 sm:w-26 h-2 rounded-lg bg-slate-300">
        <div
          data-bar-is-playing={isPlaying}
          data-bar-is-with-redis={isWithRedis}
          className="database-progress"
        ></div>
      </div>
    </div>
  );
};

export default DatabaseBar;
