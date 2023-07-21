let table = document.createElement("table");
table.style.width = "410px";
table.style.borderCollapse = "collapse";
table.style.border = "1px solid black";

let count = 0;
for (let i = 1; i <= 8; i++) {
  let row = table.insertRow();
  count = 0;
  if (i % 2 == 0) {
    count += 1;
  }
  for (let j = 1; j <= 8; j++) {
    count += 1;
    let cell = row.insertCell();
    cell.style.height = "50px";
    if (count % 2 == 0) {
      cell.style.backgroundColor = "black";
    }
  }
}

let tableContainer = document.querySelector(".place");
tableContainer.appendChild(table);
