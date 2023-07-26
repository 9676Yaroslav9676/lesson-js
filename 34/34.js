let cars = [
  "img/car1.jpg",
  "img/car2.jpg",
  "img/car3.jpg",
  "img/car4.jpg",
  "img/car5.jpg",
  "img/car6.jpg",
  "img/car7.jpg",
  "img/car8.jpg",
];
function createNewImage(e) {
  let div = document.createElement("div");
  div.classList.add("overlay");
  document.body.append(div);
  let clickImage = e.target;
  const modalWindow = new Image();
  modalWindow.src = clickImage.src;
  div.append(modalWindow);
  div.addEventListener("click", (e) => {
    div.remove(modalWindow);
  });
}

for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  let placeSrc = document.createElement("img");
  placeSrc.src = car;
  placeSrc.addEventListener("click", createNewImage);
  placeSrc.onmouseover = (e) => {
    e.target.style.width = "115px";
  };
  placeSrc.onmouseleave = (e) => {
    e.target.style.width = "110px";
  };
  placeSrc.style.width = "110px";
  placeSrc.style.cursor = "pointer";
  document.body.appendChild(placeSrc);
}
