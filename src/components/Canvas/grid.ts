const BIT_LENGHT_32 = 32;

class Grid {
  #cells: Uint32Array;
  #rows: number;
  #cols: number;
  #len: number;
  minCells: number;

  constructor(rows: number, cols: number, minCells: number) {
    this.#rows = rows;
    this.#cols = cols;
    this.minCells = minCells;
    const lenght = Math.ceil((this.#rows * this.#cols) / BIT_LENGHT_32);
    this.#len = lenght;
    console.log({ lenght });

    this.#cells = new Uint32Array(lenght).fill(0);
  }

  getIndex(x: number, y: number) {
    return y * this.#rows + x;
  }

  debug() {
    console.log({ cells: this.#cells });
    console.log({ rows: this.#rows, cols: this.#cols });

    this.#setValueToOne(this.getIndex(10, 0));
    this.#setValueToOne(this.getIndex(11, 0));
    this.#setValueToOne(this.getIndex(12, 0));
    this.#setValueToOne(this.getIndex(13, 0));
    this.#setValueToOne(this.getIndex(15, 0));
    this.#setValueToOne(this.getIndex(63, 0));
    console.log({ first: this.#cells[0] });
  }

  getValue(index: number): boolean {
    const idx = Math.floor(index / BIT_LENGHT_32);
    const pos = index - BIT_LENGHT_32 * idx;

    const value = this.#cells[idx];
    const curVal = (value >> pos) & 1;
    return curVal === 1;
  }

  #setValueToOne(index: number) {
    const idx = Math.floor(index / BIT_LENGHT_32);
    const pos = index - BIT_LENGHT_32 * idx;

    this.#cells[idx] ^= 1 << pos;
  }

  #getRandomNumber(): number {
    return Math.floor(Math.random() * this.#rows);
  }

  #isActiveCell(): boolean {
    const random = this.#getRandomNumber();

    return random <= this.minCells;
  }

  generateInitialState() {
    for (let y = 0; y < this.#cols; y++) {
      for (let x = 0; x < this.#rows; x++) {
        if (this.#isActiveCell()) {
          this.#setValueToOne(this.getIndex(x, y));
        }
      }
    }
  }
}

export default Grid;
