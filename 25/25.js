const textElement = document.querySelector(".text");

let textToPrint = "Привіт я штучний інтелект!!! Вітаю тебе Ярославе!!!!";

let currentIndex = 0;

function printText() {
  textElement.textContent += textToPrint[currentIndex];
  currentIndex++;
  if (currentIndex === textToPrint.length) {
    clearInterval(intervalid);
  }
}

const intervalid = setInterval(printText, 100);
