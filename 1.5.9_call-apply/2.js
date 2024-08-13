function delay(func, delay) {
  return function wrapper(...args) {
    return setTimeout(() => func.call(this,...args),delay)
  }
}


function f(x, y) {
  console.log(x, y);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f5000 = delay(f, 5000);

f1000("test ", 'a'); // показывает "test" после 1000 мс
f5000("test ", 'b'); // показывает "test" после 1500 мс