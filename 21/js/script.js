function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}

console.log(getFactorial(3));

function pow(num, degree) {
  if (degree !== 1) {
    return (num *= pow(num, degree - 1));
  }
  return num;
}

console.log(pow(4, 4));

function sum(a, b) {
  if (b === 0) {
    return a;
  }
  return sum(a + 1, b - 1);
}

console.log(sum(4, 3));

const arr = [[1, 2, 3], [1, [2, 3]], [[[[1, 2, 3, 4]]]]];

function flat(actualArr, newArr = []) {
  for (let i = 0; i < actualArr.length; i++) {
    if (Array.isArray(actualArr[i])) {
      flat(actualArr[i], newArr);
    } else {
      newArr.push(actualArr[i]);
    }
  }
  return newArr;
}

console.log(flat(arr));

// Task #1

// Реализовать рекурсивную функцию которая находит факториал
// переданного в нее числа

// getFactorial(3) // в данном случае должна вернуть факториал
// числа 3! = 3 * 2 * 1

// Task #2

// Реализовать рекурсивную функцию которая находит возводит
// число в степень.

// Число которое нужно возвести в степень передается как первый
// аргумент в функцию

// Степень передается как второй аргумент в функцию

// pow(num, degree)

// Task #3

// Рекурсивное суммирование

// Задача: напишите рекурсивную функцию для вычисления суммы заданных
// положительных целых чисел a и b без прямого использования оператора +.

// Необходимоинкрементировать одно число на единицу до тех пор, пока
// другое число не окажется равным нулю.
