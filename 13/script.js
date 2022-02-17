// const ask = +prompt("Введите число"),
//   degree = +prompt("В какую степень возвести");

// function numberPow(num, degree) {
//   if (isNaN(ask)) {
//     return `some error`;
//   }
//   return Math.pow(num, degree);
// }

// alert(numberPow(ask, degree));

function isValidNumber(arg) {
  if (typeof arg === "number" && !isNaN(arg)) {
    return true;
  }
  return false;
}

function pow(a, b = 1) {
  if (isValidNumber(a)) {
    return `a is not valid`;
  }
  if (isValidNumber(b)) {
    return `b is not valid`;
  }

  return Math.pow(a, b);
}

const rest = pow(prompt("Enter Number 1"), prompt(" Enter Number 2"));
alert(rest);

// const result = Math.pow(ask, degree);
// console.log(result);

// Нужно создать функцию которая будет возводить число в степень

// Запрашиваем у пользователя число (с помощью prompt)
// Запрашиваем у пользователя степень, в которую это число нужно
// возвести (с помощью prompt)
// Создаем функцию которая принимает 2 аргумента (число, степень)
// Задаем аргументу который принимает степень значение по умолчанию 1
// Внутри функции нужно написать проверку, если аргументы не являются
// числами завершить функцию с указанием того, что пользователь ввел
// неправильные данные, например (return ‘some error’)
//  Если проверка прошла успешно, то возвести число в степень
//  (работаем с аргументами функции)
// Вернуть результат выполнения функции и завершить ее
// Результат вызова функции записать в переменную и вывести
// пользователю через alert()
// P.S. Для возведения в степень можно использовать

// Math.pow() —
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
// Оператор ** пример (2 ** 8) — возводим число 2 в 8-ю степень
// Дополнительные материалы:

// https://learn.javascript.ru/function-basics

// https://learn.javascript.ru/ifelse
