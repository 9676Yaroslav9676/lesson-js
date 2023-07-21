let books = [
  {
    name: "Л.Н. Толстой. Война и мир\n",
    categories: [],
  },
  {
    name: "Джоан Роулинг.Гарри Поттер\n",
    categories: [1],
  },
  {
    name: "Братья Стругацкие. Понедельник начинается в субботу.\n",
    categories: [1, 2],
  },
  {
    name: "Агата Кристи. Вечеринка в Хэллоуин.\n",
    categories: [1, 2, 3],
  },
  {
    name: "Джонатан Страуд. Кричащая лестница.\n",
    categories: [1, 2, 3, 4],
  },
  {
    name: "Диана Маш. Заноза для драконьего военачальника\n",
    categories: [1, 3],
  },
  {
    name: "Кирилл Круганский. Смешно или страшно.\n",
    categories: [2, 4],
  },
  {
    name: "Стивен Кинг. Мизери.\n",
    categories: [4],
  },
  {
    name: "Эдгар По. Очень страшные истории.\n",
    categories: [3, 4],
  },
  {
    name: "А. Маринина. Безупречная репутация",
    categories: [3],
  },
];

let choosedCategories = [];

let oneQuestion = confirm("Про чаклунство?");
if (oneQuestion) choosedCategories.push(1);
let twoQuestion = confirm("Смішне?");
if (twoQuestion) choosedCategories.push(2);
let threeQuestion = confirm("Детектив?");
if (threeQuestion) choosedCategories.push(3);
let fourQuestion = confirm("Страшне?");
if (fourQuestion) choosedCategories.push(4);

let result = [];
for (let i = 0; books.length > i; i++) {
  let book = books[i].categories;
  outerLoop: for (let j = 0; book.length > j; j++) {
    for (let c = 0; choosedCategories.length > c; c++) {
      if (choosedCategories[c] == book[j]) {
        result.push(books[i].name);
        break outerLoop;
      }
    }
  }
}

if (result.length == 0) result.push(books[0].name);

alert(result.join(""));

// let result = books.filter((book) =>
//   book?.categories?.some((cat) => choosedCategories.includes(cat))
// );

// let newArr = [];
// result.forEach((book) => {
//   newArr.push(book.name);
// });

// alert(newArr.join(""));

// alert(result.map((book) => book.name).join(""));
