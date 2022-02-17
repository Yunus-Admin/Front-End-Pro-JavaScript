function padString(str, num, symbol, leftpad = false) {
  if (str.length === undefined) {
    return `First argument error (str)---try again`;
  }

  if (isNaN(num)) {
    return `Second argument error (num) --- try again`;
  }

  if (symbol === null) {
    return `Third argument error (symbol) --- try again`;
  }

  if (str.length === num) {
    return str;
  }

  if (leftpad) {
    num = num - str.length;
    let i = -1;
    while (++i < num) {
      str = symbol + str;
    }
    return str;
  } else if (str.length < num) {
    for (let i = str.length; i < num; i++) {
      str += symbol;
    }
    return str;
  }

  if (num < str.length) {
    return str.substr(0, num);
  } else {
    return `some error`;
  }
}

console.log(padString("hi", 7, "*"));
console.log(padString("hello", 9, "*", true));
console.log(padString("hello", 2));

function isValidNumber(arg) {
  if (typeof arg === "number") {
    return true;
  }
  return false;
}

function paddString(str, strLength, symb, right = true) {
  if (typeof str !== "string") {
    return "str is not string";
  }
  if (!isValidNumber(strLength)) {
    return "strLength is not string";
  }
  if (str.length >= strLength) {
    return str.substring(0, strLength);
  }
  if (!symb || (typeof symb !== "string" && symb.length !== 1)) {
    return "symb is not invaild";
  }
  if (typeof right !== "boolean") {
    return "right is invalid";
  }

  let localString = "";

  for (let i = str.length; i < strLength; i++) {
    localString += symb;
  }

  return right ? str + localString : localString + str;
}

console.log(paddString("Alex", 10, "*"));
console.log(paddString("Alex", 10, "*", false));
console.log(paddString("Alexaaaa", 5, "*", false));
console.log(padString("Hello", 2));
// Вам нужно написать реализацию функции padString,
// которая принимает 4 аргумента:

// строку
// число, которое является длинной строки, которую мы
// хотим получить в результате выполнения функции
// символ (строка длинной 1 символ) — которым дополнится строка,
// если это будет необходимо
// параметр булеан (true или false), который определяет, добавлять
// символы слева или справа (по умолчанию справа)
// Обязательно при написании функции необходимо проверить аргументы,
// которые мы передали, и если каких-то аргументов нет, то вернуть
// из функции строку с ошибкой (return ‘some error’). Сообщение
// с ошибкой должно быть разное в зависимости от того условия,
// по которому не прошла проверка.

// Результат вызова функции нужно вывести в консоль —
// после завершения функции.

// Например:

// Вызов padString(‘hello’, 8, ‘*’) вернет строку hello***

// А вызов padString(‘hello’, 6, ‘*’, false) вернет строку *hello

// Вызов padString(‘hello’, 2) вернет ‘he’ — если число меньше,
// чем размер введенной строки, нужно строку обрезать при помощи метода substr

// Дополнительные материалы:

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// https://learn.javascript.ru/function-basics

// https://learn.javascript.ru/ifelse
