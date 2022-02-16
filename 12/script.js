const num = +prompt("Введите число");
if (num < 1) {
  console.log(NaN);
}
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

// const num = +prompt("Введите число");

// const smallestDivisor = (num) => {
//   if (num === 1) {
//     return num;
//   } else if (num < 1) {
//     return NaN;
//   }
//   let dell = 2;
//   while (num % dell !== 0) {
//     dell = dell + 1;
//   }
//   return dell;
// };

// console.log(smallestDivisor(num));

// Запрашиваем число у пользователя

// Нужно найти минимальный делитель переданного числа.

// Для этого достаточно последовательно проверять делимость,
// начиная с двойки. Если делитель не найден, значит число
// простое, и делителем является само число.

// Если переданное число меньше единицы, то вывести в консоль
//   NaN. иначе вывести наименьший делитель числа
