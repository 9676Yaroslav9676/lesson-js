let rate;

while (true) {
  rate = +prompt("Введіть сумму яку ви ставите на забіг");
  if (!isNaN(rate)) {
    break;
  } else {
    alert("Ви ввели не число!!!! Введіть число!!!!");
  }
}

function resultRate(number) {
  if (number > 0) {
    result = rate * number;
    alert(`Число: ${number}.\n Ви виграли ${result} грн.`);
  } else {
    alert(`Нажаль Ваша ставка не спрацювала. Спробуйте ще раз.`);
  }
}

function resultRacing() {
  let number = Math.floor(Math.random() * 11) - 5;
  resultRate(number);
  console.log(number);
}

setTimeout(resultRacing, 1000);
