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
  
    const checkConsecutive = (indices) => {
      let count = 0, current = [];
      for (const i of indices) {
        if (fields[i] === value) {
          count++; current.push(i);
        } else if (count >= 3) { highlightedIndices.push(...current); count = 0; current = []; }
      }
      if (count >= 3) highlightedIndices.push(...current);
    };
  
    for (let i = 0; i < size; i++) {
      checkConsecutive(Array.from({ length: size }, (_, j) => i * size + j)); // row
      checkConsecutive(Array.from({ length: size }, (_, j) => j * size + i)); // col
    }
  
    for (let r = 0; r < size - 2; r++) {
      for (let c = 0; c < size - 2; c++) {
        checkConsecutive([r * size + c, (r + 1) * size + c + 1, (r + 2) * size + c + 2]); // diagonal
        checkConsecutive([r * size + c + 2, (r + 1) * size + c + 1, (r + 2) * size + c]); // anti diagonal
      }
    }
  
    for (let r = size - 1; r > 1; r--) {
      for (let c = 0; c < size - 2; c++) {
        checkConsecutive([r * size + c, (r - 1) * size + c + 1, (r - 2) * size + c + 2]); // reverse diagonal
        checkConsecutive([r * size + c + 2, (r - 1) * size + c + 1, (r - 2) * size + c]); // reverse anti diagonal
      }
    }
  
    return highlightedIndices;
  }
  
}
