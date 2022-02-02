// let set = setInterval((timing) => {
//   console.log("hrllo",timing);
// clearInterval(set);
// }, 200);

// clearInterval();

// setTimeout(() => {
// console.log("setTimeout");
//   clearInterval(set);
// }, 1000);
console.log("abcd");
let immediateID = setImmediate(() => {
  // Run some code
  console.log("abcd12");
});
console.log("abcd13");
