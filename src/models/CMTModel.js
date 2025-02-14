export default class CMTModel {
  #fields;
  #m;
  #isProcessing;
  #isCompleted;

  constructor() {
    this.#fields = Array(25).fill(" ");

    // for testing success results

    /*
    this.#fields = [
      " ", "M", "M", "M", "M",
      "T", "C", "C", "M", "C",
      "M", "T", "T", "M", "T",
      "C", "C", "M", "C", "M",
      "T", "C", "M", "T", "C",
    ];

    */

    // for testing failed results

    /*
    this.#fields = [
      " ", "M", "C", "M", "M",
      "T", "C", "C", "T", "C",
      "M", "T", "T", "M", "T",
      "C", "C", "M", "C", "M",
      "T", "C", "M", "T", "C",
    ];
    */

    this.#m = 0;
    this.#isProcessing = false;
    this.#isCompleted = false;
    this.getHighlightedIndices = this.getHighlightedIndices.bind(this);
  }

  getM() {
    return this.#m;
  }

  getFields() {
    return [...this.#fields];
  }

  setStatus(id, value) {
    this.#fields[id] = value;
  }

  resetFields() {
    this.#fields = Array(25).fill(" ");
    this.#isCompleted = false;
  }

  isCompleted() {
    return this.#isCompleted;
  }

  getHighlightedIndices(fields, value) {
    if (this.#isProcessing) return [];

    this.#isProcessing = true;
    const size = 5;
    let highlightedIndices = [];
    let newSequencesCount = 0;

    const checkConsecutive = (indices) => {
      let count = 0,
        current = [];

      indices.forEach((i) => {
        if (fields[i] === value) {
          count++;
          current.push(i);
        } else {
          if (count >= 3) {
            newSequencesCount++;
            highlightedIndices.push(...current);
          }
          count = 0;
          current = [];
        }
      });

      if (count >= 3) {
        newSequencesCount++;
        highlightedIndices.push(...current);
      }
    };

    for (let i = 0; i < size; i++) {
      let rowIndices = Array.from({ length: size }, (_, j) => i * size + j);
      let colIndices = Array.from({ length: size }, (_, j) => j * size + i);
      checkConsecutive(rowIndices);
      checkConsecutive(colIndices);
    }

    for (let r = 0; r < size - 2; r++) {
      for (let c = 0; c < size - 2; c++) {
        checkConsecutive([
          r * size + c,
          (r + 1) * size + c + 1,
          (r + 2) * size + c + 2,
        ]);
        checkConsecutive([
          r * size + c + 2,
          (r + 1) * size + c + 1,
          (r + 2) * size + c,
        ]);
      }
    }

    const hasEmpty = fields.some((field) => field === " ");
    // console.log("hasEmpty", hasEmpty, fields);
    if (!hasEmpty) {
      this.#isCompleted = true;
      // console.log("hasEmpty", "completed");
    }

    this.#isProcessing = false;
    return highlightedIndices;
  }

  getMatches(fields) {
    const size = 5;
    let matches = [];

    const directions = [
      { row: 0, col: 1 },
      { row: 1, col: 0 },
      { row: 1, col: 1 },
      { row: 1, col: -1 },
    ];

    const findMatch = (row, col, direction) => {
      let match = [row * size + col];
      let i = 1;

      while (
        row + i * direction.row < size &&
        col + i * direction.col < size &&
        col + i * direction.col >= 0 &&
        fields[(row + i * direction.row) * size + (col + i * direction.col)] ===
          fields[row * size + col]
      ) {
        match.push(
          (row + i * direction.row) * size + (col + i * direction.col)
        );
        i++;
      }

      return match.length >= 3 ? match : null;
    };

    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const currentField = fields[row * size + col];
        if (currentField === " ") continue;

        directions.forEach((direction) => {
          const match = findMatch(row, col, direction);
          if (
            match &&
            !matches.some((existingMatch) =>
              match.every((index) => existingMatch.includes(index))
            )
          ) {
            matches.push(match);
          }
        });
      }
    }

    return matches.length;
  }
}
