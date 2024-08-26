function f(a, b) {
  console.log( a + b );
}

Function.prototype.defer = function(time) {
  let f = this
  return function(...args) {
    setTimeout(() => {f.apply(f,args)
    }, time);
  }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.