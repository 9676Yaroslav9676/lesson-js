alert("Загадайте число");
alert("Помножте число на 2");
alert("Додайте до загаданого числа 7");

let number = +prompt("Введіть що вийшло");
number -= 7;
number /= 2;

alert(`Ви загадали число ${number}`);
