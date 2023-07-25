let oneN = +prompt("Введіть перше число");
let twoN = +prompt("Введіть друге число");

console.log("if--else");
if (oneN > twoN) {
  console.log("1");
} else if (oneN < twoN) {
  console.log("-1");
} else {
  console.log("0");
}
console.log("---------");

console.log("тернарний оператор");
oneN > twoN
  ? console.log("1")
  : oneN < twoN
  ? console.log("-1")
  : console.log("0");

console.log("---------");

console.log("Стрелочная функція");
let number = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};
console.log(number(oneN, twoN));
