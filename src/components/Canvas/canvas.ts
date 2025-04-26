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
  minCells: number;

  constructor({ ctx, width, height, cellSize, sep, minCells }: CanvasParams) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.cellsSize = cellSize;
    this.minCells = minCells;
    this.sep = sep;
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

  getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  isActiveCell(): boolean {
    const random = this.getRandomInteger(0, this.getRows());

    return random <= this.minCells;
  }

  drawSquares() {
    const cellsRows = this.getRows();
    const cellsCols = this.getCols();

    for (let j = 0; j < cellsCols; j++) {
      for (let i = 0; i < cellsRows; i++) {
        if (this.isActiveCell()) {
          this.setColor("#fe9178");
        } else {
          this.setColor("#f8f8f8");
        }

        this.ctx.fillRect(
          (this.cellsSize + this.sep) * i,
          (this.cellsSize + this.sep) * j,
          this.cellsSize,
          this.cellsSize,
        );
      }
    }
  }
}

export default Canvas;
