import Canvas from "./canvas";

const IS_GRAY_ATTR = "data-gray" as const;
const SCREEN_HEIGTH = 170;
const MOBILE_HEIGHT = 120;

const setCanvas = (canvas: HTMLCanvasElement) => {
  const container = canvas.parentElement!;

  const resizeCanvas = (width: number, height: number) => {
    canvas.width = width;
    canvas.height = height;
  };

  let width = container.clientWidth;
  let height = SCREEN_HEIGTH;
  resizeCanvas(width, height);

  const ctx = canvas.getContext("2d")!;
  const cellSize = 7;
  const sep = 4;
  const minCells = 20;
  const effect = new Canvas({
    ctx,
    cellSize,
    width,
    height,
    sep,
    minCells,
  });

  if (canvas.getAttribute(IS_GRAY_ATTR) === "true") {
    effect.setSquareColor("#e2e2e2");
  }

  window.addEventListener("resize", () => {
    width = container.clientWidth;

    if (width < 800) {
      height = MOBILE_HEIGHT;
    }

    resizeCanvas(width, height);
    effect.setSize(width, height);
    effect.drawSquares();
  });

  effect.drawSquares();
  setInterval(() => {
    effect.drawSquares();
  }, 400);
};

export default setCanvas;
