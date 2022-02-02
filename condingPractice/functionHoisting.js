// const htpp = require("./crypto");
// console.log("🚀 ~ file: functionHoisting.js ~ line 2 ~ htpp", htpp);
greetings("first");

function greetings(a) {
  console.log(a);
}
greetings("second");

var greetings = function (a) {
  console.log(a);
};

greetings("thirrds");
