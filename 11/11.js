let userNum;
let isValidNum = false;
let message = [];

while (!isValidNum) {
  userNum = +prompt("Введіть число");
  if (isNaN(userNum)) {
    alert("Це не число!!!");
  } else {
    isValidNum = true;
  }
}

// let isValidNum = true;
// do {
//   userNum = +prompt("Введіть число");
//   if (isNaN(userNum)) {
//     alert("Це не число!!!");
//   } else {
//     isValidNum = false;
//   }
// } while (isValidNum);

for (let i = 2; i <= 10; ++i) {
  if (userNum % i == 0) {
    message.push(`Число ділиться на ${i}\n`);
  }
}

alert(message.join(""));
