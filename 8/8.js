let floor = +prompt("Введіть поверх");
let coastFloor = 0;
let curentFloor = 0;

function funFloor() {
  if (floor >= 2 && floor <= 4) {
    curentFloor = floor - 1;
    coastFloor = curentFloor * 20;
  } else if (floor >= 5 && floor <= 7) {
    curentFloor = floor - 4;
    coastFloor = curentFloor * 30 + 60;
  } else if (floor >= 8) {
    curentFloor = floor - 7;
    coastFloor = curentFloor * 40 + 150;
  }
  document.write(`<div>Заносимо на ${floor} етаж за ${coastFloor} грн.</div>`);
}

if (floor == 1) {
  document.write("<div>Заносимо безкоштовно</div>");
} else {
  funFloor();
}
