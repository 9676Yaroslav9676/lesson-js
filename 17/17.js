let randomValue = 0;
let count = 0;
for (let i = 0; i < 5; i++) {
  randomValue = Math.floor(Math.random() * 256);
  rV = Math.floor(Math.random() * 13);
  zV = Math.floor(Math.random() * 135);
  count += 1;
  document.write(
    `<p class="place" style="background-color: rgb(${randomValue},${rV}, 134)">Абзац ${count}</p>`
  );
}
