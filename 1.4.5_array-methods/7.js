let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let userMapped = users.map(el => {return {fullname: `${el.name} ${el.surname}`, id: el.id}});
console.log(userMapped);