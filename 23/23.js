let group1 = ["Агеев", "Дмитренко", "Иванов", "Семенов", "Шаповалов"];
let group2 = ["Філонов", "Изюмов", "Кабанов", "Дюдарев"];

document.write(`start = 0<br>${group1}<br>`);
group1.unshift("Березина");
document.write(`start = 1<br>${group1}<br>`);
group1.push("Ященко");
document.write(`start = 2<br>${group1}<br>`);
group1.splice(4, 1, "Ковалев", "Горбаченко");
document.write(`start = 3<br>${group1}<br>`);
let group3 = group1.concat(group2);
document.write(`start = 4<br>${group3}<br>`);

for (let i = 0; i < group3.length - 1; i++) {
  for (let j = 0; j < group3.length - i - 1; j++) {
    if (group3[j] > group3[j + 1]) {
      let temp = group3[j];
      group3[j] = group3[j + 1];
      group3[j + 1] = temp;
    }
  }
}

document.write(`start = 5<br>${group3}<br>`);
