"use strict";

// console.log("This value : ", this);

// function logThis() {
//   console.log("This value inside the function without strict mode : ", this);
// }

// logThis();

// var arrowfun = () => {
//   console.log(this);
// };

// arrowfun();

// function fun() {
//   let a = 9;
//   var bool = false;
//   console.log("this fun : ", this);
//   var arrowfun = () => {
//     console.log("ARROW  fun : ", this);
//   };
//   arrowfun();
// }

// fun();

const obj = {
  name: "John",
  logName: function () {
    console.log("this inside logName: ", this);
  },
  logNameArrow: () => {
    console.log("this inside logNameArrow: ", this);
  },
  log: function () {
    var name = () => {
      console.log(this);
    };
    name();
  },
};

// obj.logName();
obj.logNameArrow();
obj.log();
