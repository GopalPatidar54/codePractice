let str = "my name is gopal";
// let outPut = "ym eman si lapog";

let array = str.split(" ");

let outPut = "";

for (let item of array) {
  outPut = outPut + " " + item.split("").reverse().join("");
}
console.log("outPut", outPut);
