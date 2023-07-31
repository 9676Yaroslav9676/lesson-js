const cars = [
  "img/car1.jpg",
  "img/car2.jpg",
  "img/car3.jpg",
  "img/car4.jpg",
  "img/car5.jpg",
  "img/car6.jpg",
  "img/car7.jpg",
  "img/car8.jpg",
];

for (let i = 0; i < 2; i++) {
  downLoad();
}

function downLoad() {
  let imageDiv = document.createElement("div");
  document.body.appendChild(imageDiv);

  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    let imageImg = document.createElement("img");
    imageImg.src = car;
    imageImg.style.width = "100px";
    imageImg.style.cursor = "pointer";
    imageImg.addEventListener("click", () => {
      if (i === cars.length - 1) {
        console.log(cars[i]);
        cars[i] = cars[0];
      } else {
        cars[i] = cars[i + 1];
      }
      imageDiv.remove(imageImg);
      downLoad();
    });
    imageDiv.appendChild(imageImg);
  }
}
