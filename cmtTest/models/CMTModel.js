export default class CMTModel {
  #fields;

  constructor() {
    this.#fields = Array(25).fill(0);
  }

  getFields() {
    return [...this.#fields];
  }

  setStatus(id, counter) {
    this.#fields[id] = counter;
  }

  resetFields() {
    this.#fields = Array(25).fill(0);
  }
}
