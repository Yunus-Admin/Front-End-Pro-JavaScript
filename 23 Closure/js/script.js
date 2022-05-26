const argPlus = function () {
  let result = 0;

  return function (x) {
    result += x;
    return result;
  };
};

const sum = argPlus();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

(function () {
  function sum(value) {
    let first = value;

    sum = function () {
      let arg = arguments[0] ? arguments[0] : 0;
      return (first = first + arg);
    };

    return sum();
  }

  console.log(sum(3));
  console.log(sum(5));
  console.log(sum(20));
})();

// Вам нужно написать функцию, которая принимает один параметр.
// При первом вызове она его запоминает, при втором — суммирует
// переданный параметр с тем, что передали первый раз и тд.
// Например: sum(3) = 3; sum(5) = 8; sum(20) = 28
