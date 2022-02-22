const arr = [1, 2, 3, 4, 5];

function firstIndexOf(arr, val) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(firstIndexOf(arr, 3));

function lastIndexOf(array, value, fromIndex = null) {
  if (fromIndex === null) {
    fromIndex = array.length - 1;
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf(arr, 5));

const arr1 = [1, 2, 3, 4, 5];

function find(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return arr[i];
    }
  }
}

console.log(
  find(arr1, (item) => {
    return item === 2;
  })
);

const arr2 = [1, 2, 3, 4, 5];

function findIndex(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  findIndex(arr2, (item, index) => {
    return index === 4;
  })
);

const arr3 = [1, 2, 3, 4, 5];
function includes(array, arrayValue) {
  for (let value of array) {
    if (value === arrayValue) {
      return true;
    }
  }
  return false;
}
console.log(includes(arr3, 2));

const arr4 = [1, 2, 3, 4, 5];

const every = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

console.log(
  every(arr4, (item) => {
    return item > 0;
  })
);

const arr5 = [1, 2, 3, 4, 5];
function some(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

console.log(
  some(arr5, (item) => {
    return item === 3;
  })
);

// Вам нужно написать функции indexOf, lastIndexOf, find, findIndex,
// includes, every и some, которые работают так же, как одноименные
// методы массивов.

// Алгоритм выполнения:

// 1 Читаете документацию по методу над которым работаете
// 2 разбираетесь как он работает и что возвращает
// 3 пишете функцию которая полностью имитирует работу метода
