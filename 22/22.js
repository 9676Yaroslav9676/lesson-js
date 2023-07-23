const random = [];

for (let i = 0; i < 20; i++) {
   let number = Math.floor(Math.random() * 101);
   random.push(number);
}

document.write(`Парні числа <br>`);
for (let number of random) {
   if (number % 2 == 0) {
      document.write(`${number}<br>`);
   }
}
document.write(`Числа які діляться на 3 <br>`);
for (let number of random) {
   if (number % 3 == 0) {
      document.write(`${number}<br>`);
   }
}
document.write(`Числа які діляться на 5 <br>`);
for (let number of random) {
   if (number % 5 == 0) {
      document.write(`${number}<br>`);
   }  
}
document.write(`Числа які діляться на 10 <br>`);
   for (let number of random) {
      if (number % 10 == 0) {
         document.write(`${number}<br>`);
      }
   }
   


document.write(`Масив = [${random}]`)
