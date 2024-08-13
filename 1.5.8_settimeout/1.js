function printNumbers(from,to) {
  let current = from;
  let timer = setInterval(function() {
    console.log(current);
    if (current <= to) {
      clearInterval(timer);
    } current++
  },1000)
}

printNumbers(1, 3)

function printNumbers(from,to) {
  let current = from;
  if (current <= to) {
    console.log(current);
    setTimeout(printNumbers, 1000, current+1, to);
  }
}

printNumbers(1, 20);