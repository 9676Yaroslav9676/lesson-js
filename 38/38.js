for (let i = 0; i < 7; i++) {
  let paragraphNumber = document.createElement("p");
  paragraphNumber.style.height = "20px";
  let values = [];
  for (let j = 0; j < 3; j++) {
    let value = Math.floor(Math.random() * 255);
    values.push(value);
  }
  paragraphNumber.style.background = `rgb(${values[0]}, ${values[1]}, ${values[2]})`;
  document.body.appendChild(paragraphNumber);
}
