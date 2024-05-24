let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr) // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) { 
  const newArr = [].concat(arr)
  return newArr.sort((a,b) => a.localeCompare(b));
}