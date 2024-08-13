function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log( bound.test ); // что выведет? почему?

// Выведет undefiend так как бинд создаёт новый обьект без свойств исходной функции

function sayHi() {
  let test = 1;
  console.log( this.name );
}


bound = sayHi.bind({
  name: "Вася"
});

console.log( bound.test );

// Даже с переменными