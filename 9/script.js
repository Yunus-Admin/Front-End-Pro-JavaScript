let x = 10,
  y = 7;

x > y ? console.log("x больше, чем y") : console.log("x не больше, чем y");

const number = +prompt("Введите число");

if (number % 2 == 0) {
  alert(`Число ${number} четное`);
} else {
  alert(`Число ${number} нечетное`);
}

const numberOfThrees = prompt("Введите целое число"),
  sum = numberOfThrees.length;

if (sum === 1) {
  alert(`Число ${numberOfThrees} однозначное положительное`);
} else if (sum === 2) {
  alert(`Число ${numberOfThrees} двухзначное положительное`);
} else if (sum === 3) {
  alert(`Число ${numberOfThrees} трехзначное положительное`);
}

const firstNumber = prompt("Введите первое число"),
  secondNumber = prompt("Введите второе число"),
  thirdNumber = prompt("Введите третье число");

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  alert(`Это число ${firstNumber} максимальное`);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  alert(`Это число ${secondNumber} максимальное`);
} else {
  alert(`Это число ${thirdNumber} максимальное`);
}

const firstSide = +prompt("Введите первую сторону длины треугольника"),
  secondSide = +prompt("Введите вторую сторону длины треугольника"),
  thirdSide = +prompt("Введите третью сторону длины треугольника");

if (
  firstSide + secondSide > thirdSide &&
  firstSide + thirdSide > secondSide &&
  secondSide + thirdSide > firstSide
) {
  alert("Треугольник существует");
} else {
  alert("Треугольник не существует");
}

// 1.

// Вам даны две переменные x и y, менять их не нужно. При помощи тернарного оператора сравните их
// и если x больше, чем y, то выведите фразу: "x больше, чем y", иначе выведите фразу: "x не больше, чем y".

// let x = 10, y = 7;

// 2.

// // Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код,
// // который делает запрос: «Введите число».Если посетитель вводит четное число, то выводить
// // «"Число " + num + " четное"», если нечетное: "Число " + num + " нечетное

// 3.

// // Напишите код, который предлагает пользователю ввести целое число. Нужно вывести на экран сколько в этом
// // числе цифр, а также положительное оно или отрицательное. Например, "Число " + num + " однозначное положительное".
// // Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.

// Чтобы узнать длину строки которую ввел юзер в prompt нужно использовать

// let a = 'string';
// console.log(a.length)

// 4.

// Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
// Пользователь вводит поочерёдно через prompt числа. Используя конструкцию if..else, напишите код,
// который должен определять, какое из введенных чисел является наибольшим.

// 5.

// У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто <лягут>
// на третью и треугольника не получится.Пользователь вводит поочерёдно через prompt длины трех сторон.
// Используя конструкцию if..else, напишите код, который должен определять, может ли существовать
// треугольник при таких длинах. Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной.
// Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.
