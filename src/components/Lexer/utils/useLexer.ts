import { useLayoutEffect, useMemo, useState } from "preact/hooks";
import CommandLexer from "./lexer";
import Tokens, { Token } from "./tokens";

const getTokens = (lexer: CommandLexer): Token[] => {
  let curTok = lexer.nextToken();
  const tokens = new Array<Token>();

  while (curTok.getKind() != Tokens.EOF) {
    tokens.push(curTok);
    curTok = lexer.nextToken();
  }

  return tokens;
};

const useLexer = (command: string) => {
  const lexer = useMemo(() => new CommandLexer(command), []);
  const tokens = useMemo(() => getTokens(lexer), []);

  const [pos, setPos] = useState<number>(0);
  const [readPos, setReadPos] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const step = () => {
    setReadPos((curReadPos) => {
      setPos(curReadPos);
      return curReadPos + 1;
    });
  };

  const restart = () => {
    setPos(0);
    setReadPos(0);
  };

  useLayoutEffect(() => {
    if (!isPlaying) return;

    let allowedSteps = command.length - readPos - 1;

    const stepInverval = setInterval(() => {
      if (allowedSteps <= 0) {
        return clearInterval(stepInverval);
      }

      step();
      allowedSteps--;
    }, 500);

    return () => clearInterval(stepInverval);
  }, [isPlaying]);

  return {
    pos,
    readPos,
    step,
    tokens,
    restart,
    setIsPlaying,
    isPlaying,
  };
};

export default useLexer;
