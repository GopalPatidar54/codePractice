// let str = "gopal patidar mnt kt a ytlk";
let str = "Z<*Zj";
let copyStr = str;

let reverseStr = "";

for (let end = str.length - 1, start = 0; end >= 0; end--, start++) {
  // if (copyStr[start] === " ") {
  //   reverseStr = reverseStr + " ";
  //   ++end;
  // } else if (str[end] !== " ") {
  //   reverseStr = reverseStr + str[end];
  // } else if (str[end] === " ") {
  //   reverseStr = reverseStr + str[--end];
  // }
  // match(/[a-z]/i)
  if (copyStr[start] && !copyStr[start].match(/[a-z]/i)) {
    reverseStr = reverseStr + copyStr[start];
    console.log("🚀 ~ file: reverseStringWithSpace.js ~ line 19 ~ copyStr[start]", copyStr[start])
    ++end;
  } else if (str[end] && str[end].match(/[a-z]/i)) {
    reverseStr = reverseStr + str[end];
    // console.log("🚀 ~ file: reverseStringWithSpace.js ~ line 24 ~ str[--end]", str[end])

  } else if (str[end] && !str[end].match(/[a-z]/i)) {
    reverseStr = reverseStr + str[--end];
    console.log("🚀 ~ file: reverseStringWithSpace.js ~ line 24 ~ str[--end]-3", str[end])
  }
}

console.log(str, "\n", reverseStr);
