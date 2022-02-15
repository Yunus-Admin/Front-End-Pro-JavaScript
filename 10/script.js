for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

const arr = [1, 2, 3, 4, 5];
let amount = 0;

for (let j = 0; j < arr.length; j++) {
  amount += arr[j];
  console.log(amount);
}

const array = [1, 2, 3, 4, 5];
let sum = 0;

for (let k = 0; k < arr.length; k++) {
  sum += array[k] * array[k];
  console.log(sum);
}

//Вариант с Math.pow

// function squareSum(numbers) {
//   let result = 0;
//   numbers.forEach(function (item) {
//     result += Math.pow(item, 2);
//   });
//   return result;}

// console.log(squareSum(array));

// Каждое задание из этого списка нужно выполнять в отдельном файле,
// если эти задания не связаны друг с другом

// 1.  Выведите в консоль с помощью цикла столбец чисел от 1 до 100.

// 2. Выведите в консоль с помощью цикла столбец чисел от 100 до 1.

// 3. Выведите с помощью цикла столбец четных чисел от 1 до 100.

// 4. Дан массив с числами. С помощью цикла найдите сумму элементов
// этого массива выведите ее в консоль

// const arr = [1, 2, 3, 4, 5];

// 5. Дан массив с числами. С помощью цикла найдите сумму квадратов
// элементов этого массива.

// const arr = [1, 2, 3, 4, 5];

// Для возведения в квадрат можно использовать Math.pow() или оператор **

// Math.pow() — https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

// ** — number ** degree где number это число которое возводится в степень,
// а degree это сама степень

// for (let i = 1; i <= 99; i++) {
//   console.log(i);
// }

// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }