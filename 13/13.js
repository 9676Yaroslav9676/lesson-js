let books = [
  "Л.Н. Толстой. Война и мир\n",
  "Джоан Роулинг.Гарри Поттер\n",
  "Братья Стругацкие. Понедельник начинается в субботу.\n",
  "Агата Кристи. Вечеринка в Хэллоуин.\n",
  "Джонатан Страуд. Кричащая лестница.\n",
  "Диана Маш. Заноза для драконьего военачальника\n",
  "Кирилл Круганский. Смешно или страшно.\n",
  "Стивен Кинг. Мизери.\n",
  "Эдгар По. Очень страшные истории.\n",
  "А. Маринина. Безупречная репутация",
];

let recomBooks = [];

let oneQuestion = confirm("Про чаклунство?");
let twoQuestion = confirm("Смішне?");
let threeQuestion = confirm("Детектив?");
let fourQuestion = confirm("Страшне?");

if (oneQuestion) {
  recomBooks = books.slice(1, 6);
}
if (twoQuestion) {
  let array1 = books.slice(2, 5);
  array1.push(books[6]);
  recomBooks.push(...array1);
}
console.log(recomBooks);
console.log(books);
