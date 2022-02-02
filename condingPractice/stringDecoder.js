const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder("utf8");

const cent = Buffer.from([0xc2, 0xa2]);
// console.log(decoder.write(cent));

const euro = Buffer.from([0xe2, 0x82, 0xac]);
// console.log(decoder.write(euro));
// __________________________________________
var d = new StringDecoder("utf8");
var b = Buffer.from("abc");

console.log(b); //write buffer
console.log(d.write(b)); // write decoded buffer;
// ++++++++++++++++++++++++++++
// const decoder = new StringDecoder("utf8");

const buf1 = new Buffer.from("this is a test");
console.log(decoder.write(buf1)); //prints: this is a test

const buf2 = new Buffer.from("7468697320697320612074c3a97374", "hex");
console.log(decoder.write(buf2)); //prints: this is a test

const buf3 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(decoder.write(buf3)); //prints: buffer
