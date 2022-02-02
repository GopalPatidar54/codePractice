class myClass {
  constructor(name) {
    console.log("🚀 ~ file: class.js ~ line 3 ~ myClass ~ name", name);
    this.myFun()
  }

 get myFun() {
    console.log("🚀 ~ file: class.js ~ line 7 ~ myClass ~ myFun ~ params", params);
  }
}
let abcs = new myClass("gopal");
abcs.get
.myFun();
