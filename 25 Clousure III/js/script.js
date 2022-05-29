(function () {
  function counter() {
    let result = 0;

    const counterStatistic = {
      increase: 0,
      decrease: 0,
      get: 0,
      getStatistic: 0,
    };

    return {
      increase(num) {
        counterStatistic.increase++;
        return (result += num);
      },
      decrease(num) {
        counterStatistic.decrease++;
        return (result -= num);
      },
      get() {
        counterStatistic.get++;
        return result;
      },
      getStatistic() {
        counterStatistic.getStatistic++;
        return counterStatistic;
      },
    };
  }

  const counter1 = counter();
  counter1.increase(90);
  counter1.decrease(40);

  console.log(counter1.get());
  console.log(counter1.getStatistic());

  const counter2 = counter();
  counter2.increase(130);
  counter2.decrease(30);

  console.log(counter2.get());
  console.log(counter2.getStatistic());
})();

// Берем счетчик который мы писали на и добавляем к нему возможность
// Подсчитывать сколько раз были вызваны функции (increase, decrease, get)
// Добавить метод getStatistic который вернет на объект с
// данными которые мы подсчитывали в пункте выше
// Добавить метод который будет обнулять наш счетчик
