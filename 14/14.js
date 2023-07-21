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

let placeImage = document.querySelector(".card");

for (let i = 0; i < images.length; i++) {
  let image = images[i];
  let placeSrc = document.createElement("img");
  placeSrc.src = image;

  placeImage.appendChild(placeSrc);
}
// images.forEach((image) => {
//   let placeSrc = document.createElement("img");
//   placeSrc.src = image;
//   placeImage.appendChild(placeSrc);
// });
