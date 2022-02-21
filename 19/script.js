const arr = ["a", "b", "c", "d"];
alert(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);

const arr2 = [2, 5, 3, 9];
const result = arr2[0] * arr2[1] + arr2[2] * arr2[3];
alert(result);

const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
alert(arr3[1][0]);

const arr4 = {
  js: ["jQuery", "Angular"],
  php: "hello",
  css: "world",
};

alert(arr4["js"][0]);

const arr5 = [];
let str = "x";
for (let i = 0; i < 10; i++) {
  arr5.push(str);
  str += "x";
}
console.log(arr5);

function getX(item = 7) {
  const arr = [];
  let symbo = "x";
  for (let i = 0; i < item; i++) {
    arr.push(symbo);
    symbo += symbo[0];
  }
  return arr;
}

console.log(getX());

const arr6 = [];
for (let i = 1; i < 10; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += i;
  }
  arr6.push(str);
}
console.log(arr6);

function arrayFill(value, num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(value);
  }
  return arr;
}

console.log(arrayFill("x", 5));

function ten(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
      return i + 1;
    }
  }
}
console.log(ten([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reducer = arr10.reduce(
  (acc, item) => {
    if (acc.sum > 10) {
      return acc;
    }

    acc.sum += item;
    acc.result += 1;
    return acc;
  },
  { sum: 0, result: 0 }
).result;

console.log(reducer);

const arr7 = [1, 3, 4, 5, 6, 7];
const results = [];
for (let i = arr7.length - 1; i >= 0; i--) {
  results.push(arr7[i]);
}
console.log(results);

const arr8 = [[1, 2, 3], [4, 5], [6]];
let total = 0;
for (let i = 0; i < arr8.length; i++) {
  for (let j = 0; j < arr8[i].length; j++) {
    total += arr8[i][j];
  }
}

console.log(total);

const twoArrayConcat = arr8
  .reduce((acc, item) => {
    return acc.concat(item);
  }, [])
  .reduce((acc, item) => {
    return (acc += item);
  }, 0);

console.log(twoArrayConcat);


const twoArrayFlat = arr8.flat().reduce((acc, item) => {
  return (acc += item);
}, 0);

console.log(twoArrayFlat);

const arr9 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let summary = 0;
for (let i = 0; i < arr9.length; i++) {
  for (let j = 0; j < arr9[i].length; j++) {
    for (let k = 0; k < arr9[i][j].length; k++) {
      summary += arr9[i][j][k];
    }
  }
}
console.log(summary);
// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на
// экран строку ‘a+b, c+d’.

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент
// массива на второй, а третий элемент на четвертый. Результаты сложите,
// присвойте переменной result. Выведите на экран значение этой переменной

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран
// цифру 4 из этого массива.

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}.
// Выведите с его помощью слово ‘jQuery’.

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’,
// во второй ‘xx’, в третий ‘xxx’ и так далее.

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’,
// во второй ’22’, в третий ‘333’ и так далее.

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными
// значениями. Первым параметром функция принимает значение, которым
// заполнять массив, а вторым — сколько элементов должно быть в массиве.
// Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива
// надо сложить, чтобы в сумме получилось больше 10-ти.

// 9. Дан массив с числами. Не используя метода reverse переверните его
// элементы в обратном порядке.

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите
// сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
