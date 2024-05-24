function Accumulator(defaultValue) {
  this.value = defaultValue;
  this.read = function() {
    this.value += Number(prompt('chislo',0));
    alert(this.value);
  }
}
const acum = new Accumulator(10);
acum.read();
acum.read();