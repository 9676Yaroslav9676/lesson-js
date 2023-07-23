let group1 = ["Агеев", "Дмитренко", "Іванов", "Семенов", "Шаповалов"];
let group2 = ["Філонов", "Ізюмов", "Кабанов", "Дюдарев"];

document.write(`start = 0<br>${group1}<br>`);
group1.unshift("Березина");
document.write(`start = 1<br>${group1}<br>`);
group1.push("Ященко");
document.write(`start = 2<br>${group1}<br>`);
group1.splice("Семенов",  "Ковалев", "Горбаченко");
document.write(`start = 3<br>${group1}<br>`);
let group3 = group1.concat(group2);
document.write(`start = 4<br>${group3}<br>`);




