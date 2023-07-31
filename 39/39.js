let numberRandom = Math.floor(Math.random() * (10000 - 1000)) + 1000;
let numberString = numberRandom.toString();
let digitsArray = numberString.split("");
console.log(digitsArray);

let divNumber;
let number = 1;
let count = 0;

for (let value of digitsArray) {
  for (let i = 0; i < 4; i++) {
    divNumber = document.createElement("div");
    divNumber.classList.add("digit");
    divNumber.textContent = number;
    if (value == number) {
      divNumber.classList.add("red");
      divNumber.style.cursor = "not-allowed";
    }
    divNumber.addEventListener("click", (e) => {
      for (let j = 0; j < 1; j++) {
        count += 1;
        if (count > 9) {
          count = 0;
        }
        number = count;
        e.target.textContent = number;
        if (count == value) {
          e.target.classList.add("red");
          e.target.style.cursor = "not-allowed";
          count = 0;
        }
      }
    });
  }

  document.body.appendChild(divNumber);
}
