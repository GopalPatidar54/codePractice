// console.log(a);
// a = 9;
// var a = 0;
// console.log(a);
// ***********************
// console.log(a);
// // a = 9;
// var a = 0;
// console.log(a);
// ***********************

var a = 9;
console.log("🚀 ~ file: variableHoisting.js ~ line 13 ~ a", a);

(() => {
    console.log("🚀 ~ file: variableHoisting.js ~ line 17 ~ a", a);
  var a = "ankur";
})();

if (true) {
  let a = "gopal";
}
console.log("🚀 ~ file: variableHoisting.js ~ line 15 ~ a", a);
