// let lastNames = [];

// for (let i = 0; i < 3; i++) {
//   let i = prompt("Введіть імя та прізвище студента");

//   lastNames.push("<li>" + i + "</li>");

//   document.write("<h1>" + i + "</h1>");
// }

// document.write(`<ol>${lastNames.join("")}</ol>`);

let lastNames = " ";
for (let i = 0; i < 3; i++) {
  let i = prompt("Введіть імя та прізвище студента");
  lastNames += "<li>" + i + "</li>";
  document.write("<h1>" + i + "</h1>");
}

// let names = "";
// lastNames.forEach((name) => {
//   names += name;
// });

document.write(`<ol>${lastNames}</ol>`);
