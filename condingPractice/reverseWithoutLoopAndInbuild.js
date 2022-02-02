let str = "gopal";

// first solution
let reverStr = "";
function rever(str) {
  let char = str.substring(str.length - reverStr.length, str.length - 1 - reverStr.length);
  reverStr += char;
  if (char) {
    return rever(str);
  } else {
    return reverStr;
  }
}

console.log(rever(str));
console.log(rever(str)[2]);


// second solution
let reverStr2 = "";
let number = 0;
function calculateLength() {
  
  if (str[number]) {
    number++;
    calculateLength(str);
  }
  
}
calculateLength();



function reverse2() {
  let char = str[--number];
  if (char) {
    reverStr2 += char;
    return reverse2(str);
  } else {
    return reverStr2;
  }
}
console.log(reverse2());
