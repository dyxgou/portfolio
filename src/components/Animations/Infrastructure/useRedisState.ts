import { useState } from "preact/hooks";

const useRedisState = () => {
  const [isWithRedis, setIsWithRedis] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return { isWithRedis, setIsWithRedis, isPlaying, setIsPlaying };
};

export default useRedisState;
