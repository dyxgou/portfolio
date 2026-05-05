import type { FunctionalComponent } from "preact";
import Header from "./Header";
import Icon from "./Icon";
import RedisIcon from "../Icons/Redis";
import PostgresqlIcon from "../Icons/Postgresql";
import ChromeIcon from "../Icons/Chrome";
import Sender from "./Sender/Sender";
import useRedisState from "./useRedisState";

const Infrastructure: FunctionalComponent = () => {
  const { isWithRedis, setIsWithRedis, isPlaying, setIsPlaying } =
    useRedisState();

  return (
    <div className="rounded-lg border border-gray-300 bg-white overflow-hidden">
      <Header
        redisState={{ isWithRedis, setIsWithRedis }}
        isPlayingState={{ isPlaying, setIsPlaying }}
      />

      <div className="px-3 py-10 sm:p-12 flex justify-evenly items-center infra-sender">
        <Icon>
          <ChromeIcon />
        </Icon>

        <Sender
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          isWithRedis={isWithRedis}
        />

        <Icon isOnScreen={isWithRedis}>
          <RedisIcon />
        </Icon>

        <Sender
          isSecond
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          isWithRedis={isWithRedis}
        />

        <Icon>
          <PostgresqlIcon />
        </Icon>
      </div>
    </div>
  );
};
export default Infrastructure;
