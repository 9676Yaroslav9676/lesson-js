// let colorQueu = 0;
// for (let i = 1; i < 15; i++) {
//   const span = document.createElement("span");
//   span.classList.add("circle");
//   if (colorQueu == 0) {
//     span.classList.add("red");
//     colorQueu += 1;
//   } else if (colorQueu == 1) {
//     span.classList.add("yellow");
//     colorQueu += 1;
//   } else if (colorQueu == 2) {
//     span.classList.add("green");
//     colorQueu = 0;
//   }

//   document.body.appendChild(span);
// }
let count = 0;

function addCircle(color) {
  const span = document.createElement("span");
  span.classList.add("circle", color);

  document.body.appendChild(span);
}

function addSpan() {
  if (count >= 14) {
    clearInterval(intervalid);
  }

  if (count % 3 === 0) {
    addCircle("red");
  } else if (count % 3 === 1) {
    addCircle("yellow");
  } else if (count % 3 == 2) {
    addCircle("green");
  }
  count++;
}

const intervalid = setInterval(addSpan, 800);
