function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

function inArray(...args) {
  return function(x) {
    return args.includes(x);
  };
}
console.log( arr.filter(inArray(3, 6,7,8, 10)) ); // 3,6,7