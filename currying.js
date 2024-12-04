// currying --> it is a process in javascript that convert a function that takes multiple arguments into sequence of series of funciton that takes each one argument.

// we can do function currying by using bind method and by using closure .

// function curry(arg1) {
//   return function (arg2) {
//     return function (arg3) {
//       return arg1 + arg2 + arg3;
//     };
//   };
// }

// const value = curry(5)(6)(7);
// console.log(value);

// function add(a, b, c) {
//   console.log(a + b + c);
// }

// add(3, 4, 3);

function multiply(a, b) {
  return a * b;
}

// const res = multiply(3, 4);
// console.log(res);

const multiplydumy = multiply.bind(this, 2);

// function multiplydumy(b) {
//   let a = 2;
//   return a * b;
// }

const res2 = multiplydumy(3);
console.log(res2);
