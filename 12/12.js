let salarySize;
let isValidNum = false;
let tax = 0;
let onHands = 0;

while (!isValidNum) {
  salarySize = +prompt("Введіть розмір зарплатні");
  if (isNaN(salarySize)) {
    alert("Введіть число");
  } else {
    isValidNum = true;
  }
}

if (salarySize <= 6000) {
  tax = (salarySize / 100) * 10;
  onHands = salarySize - tax;
} else if (salarySize <= 10000) {
  tax = (salarySize / 100) * 15;
  onHands = salarySize - tax;
} else if (salarySize <= 15000) {
  tax = (salarySize / 100) * 17.5;
  onHands = salarySize - tax;
} else {
  tax = (salarySize / 100) * 20;
  onHands = salarySize - tax;
}
alert(`Заплатіть податок ${tax} на руки отримайте ${onHands}`);
