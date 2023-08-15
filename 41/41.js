let arr = ["a", "b", "c", "d"];
let size = 2;
let result = [];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  let value = [];
  if (count < size) {
    value.push(arr[i]);
    count++;
  }

  if (count == size) {
    result.push(value);
    count = 0;
  }
}
console.log(result);
