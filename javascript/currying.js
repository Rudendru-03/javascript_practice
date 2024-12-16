// currying --> it is a process in javascript that convert a function that takes multiple arguments into sequence of series of funciton that takes one argument each.

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

// By binding

// function multiply(b) {
//   let a = 10;
//   console.log("a : ", a);
//   console.log("b : ", b);
//   return a * b;
// }

// const multiplyByTwo = multiply.bind(null);
// console.log(multiplyByTwo(20));
