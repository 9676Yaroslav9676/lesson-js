const poem = ["Мороз", "і", "сонце", "день", "чудовий"];
let numberWord;
let word = "";

do {
      numberWord = prompt("Введіть номер слова яке хочете замінити від 1 до 5");
      if (numberWord == null) {
            break;
      } else {
            Number(numberWord);
      }
} while (numberWord == NaN || numberWord > 5 || numberWord <= 0);

numberWord -= 1;
do {
      word = prompt("Введіть слово на яке хочете замінити");
} while (Number(word) || word === "" || word == 0);

if (numberWord !== null) {
      poem.splice(numberWord, 1, word);
}

document.write("<p>" + poem.join(" ") + ".</p>");
