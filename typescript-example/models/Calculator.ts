export default class Calculator {
  currentSum: number;

  constructor() {
    this.currentSum = 0;
  }

  add(arg: number) {
    this.currentSum = this.currentSum + arg;
  }

  result(): number {
    return this.currentSum;
  }

}
