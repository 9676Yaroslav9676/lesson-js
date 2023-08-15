let arr = ["a", "b", "c", "d"];
let size = 3;
let result = [];
let count = 0;
let value = [];

for (let i = 0; i < arr.length; i++) {
  if (count < size) {
    value.push(arr[i]);
    count++;
  }

  if (count == size) {
    result.push(value);
    value = [];
    count = 0;
  }
}
if (value) {
  result.push(value);
}

console.log(result);
