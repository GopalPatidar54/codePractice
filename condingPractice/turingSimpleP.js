// 2 ,10,C,D,+
let a = ["2", "10", "D", "C", "+"];

// 2,10,12

let arr = [];
let pre = 0;
for (let item of a) {
  if (item == "C") {
    pre -= arr.pop();
  } else if (item == "D") {
    let len = arr.push(2 * arr[arr.length - 1]);
    pre += arr[len - 1];
  } else if (item == "+") {
    let len = arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    pre += arr[len - 1];
  } else {
    arr.push(Number(item));
    pre += Number(item);
  }
}
console.log("🚀 ~ file: turingSimpleP.js ~ line 19 ~ arr", arr);
console.log("🚀 ~ file: turingSimpleP.js ~ line 20 ~ pre", pre);
