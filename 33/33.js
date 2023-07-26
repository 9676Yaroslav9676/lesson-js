let depthEffect = (a, b) => {
  for (let i = 0; i < 10; i++) {
    if (i > 0) {
      a = a - 60;
    }
    let left = (window.innerWidth - a) / 2;
    let top = (window.innerHeight - a) / 2;
    document.write(
      `<img style = "width: ${a}px; position: absolute; left: ${left}px; top: ${top}px;" src = "${b}"></img>`
    );
  }
};

depthEffect("600", "https://source.unsplash.com/NN83EXPgQ5c/600x600");
