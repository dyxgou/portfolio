import type { FunctionalComponent } from "preact";
import Point from "./Point";
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
  pointsAmount: number;
};

const Sender: FunctionalComponent<SenderProps> = ({
  isWithRedis,
  setIsPlaying,
  isPlaying,
  isSecond = false,
  pointsAmount,
}) => {
  const { source, destination } = getSenderPath(isWithRedis, isSecond);
  const points = Array.from({ length: pointsAmount });

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
      {points.map((_, i) => (
        <Point
          index={i}
          key={animationId + i}
          isPlaying={isPlaying}
          source={source}
          destination={destination}
        />
      ))}
    </div>
  );
};

export default Sender;
