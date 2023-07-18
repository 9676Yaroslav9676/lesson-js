// function promptForANumber() {
//   return +prompt("Введіть число від 1 до 10");
// }

// let userNum = 0;
// while (!(userNum >= 1 && userNum <= 10)) {
//   userNum = promptForANumber();
// }

let userNum = 0;

do {
  userNum = +prompt("Введіть число від 1 до 10");
} while (!(userNum >= 1 && userNum <= 10));

let randomNum = Math.random() * 9 + 1;
let raundedNum = Math.round(randomNum);

userNum == raundedNum
  ? alert(`Вам пощастило!!! Ваше число ${userNum}`)
  : alert(
      `Не пощастило ((( Ваше число ${userNum}, а випало число ${raundedNum}`
    );
