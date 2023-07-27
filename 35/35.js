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
let divImage = document.createElement("div");

document.body.appendChild(divCar);
document.body.appendChild(divImage);

for (let i = 0; i < cars.length; i++) {
   let car = cars[i];
   let carImage = document.createElement("img");
   carImage.src = car;
   carImage.addEventListener("click", imageChange);
   carImage.style.width = "100px";
   divCar.appendChild(carImage);
}

for (let j = 0; j < images.length; j++) {
   let image = images[j];
   let imageImage = document.createElement("img");
   imageImage.src = image;
   imageImage.style.width = "100px";
   divImage.appendChild(imageImage);
}

function imageChange(e) {
  
}