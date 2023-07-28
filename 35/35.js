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

const images = [
  "img/flower1.png",
  "img/flower2.png",
  "img/flower3.png",
  "img/flower4.png",
  "img/flower5.png",
  "img/flower6.png",
  "img/flower7.png",
  "img/flower8.png",
];

let divCar = document.createElement("div");

document.body.appendChild(divCar);

for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  let carImage = document.createElement("img");
  carImage.src = car;
  carImage.style.width = "100px";
  carImage.style.cursor = "pointer";
  divCar.appendChild(carImage);
}

function downLoad() {
  let divImage = document.createElement("div");
  document.body.appendChild(divImage);
  for (let j = 0; j < images.length; j++) {
    let image = images[j];
    let imageImage = document.createElement("img");
    imageImage.src = image;
    imageImage.addEventListener("click", () => {
      for (let a = 0; a < cars.length; a++) {
        if (j === a) {
          let temp = images[j];
          images[j] = cars[a];
          cars[a] = temp;
          divImage.remove(imageImage);
          downLoad();
        }
      }
    });
    imageImage.style.width = "100px";
    imageImage.style.cursor = "pointer";
    divImage.appendChild(imageImage);
  }
}

downLoad();
