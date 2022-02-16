const ask = +prompt("Введите число");

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(isPrime(ask));

//так же можно сделать через квадратный корень

// function isPrime(num) {
//   for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(isPrime(ask));

// Запросить у пользователя число, если число является простым
// то выводим в консоль true иначе false

// Простое число — целое положительное число, имеющее ровно два
// различных натуральных делителя — единицу и самого себя. Например,
// 7 — простое число, потому что делится без остатка только на 1 и
// на себя. 2017 — другое простое число.

// Используйте цикл for .

// Примеры:

// 1; // false
// 7; // true
// 10; // false
