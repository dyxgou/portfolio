import type { FunctionalComponent } from "preact";
import RestartIcon from "../Icons/Restart";
import PlayIcon from "../Icons/Play";
import PauseIcon from "../Icons/Pause";
import type { Dispatch, StateUpdater } from "preact/hooks";

type HeaderProps = {
  redisState: {
    isWithRedis: boolean;
    setIsWithRedis: Dispatch<StateUpdater<boolean>>;
  };
  isPlayingState: {
    isPlaying: boolean;
    setIsPlaying: Dispatch<StateUpdater<boolean>>;
  };
};

const Header: FunctionalComponent<HeaderProps> = ({
  redisState,
  isPlayingState,
}) => {
  return (
    <header className="flex items-center bg-slate-100 border-b border-gray-300 justify-between px-4 py-3">
      <span className="text-xs sm:text-base text-gray-700 code">
        Infrastructure Visualization
      </span>

      <div className="flex gap-1 sm:gap-5 text-xs font-bold lexer-buttons infrastructure-state-buttons">
        <button
          onClick={() => redisState.setIsWithRedis(true)}
          data-is-with-redis={redisState.isWithRedis}
        >
          With Redis
        </button>
        <button
          onClick={() => redisState.setIsWithRedis(false)}
          data-is-with-redis={!redisState.isWithRedis}
        >
          Without Redis
        </button>
      </div>

      <div className="flex items-center gap-2 lexer-buttons">
        <button
          onClick={() =>
            isPlayingState.setIsPlaying((isPlayingState) => !isPlayingState)
          }
        >
          {isPlayingState.isPlaying ? <PlayIcon /> : <PauseIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
