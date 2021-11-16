const operations = prompt("Выберите операцию (+, -, *, /)"),
  firstNumber = +prompt("Введите первое число"),
  secondNumber = +prompt("Введите второе число");

function calc(a, b) {
  let result = "";
  if (operations == "+") {
    result += a + b;
  } else if (operations == "-") {
    result += a - b;
  } else if (operations == "*") {
    result += a * b;
  } else {
    result += a / b;
  }
  return result;
}

let counter = `${firstNumber} ${operations} ${secondNumber} = ${calc(
  firstNumber,
  secondNumber
)}`;
console.log(counter);

// 1) с помощью промта спрашиваем у пользователя что он хочет сделать (add, sub, mult, div).

// 2) с помощью промта спрашиваем у пользователя первое число.

// 3) с помощью промта спрашиваем у пользователя второе число.

// 4) С помощью alert или console.log выводим результат действия (add, sub, mult, div) со всеми операндами (Н-р "2 + 3 = 5" );
