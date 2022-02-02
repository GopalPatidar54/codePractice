let k = 0;
let counter = function () {
  return () => k++;
};
console.log(counter()());
console.log(counter()());
console.log(counter()());
// ********************
// /**
let clArray = [];
function closerArray() {
  for (var i = 0; i < 5; i++) {
    clArray[i] = function () {
      return "gopal" + i;
    };
  }
  return clArray;
}
closerArray();
for (var i = 0; i < 5; i++) {
  console.log(clArray[i]());
}
//  */
// ****************************
/*let clArray = [];
function closerArray(i) {
  return function () {
    return "gopal" + i;
  };
}

for (var i = 0; i < 5; i++) {
  clArray[i] = closerArray(i);
}
for (let item of clArray) {
  console.log(item());
}
**/
