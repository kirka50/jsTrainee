let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
console.log(arr);

function filterRange(arr, firstNum, secondNum) {
  arr.forEach((el, index) => {
    if (el <= firstNum || el >= secondNum) arr.splice(index,1)
  })
}