let callFunction = 0;

const generationNumArr = function () {
  const arr = [];

  return function randomNumber() {
    callFunction += 1;
    const newNum = Math.floor(Math.random() * 100 + 1);
    if (arr.length === 100) {
      return arr;
    }

    if (arr.includes(newNum)) {
      return randomNumber();
    }
    arr.push(newNum);
    return randomNumber();
  };
};

const result = generationNumArr();

console.log(result());
console.log(callFunction);

const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);
let callFunctionSecond = 0;
const generateId = function () {
  const arr = [];

  function generateNumber() {
    callFunctionSecond += 1;
    const randomNum = getRandomNumber();
    if (arr.length === 100) {
      return arr;
    }

    if (arr.includes(randomNum)) {
      return generateNumber();
    }
    arr.push(randomNum);
    return arr;
  }

  return generateNumber;
};

const idGenerator = generateId();
let foo;

for (let i = 0; i <= 100; i++) {
  foo = idGenerator();
}

foo = foo.sort((a, b) => {
  return a - b;
});

console.log(foo);
console.log(callFunctionSecond);

// Сделайте функцию, каждый вызов который будет генерировать случайные
// числа от 1 до 100, но так, чтобы они не повторялись, пока не будут
// перебраны все числа из этого промежутка. Решите задачу через
// замыкания - в замыкании должен хранится массив чисел, которые уже
// были сгенерированы функцией.
