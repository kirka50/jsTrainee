let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(ar) {
  return new Set(arr)
}