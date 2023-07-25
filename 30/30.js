let area = (a, b) => {
  let area = a * (b || a);
  return area;
};

console.log(area(4));
