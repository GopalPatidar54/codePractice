var fullName = "gopal patidar";

var obj = {
  fullName: "ankur gahtori",
  prop: {
    fullName: "Harsh Dogra",
    firstName: function () {
      return this.fullName; // print harsh dogra
    },
  },
  firstName: () => {
    return this.fullName; // undefined because not working with arrow function
  },
};
console.log("🚀 ~ file: thisKeyword.js ~ line 12 ~ obj", obj.firstName());
