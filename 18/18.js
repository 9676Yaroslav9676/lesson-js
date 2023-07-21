let table = document.createElement("table");
table.setAttribute("border", "1");
table.style.borderCollapse = "collapse";
table.style.textAlign = "center";
let number = 1;
let long = 4;
for (let i = 1; i <= 6; i++) {
  let row = table.insertRow();

  if (i > 1) {
    number += 4;
    long += 4;
  }
  for (let j = number; j <= long; j++) {
    let cell = row.insertCell();
    cell.style.width = "50px";
    cell.innerHTML = j;
  }
}

let tableContainer = document.querySelector(".place");

tableContainer.appendChild(table);
