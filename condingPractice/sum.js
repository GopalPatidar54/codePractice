// sum(1)(2)(3)

let main = function (a) {
  let plush = function (b) {
    return b;
  };
  return plush + a;
};

// function sum(a) {
//   //   plush = function (b) {
//   //     return b;
//   //   };

//   if (typeof a == "function") {
//     console.log("🚀 ~ file: sum.js ~ line 18 ~ sum ~ plush", plush);
//     // let plush += sum(a);
//     return sum(a);
//   } else {
//     return a;
//   }
// }
const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

let first = sum(1)(2)();
console.log("🚀 ~ file: sum.js ~ line 12 ~ first", first);

console.log(sum(1)(2)(3));
