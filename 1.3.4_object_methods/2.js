const calculator = {
  a: 0,
  b: 0,
  readValues() {
    this.a = prompt('a', 0);
    this.b = prompt('b', 0);
  },
  sum() {
    alert(Number(this.a) + Number(this.b))
  },
  mul() {
    alert(this.a * this.b)
  }
}
calculator.readValues();
calculator.sum();
calculator.mul();