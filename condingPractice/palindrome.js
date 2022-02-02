// Write a simple function (less than 160 characters) that returns a boolean
// indicating whether or not a string is a palindrome.

/*
let str = "A car, a man, a maraca".toLowerCase();
// str = str.replace(/\W/g, "").toLowerCase();
str = str.replace(",", "").toLowerCase();

console.log("🚀 ~ file: palindrome.js ~ line 6 ~ str", str);
console.log(
  (function () {
    console.log("🚀", str.split("").reverse().join(""));
    return str === str.split("").reverse().join("") ? true : false;
  })()
);
*/

// function sum(a, b) {
//   if (!b) {
//     return function (b) {
//       return a + b;
//     };
//   } else {
//     return a + b;
//   }
// }

// console.log(sum(2, 3)); // Outputs 5
// console.log(sum(2)(3));

// var d = {};
// ["zebra", "horse"].forEach(function (k) {
//   d[k] = undefined;
// });
// console.log("🚀 ~ file: palindrome.js ~ line 32 ~ d", d);

// var arr1 = "john".split("");
// var arr2 = arr1.reverse();
// var arr3 = "jones".split("");
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log("🚀 ~ file: palindrome.js ~ line 51 ~ a", JSON.stringify(a));

console.log(a[b]);
