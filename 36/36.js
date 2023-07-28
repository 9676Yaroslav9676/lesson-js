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

// let divFlower1 = document.createElement("div");

// document.body.appendChild(divFlower1);

// for (let i = 0; i < images.length; i++) {
//   let image = images[i];
//   let imageImg1 = document.createElement("img");
//   imageImg1.src = image;
//   imageImg1.style.width = "100px";
//   divFlower1.appendChild(imageImg1);
// }
for (let i = 0; i < 2; i++) {
  downLoad();
}

function downLoad() {
  let divFlower2 = document.createElement("div");
  document.body.appendChild(divFlower2);
  for (let j = 0; j < images.length; j++) {
    let image1 = images[j];
    let imageImg2 = document.createElement("img");
    imageImg2.src = image1;
    imageImg2.style.width = "100px";
    imageImg2.style.cursor = "pointer";
    imageImg2.addEventListener("click", () => {
      const firstElement = images.shift();
      images.push(firstElement);
      divFlower2.remove(imageImg2);
      downLoad();
    });
    divFlower2.appendChild(imageImg2);
  }
}
