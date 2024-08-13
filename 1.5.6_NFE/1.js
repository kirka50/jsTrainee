function makeCounter() {
  function counter() {

    return counter.count++;
  };
  counter.set = function (value) {
    return counter.count = value
  }
  counter.decrease = function() {
    return counter.count - 1
  };;
  counter.count = 0;
  return counter;
}

let counter = makeCounter();
console.log( counter() ); // 10
console.log( counter.set(10) ); // 10
console.log( counter.decrease() ); // 10