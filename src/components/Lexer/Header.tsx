import type { FunctionalComponent } from "preact";
import RestartIcon from "./Icons/Restart";
import PlayIcon from "./Icons/Play";
import NextIcon from "./Icons/Next";
import PauseIcon from "./Icons/Pause";
import type { Dispatch, StateUpdater } from "preact/hooks";

type HeaderProps = {
  setIsPlaying: Dispatch<StateUpdater<boolean>>;
  isPlaying: boolean;
  restart: () => void;
  step: () => void;
};

const Header: FunctionalComponent<HeaderProps> = ({
  restart,
  setIsPlaying,
  step,
  isPlaying,
}) => {
  const handleStep = () => {
    if (isPlaying) setIsPlaying(false);
    step();
  };

  const handleRestart = () => {
    restart();
    setIsPlaying(false);
  };

  return (
    <header className="flex items-center bg-slate-100 border-b-1 border-gray-300 justify-between px-4 py-3">
      <span className="text-base text-gray-700 code">Lexer Visualization</span>
      <div className="flex items-center gap-2 lexer-buttons">
        <button onClick={handleRestart}>
          <RestartIcon />
        </button>
        <button onClick={handleStep}>
          <NextIcon />
        </button>
        <button
          onClick={() => setIsPlaying((isPlayingState) => !isPlayingState)}
        >
          {isPlaying ? <PlayIcon /> : <PauseIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
