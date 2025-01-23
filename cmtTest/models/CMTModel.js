export default class CMTModel {
  #fields;

  constructor() {
    this.#fields = Array(25).fill(0);
  }

  getFields() {
    return [...this.#fields];
  }

  setStatus(id, value) {
    this.#fields[id] = value;
  }

  resetFields() {
    this.#fields = Array(25).fill(0);
  }

  countMatchingLines(fields, value) {
    const size = 5;
    let highlightedIndices = [];

    const checkConsecutive = (indices, fields, value) => {
      let consecutiveCount = 0;
      let currentIndices = [];
      for (const index of indices) {
        if (fields[index] === value) {
          consecutiveCount++;
          currentIndices.push(index);
        } else {
          if (consecutiveCount >= 3) {
            highlightedIndices.push(...currentIndices);
          }
          consecutiveCount = 0;
          currentIndices = [];
        }
      }
      if (consecutiveCount >= 3) {
        highlightedIndices.push(...currentIndices);
      }
    };

    // Check rows
    for (let i = 0; i < size; i++) {
      const rowIndices = Array.from({ length: size }, (_, j) => i * size + j);
      checkConsecutive(rowIndices, fields, value);
    }

    // Check columns
    for (let i = 0; i < size; i++) {
      const colIndices = Array.from({ length: size }, (_, j) => j * size + i);
      checkConsecutive(colIndices, fields, value);
    }

    // Check main diagonal
    const mainDiagonalIndices = Array.from(
      { length: size },
      (_, i) => i * (size + 1)
    );
    checkConsecutive(mainDiagonalIndices, fields, value);

    // Check all anti-diagonals
    for (let startRow = 0; startRow < size; startRow++) {
      let indices = [];
      for (
        let row = startRow, col = 0;
        row < size && col < size;
        row++, col++
      ) {
        indices.push(row * size + (size - 1 - col));
      }
      checkConsecutive(indices, fields, value);
    }
    for (let startCol = 1; startCol < size; startCol++) {
      let indices = [];
      for (
        let row = 0, col = startCol;
        row < size && col < size;
        row++, col++
      ) {
        indices.push(row * size + (size - 1 - col));
      }
      checkConsecutive(indices, fields, value);
    }

    return highlightedIndices;
  }
}
