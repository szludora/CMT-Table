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
    let count = 0;

    for (let i = 0; i < size; i++) {
      let consecutiveCount = 0;
      for (let j = 0; j < size; j++) {
        if (fields[i * size + j] === value) {
          consecutiveCount++;
        }
      }
      if (consecutiveCount >= 3) {
        count++;
      }
    }

    for (let i = 0; i < size; i++) {
      let consecutiveCount = 0;
      for (let j = 0; j < size; j++) {
        if (fields[j * size + i] === value) {
          consecutiveCount++;
        }
      }
      if (consecutiveCount >= 3) {
        count++;
      }
    }

    let consecutiveCountMainDiagonal = 0;
    for (let i = 0; i < size; i++) {
      if (fields[i * (size + 1)] === value) {
        consecutiveCountMainDiagonal++;
      }
    }
    if (consecutiveCountMainDiagonal >= 3) {
      count++;
    }

    let consecutiveCountAntiDiagonal = 0;
    for (let i = 0; i < size; i++) {
      if (fields[i * (size - 1) + (size - 1)] === value) {
        consecutiveCountAntiDiagonal++;
      }
    }
    if (consecutiveCountAntiDiagonal >= 3) {
      count++;
    }

    return count;
  }
}
