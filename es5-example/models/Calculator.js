class Calculator {

  constructor() {
    this.currentSum = 0;
  }

  add(arg) {
    this.currentSum = this.currentSum + arg
  }

  result() {
    return this.currentSum;
  }

}

module.exports = Calculator;