const birthday = +prompt("Введите год своего рождения?!"),
  town = prompt("В каком городе вы проживаете?"),
  favoriteSport = prompt(
    "Ваш любимый вид спорта? Бег, Бокс, Плавание"
  ).toLowerCase();

const getCurrentAge = function (date) {
  return new Date().getFullYear() - date;
};

if (birthday != "" && birthday != null) {
  alert(`Ваш возраст ${getCurrentAge(birthday)}`);
} else {
  alert("Жаль, что Вы не захотели ввести свою дату рождения!");
}

if (
  town == "киев" ||
  town == "москва" ||
  (town == "минск" && town != "" && town != null)
) {
  alert(`Ты живешь в столице ${town}`);
} else if (town) {
  alert(`Ты живешь в городе ${town}`);
} else {
  alert("Жаль, что Вы не захотели ввести свой город!");
}

if (favoriteSport === "бег") {
  alert(`Круто! Хочешь стать как Усэ́йн Сент-Лео Болт!`);
} else if (favoriteSport === "бокс") {
  alert(`Круто! Хочешь стать как Майк Тайсон!`);
} else if (favoriteSport === "плавание") {
  alert(`Круто! Хочешь стать как Майкл Фред Фелпс II!`);
} else {
  alert("Жаль, что Вы не захотели ввести свой любимый вид спорта");
}

// switch (
//   favoriteSport == "бег" ||
//   favoriteSport == "бокс" ||
//   favoriteSport == "плавание"
// ) {
//   case "бег":
//     console.log("Круто! Хочешь стать как Усэ́йн Сент-Лео Болт!");
//     break;
//   case "бокс":
//     console.log(`Круто! Хочешь стать как Майк Тайсон!`);
//     break;
//   case "плавание":
//     console.log(`Круто! Хочешь стать как Майкл Фред Фелпс II!`);
//     break;
//   default:
//     alert(
//       "Жаль, что Вы не захотели ввести свою дату рождения, город и вид спорта"
//     );
// }

// switch (town == "киев" || town == "москва" || town == "минск") {
//   case "киев":
//     console.log(
//       `Ваш возраст ${getCurrentAge(
//         birthday
//       )} Ты живешь в столице ${town} ${favoriteSport}`
//     );
//     break;
//   case "москва":
//     console.log(
//       `Ваш возраст ${getCurrentAge(
//         birthday
//       )} Ты живешь в столице ${town} ${favoriteSport}`
//     );
//     break;
//   case "минск":
//     console.log(
//       `Ваш возраст ${getCurrentAge(
//         birthday
//       )} Ты живешь в столице ${town} ${favoriteSport}`
//     );
//     break;
//   default:
//     console.log(
//       `Ваш возраст ${getCurrentAge(
//         birthday
//       )} Ты живешь в городе ${town} ${favoriteSport}`
//     );
//     break;
// }

// if (favoriteSport === firstSport) {
//   console.log(`Круто! Хочешь стать как Усэ́йн Сент-Лео Болт!`);
// } else if (favoriteSport === secondSport) {
//   console.log(`Круто! Хочешь стать как Майк Тайсон!`);
// }

// При загрузке страницы нужно показать пользователю окно, в котором спросить его год рождения.
// Когда он введет его и нажмет ОК, спросить у него, в каком городе он живет.
// При удачном раскладе показать ему еще одно окно, где спросить его любимый вид спорта.
// При нажатии на ОК показываем ему окно, где должна быть отображена следующая информация:

// Его возраст.
// Если пользователь введет Киев, Москва или Минск, то показать ему сообщение
// – “Ты живешь в столице …” и на место точек подставляем страну, столицу которой он ввел.
// Иначе показываем ему “ты живешь в городе …” и на место точек – введенный город.
// Выбираем сами три вида спорта и три чемпиона в этих видах. Соответственно,
// если пользователь введет один из этих видов спорта, то показываем ему сообщение
// “Круто! Хочешь стать …” и подставляем на место точек имя и фамилию чемпиона.
// Всё это должно быть отображено в одном окне.

// Если в каком-то из случаев он не захочет вводить информацию и нажмет Отмена,
// показать ему сообщение – “Жаль, что Вы не захотели ввести свой(ю) …” и указываем,
// что он не захотел вводить – дату рождения, город или вид спорта.
