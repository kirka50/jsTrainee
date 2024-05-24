function camelsize(str) {
  arr = str.split('-');
  arr = arr.map(element => {
    return element[0].toUpperCase() + element.slice(1)
  });
  arr.join(' ')
  return arr
}
console.log(camelsize('background-color'));