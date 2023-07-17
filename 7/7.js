let userName = prompt("Введіть своє імя");

let userAge = +prompt("Введіть рік народження");

let curentDate = new Date();
let age = curentDate.getFullYear() - userAge;

if (age % 10 == 1) {
  year = "рік";
} else {
  age % 10 >= 2 && age % 10 <= 4 ? (year = "роки") : (year = "років");
}

alert(`${userName} : ${age} ${year}`);
