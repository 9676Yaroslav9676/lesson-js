let currentCircle = 0;

const circles = document.querySelectorAll(".circle");

function changeCircle() {
  circles[currentCircle].classList.remove("active");

  currentCircle = (currentCircle + 1) % circles.length;

  circles[currentCircle].classList.add("active");
}
console.log(circles[currentCircle]);
changeCircle();

setInterval(changeCircle, 1500);
