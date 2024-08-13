let user = {
  name: "Василий Иванович",
  age: 35
};
const json = JSON.stringify(user);
console.log(json)
console.log(JSON.parse(json))