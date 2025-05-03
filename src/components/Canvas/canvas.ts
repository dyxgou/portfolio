import Grid from "./grid";

export type Color = `#${string}`;

type CanvasParams = {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  cellSize: number;
  sep: number;
  minCells: number;
};

class Canvas {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  cellsSize: number;
  sep: number;
  grid: Grid;
  gridColor: Color = "#f8f8f8";
  squareColor: Color = "#fe9178";

  constructor({ ctx, width, height, cellSize, sep, minCells }: CanvasParams) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.cellsSize = cellSize;
    this.sep = sep;

    this.grid = new Grid(this.getRows(), this.getCols(), minCells);
  }

  setSquareColor(color: Color) {
    this.squareColor = color;
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setColor(color: Color) {
    this.ctx.fillStyle = color;
  }

  getRows(): number {
    return Math.ceil(this.width / (this.cellsSize + this.sep));
  }

  getCols(): number {
    return Math.ceil(this.height / (this.cellsSize + this.sep));
  }

  drawSquares() {
    this.grid.generateInitialState();

    const cols = this.getCols();
    const rows = this.getRows();

    for (let y = 0; y < cols; y++) {
      for (let x = 0; x < rows; x++) {
        const index = this.grid.getIndex(x, y);

        if (this.grid.getValue(index)) {
          this.setColor(this.squareColor);
        } else {
          this.setColor("#f8f8f8");
        }

        this.ctx.fillRect(
          (this.cellsSize + this.sep) * x,
          (this.cellsSize + this.sep) * y,
          this.cellsSize,
          this.cellsSize,
        );
      }
    }
  }
}

export default Canvas;
