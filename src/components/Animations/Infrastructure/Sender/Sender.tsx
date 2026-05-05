import type { FunctionalComponent } from "preact";
import getSenderPath from "./getSenderPath";
import {
  useLayoutEffect,
  useState,
  type Dispatch,
  type StateUpdater,
} from "preact/hooks";

type SenderProps = {
  isWithRedis: boolean;
  isPlaying: boolean;
  setIsPlaying: Dispatch<StateUpdater<boolean>>;
  isSecond?: boolean;
};

const Sender: FunctionalComponent<SenderProps> = ({
  isWithRedis,
  setIsPlaying,
  isPlaying,
  isSecond = false,
}) => {
  const { source, destination } = getSenderPath(isWithRedis, isSecond);

  const [animationId, setAnimationId] = useState(0);

  useLayoutEffect(() => {
    setAnimationId(animationId + 1);
    setIsPlaying(false);
  }, [isWithRedis]);

  return (
    <div
      data-is-visible={isWithRedis}
      className="relative transition-[visibility,width] duration-200 w-full border border-gray-300"
    >
    </div>
  );
};

export default Sender;
