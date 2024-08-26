let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple
// ТАПАЕМ ТАПАЕМ НЕ СТЕСНЯЕМСЯ
console.log( lazy.stomach ); // apple