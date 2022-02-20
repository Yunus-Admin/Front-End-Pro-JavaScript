function mainFunction(callback) {
  let firstNum = +prompt("Введите число"),
    secondNum = +prompt("Введите число");

  callback(firstNum, secondNum);
}

function exponentiation(a, b) {
  alert(a ** b);
}

function multiplay(a, b) {
  alert(a * b);
}

function division(a, b) {
  alert(a / b);
}

function modulo(a, b) {
  alert(a % b);
}

mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);

// Запросить у пользователя 2 числа (число, степень) после чего
// вывести ему результат во всплывающем окне

// Основная функция mainFunction

// 1. Пишем функцию, которая принимает в качестве параметра callback.

// 2. В теле функции вам нужно написать код, который будет запрашивать
// у юзера 2 числа — эти числа должны храниться в разных переменных.

// 3. Также в теле функции нужно вызвать callback, который вы передаете
// в качестве аргумента.

// 4. При вызове callback в него нужно передать аргументами те 2 числа,
// которые вы запрашивали у пользователя ранее.

// Callback функция exponentiation

// Эта функция будет передаваться в mainFunction в качестве аргумента

// 1. Функция должна принимать 2 параметра: те числа, которые мы ей
// передаем в основной функции в пункте 4 «Основной функции».

// 2. В теле функции нам нужно возвести число в степень и записать
// результат этой операции в переменную.

// 3. Также в теле функции нужно написать код, который будет выводить
// пользователю результат во всплывающем окне.

// —————

// После написания этих функций необходимо вызвать «Основную функцию»
// и ей в качестве аргумента передать callback функцию (по имени — не вызывая)

// Доп. материалы (Обязательно читать)

// https://developer.mozilla.org/ru/docs/Glossary/Callback_function

// https://ru.hexlet.io/blog/posts/javascript-what-the-heck-is-a-callback
