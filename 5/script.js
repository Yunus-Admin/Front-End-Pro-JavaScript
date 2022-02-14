const user = {
  name: "John",
  surname: "Smith",
};

delete user.name;
user.surname = "Pete";
console.log(user);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
console.log(sumValues(salaries));

// Task #1
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// Task #2
// Можно ли изменить объект, объявленный с помощью const?

// const user = {

//   name: «John»

// };

// // это будет работать?

// user.name = «Pete»;

// Task #3
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {

//   John: 100,

//   Ann: 160,

//   Pete: 130

// }

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum
