let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user, "toString", {
  enumerable: false
});

// По умолчанию оба свойства выведутся:
for (let key in user) console.log(key); // name, toString