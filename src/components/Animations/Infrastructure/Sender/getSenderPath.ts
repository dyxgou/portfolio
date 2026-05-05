import type { PointKinds } from "./Point";

const getSenderPath = (isWithRedis: boolean, isSecond: boolean) => {
  let source: PointKinds;
  let destination: PointKinds;

  if (!isWithRedis) {
    source = "browser";
    destination = "database";
  } else if (isWithRedis && !isSecond) {
    source = "browser";
    destination = "redis";
  } else {
    source = "redis";
    destination = "database";
  }

  return { source, destination };
};

export default getSenderPath;
