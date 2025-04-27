import { useState, useEffect } from "preact/hooks";

interface MeteorsProps {
  amout: number;
  minDelay: number;
  maxDelay: number;
  minDuration: number;
  maxDuration: number;
  angle: number;
}

type CSSProperties = {
  "--angle": string;
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
};

const Meteors = ({
  amout,
  minDelay,
  maxDelay,
  minDuration,
  maxDuration,
  angle,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(amout)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
    }));
    setMeteorStyles(styles);
  }, [amout, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          style={{ ...style }}
          className="pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]"
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
