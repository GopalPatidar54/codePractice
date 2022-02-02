// let a = [1, 2, 3, 8, 8, 2];

// a = a.filter((item, index) => a.indexOf(item) === index);

// *********************
let a = [{ b: 1 }, { c: 1 }, { c: 1 }, { c: 2 }, { c: 2 }, , { d: 1 }];

let obj = {};
let dublicat = [];
for (let item of a) {
  let key = JSON.stringify(item);
  if (obj[key]) {
    dublicat.push(item);
  }
  obj[key] = 1;
}
console.log("🚀 ~ file: removeDublicate.js ~ line 12 ~ dublicat", dublicat);

// *********************

// let str = "gopal";

// let r = "";
// let number = 0;

// function revers() {
//   if (str[number]) {
//     r = str[number++] + r;
//     revers(str);
//   } else {
//     return r;
//   }
// }
// // console.trace();

// a = 10;
// console.log(a);
// console.log(this.windows.a);

// // console.log("🚀 ~ file: removeDublicate.js ~ line 8 ~ r", revers(str));
