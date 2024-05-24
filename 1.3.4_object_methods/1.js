function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

/// При вызове аргумента функции ref - 
//Js посмотрит что ref ссылается на метод this обьекта user 
// Но this какого аргумента ? Так как не указан аргумент при вызове this, то результатом буде undifined
// А у undifined нет аргумента name