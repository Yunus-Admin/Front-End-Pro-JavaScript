const arr = [1, 2, 3, 4, 5, -1, -2, -3];

// const isPositive = arr.filter((num) => num > 0 && num % parseInt(num) === 0);
// console.log(isPositive);

// const result = arr.filter((item) => item > 0).sort((a, b) => a - b);
// console.log(result);

function positiveNumber(array) {
  const exampleArr = [];

  if (array.length === 0) {
    console.log("Array empty");
  }

  for (let i = 0; i <= array.length; i++) {
    if (array[i] > 0) {
      exampleArr.push(array[i]);
    }
  }

  if (exampleArr.length) {
    return exampleArr;
  }
  return null;
}

console.log(positiveNumber(arr));

const arr2 = [1, 2, 3, 4, 5, -1, -2, -3];
function positiveArrNumber(array) {
  const exampleArr = [];

  if (array.length === 0) return "Array empty";

  for (let i = 0; i <= array.length; i++) {
    if (checkNumber(array[i]) && array[i] > 0) {
      exampleArr.push(array[i]);
    }
  }
  return exampleArr.length === 0 ? null : exampleArr;
}

console.log(positiveArrNumber(arr2));

function checkNumber(args) {
  if (typeof args === "number" && !isNaN(+args)) return true;
  return false;
}

// function isPositive(num) {
//   if (num >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPositive(arr));

// let newArr = [];
// for (let i = 0; i <= arr.length; i++) {
//   if (isPositive(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

// Дан массив с числами const arr = [1, 2, 3, -1, -2, -3];

// Нкобходимо написать функцию которая вернет новый массив содержащий
// только положиельные числа. Для этого:

// — Создаем функцию с произвольным именем

// — Функция принимает массив в качестве параметра

// — В теле функции создаем пустой массив (пример: const exampleArr = [])

// — Если массив переданный в параметр функции пустой, то возвращаем сообщение об этом

// — Перебираем циклом массив, который передан в качестве параметра (использовать цикл for)

// — В теле цикла проверям является ли текущий элемент положительным числом или отрицательным (if)

// — Если число положительное, то добавлем его в ранее созданный массив с помощь функции push

// - (пример exampleArr.push(currentPositiveNumber))

// — После выполнения цикла проверям массив, который наполняли только положиельными значениями

// — Если он не пустой, то возвращаем этот массив

// — Если пустой, возвращаем null

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// P.S. Можно написать вспомогательную функцию для проверки данных (по желанию)
