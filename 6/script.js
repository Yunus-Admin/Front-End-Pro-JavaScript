console.log(typeof (Number("10") + 1)); //number 11
console.log(typeof ("sub" + Number(false))); //string sub0
console.log(typeof (16 * "91")); //number 1456
console.log(typeof (true - 70)); //number -69
console.log(typeof (Number(1 + String(1)) + 1)); //number 111

const sec = 60 * 60;
const hours = prompt("количество часов");
const result = sec * hours;

console.log(result);

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
alert(num);

// Task# 1 (тут есть пасхалки 🙂 )
// Что вернут следующие строки кода?

// Boolean(Number(’10’)) + 1;
// ‘sub ’ + Number(false);
// 16  *  ‘      91    ‘
// true-70
// Number(1 + String(1)) + 1

// Task# 2
// Напишите скрипт, который считает количество секунд в часе.
// Запросить у пользователя количество часов
// Посчитать сколько секунд в этом количестве часов
// Записать вычесленное значение в переменную
// Вывести эту переменную пользователю во всплывающем окне

// Task #3

// Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, —.
// Количество строк кода при этом не должно измениться. Код для переделки:

// let num = 1;
// num = num + 12;
// num = num — 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num — 1;
// alert(num);
