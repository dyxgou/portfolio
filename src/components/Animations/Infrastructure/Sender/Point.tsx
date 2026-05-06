import type { FunctionalComponent } from "preact";

export type PointKinds = "browser" | "redis" | "database";

type PointProps = {
  source: PointKinds;
  destination: PointKinds;
  isPlaying: boolean;
  index: number;
};

const Point: FunctionalComponent<PointProps> = ({
  source,
  destination,
  isPlaying,
  index,
}) => {
  return (
    <div
      aria-hidden
      data-point-source={source}
      data-point-destination={destination}
      data-point-is-playing={isPlaying}
      style={{ "--point-index": index }}
      className="absolute w-full point-animation"
    >
      <div
        data-point-source={source}
        data-point-destination={destination}
        data-point-is-playing={isPlaying}
        className="point-color absolute top-1/2 -translate-y-1/2 -left-11 size-6 rounded-full"
      ></div>
    </div>
  );
};

export default Point;
