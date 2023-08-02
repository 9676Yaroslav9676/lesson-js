let table = document.createElement("table");
table.style.width = "500px";
table.style.borderCollapse = "collapse";
table.style.border = "2px solid orange";
table.style.margin = "0px auto";
let div = document.createElement("div");
div.style.textAlign = "center";
div.style.marginTop = "20px";
div.style.fontSize = "30px";
div.style.fontWeight = "bold";
let button = document.createElement("button");
button.style.margin = "0px auto";
button.style.cursor = "pointer";
button.textContent = "Старт";
button.onclick = () => setTimeout(result, 2000);

var count = 0;

function randomNumber(cell) {
  let number = Math.floor(Math.random() * (45 - 1 + 1)) + 1;
  cell.textContent = number;
}

function colorNumber(cell, number) {
  for (let j = 0; j < 5; j++) {
    let value = Math.floor(Math.random() * (45 - 1 + 1)) + 1;
    if (value == number) {
      count += 1;
      cell.classList.add("orange");
    }
  }
}

function result() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    colorNumber(cell, +cell.textContent);
  });
  let button = document.querySelector("button");
  button.textContent = "Try Again";
  button.onclick = () => location.reload();
  switch (count) {
    case 1:
      div.textContent = "Ви виграли 10 грн!";
      break;
    case 2:
      div.textContent = "Ви виграли 150 грн!!";
      break;
    case 3:
      div.textContent = "Ви виграли 780 грн!!!";
      break;
    case 4:
      div.textContent = "Ви виграли 3 560 грн!!!!";
      break;
    case 5:
      div.textContent = "Ви виграли 56 000 грн!!!!!";
      break;
    default:
      div.textContent = "Пощаcтить наступного разу:(";
  }
}
for (let i = 1; i <= 3; i++) {
  let row = table.insertRow();
  for (let j = 1; j <= 5; j++) {
    let cell = row.insertCell();
    cell.style.height = "50px";
    cell.style.border = "2px solid orange";
    cell.style.textAlign = "center";
    cell.style.fontSize = "30px";
    cell.classList.add("cell");
    randomNumber(cell);
  }
}

document.body.append(button);
document.body.appendChild(table);
document.body.append(div);
