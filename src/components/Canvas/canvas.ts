import Grid from "./grid";

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

  constructor({ ctx, width, height, cellSize, sep, minCells }: CanvasParams) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.cellsSize = cellSize;
    this.sep = sep;

    this.grid = new Grid(this.getRows(), this.getCols(), minCells);
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setColor(color: `#${string}`) {
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
          this.setColor("#fe9178");
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
