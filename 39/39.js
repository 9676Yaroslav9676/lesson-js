let numberRandom = Math.floor(Math.random() * (10000 - 1000)) + 1000;
let numberString = numberRandom.toString();
let digitsArray = numberString.split("");
console.log(digitsArray);

let divNumber;
let count = 1;

function handleNuber(e, value) {
  for (let i = 0; i < 1; i++) {
    count += 1;
    if (count > 9) {
      count = 0;
    }
    let textContent = count;
    e.target.textContent = textContent;
    if (count == value) {
      e.target.classList.add("red");
      e.target.style.cursor = "not-allowed";
      e.target.onclick = null;
      count = 1;
    }
  }
}

for (let value of digitsArray) {
  divNumber = document.createElement("div");
  divNumber.classList.add("digit");
  divNumber.textContent = count;
  if (value == count) {
    divNumber.classList.add("red");
    divNumber.style.cursor = "not-allowed";
  }
  if (value != 1) {
    divNumber.onclick = (e) => handleNuber(e, value);
  }

  document.body.appendChild(divNumber);
}
