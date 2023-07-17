function culcSum(sum) {
  let firstSum = sum / 6;
  let threePeople = sum - firstSum;
  let twoSum = firstSum / 6;
  let twoPeople = firstSum - twoSum;
  let onePeople = twoSum;

  document.write(
    `<div>Перша людина витратила - ${onePeople.toFixed(2)} грн.</div>`
  );
  document.write(
    `<div>Друга людина витратила - ${twoPeople.toFixed(2)} грн.</div>`
  );
  document.write(
    `<div>Третя людина витратила - ${threePeople.toFixed(2)} грн.</div>`
  );
}

let sum = +prompt("Введіть сумму");

culcSum(sum);
