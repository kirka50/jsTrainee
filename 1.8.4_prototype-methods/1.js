let dictionary = Object.create(null);

dictionary.toString = () => {
  return Object.keys(dictionary).join();
}

Object.defineProperty(dictionary, "toString", {
  enumerable: false,
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  console.log("da " + key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
//console.log(dictionary); // "apple,__proto__"

console.log(dictionary.toString());
