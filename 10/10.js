let userNumber = 0;
let evenNum = 1;
let notEvenNum = 0;

do {
  userNumber = prompt("Введіть 4-х значне число");
} while (userNumber.length !== 4);

if (+userNumber % 2 == 0) {
  for (let number of userNumber) {
    evenNum *= number;
  }
  alert(`Ваше число Парне множина чисел ${evenNum}`);
} else {
  for (let number of userNumber) {
    notEvenNum += +number;
  }
  alert(`Ваше число Не парне сумма чисел ${notEvenNum}`);
}
