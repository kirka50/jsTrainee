function Calculator() {
  this.a = 0;
  this.b = 0;
  this.readValues = function() {
    this.a = prompt('a', 0);
    this.b = prompt('b', 0);
  };
  this.sum = function() {
    alert(Number(this.a) + Number(this.b))
  };
  this.summul = function() {
    alert(this.a * this.b)
  }
}

calc = new Calculator();
calc.readValues();
calc.sum();
calc.summul();