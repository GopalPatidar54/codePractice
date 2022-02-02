// setTimeout(() => {
//   console.log("number");
// }, 0);
// Promise.resolve(3).then(console.log);
// console.log("number1");

// try {
//   const n = 1;
//   const a = n + 1;
//   console.log("🚀 ~ file: console.js ~ line 10 ~ a", a)
// } catch (ee) {
//   console.log(ee.name);
// }
// ******************

let obj = {
  name: "gopal",
  lastName() {
    return this.name;
  },
};
new Promise ()setTimeout(obj.lastName.bind(this), 0));

// let number = 10;
// function testing(number) {
//   // console.log(number);
//   // console.log(this.number);
// }
// testing(5);

// &&&&&&&&&&&&&&&&&

/**var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  },
};
myObject.func();
*/

// &&&&&&&&&&&&&&&&&&&&&

/**(function () {
  var a = b = 3;
})();

console.log(typeof gopal);
console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));
*/
// 7&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

/**console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

setTimeout(() => {
  console.log("3");
}, 0);

console.log("4");
*/
/*
function foo1()
{
  return {
    bar: "hello"
  };
}
console.log("🚀 ~ file: console.js ~ line 50 ~ foo1", foo1()) retunr object

function foo2()
{
  return  
  {
    bar: "hello"
  };
}
console.log("🚀 ~ file: console.js ~ line 58 ~ foo2", foo2())  return undefine
*/
