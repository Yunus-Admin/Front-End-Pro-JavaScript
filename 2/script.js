const first = +prompt("Введите число"),
  second = +prompt("Введите число");

console.log(calcPlus(first, second));
console.log(calcMinus(first, second));
console.log(calcMultiplication(first, second));
console.log(calcDivision(first, second));

function calcPlus(a, b) {
  return a + b;
}

function calcMinus(a, b) {
  return a - b;
}

function calcMultiplication(a, b) {
  return a * b;
}

function calcDivision(a, b) {
  return a / b;
}
