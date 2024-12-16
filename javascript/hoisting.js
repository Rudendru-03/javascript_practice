// Hoisting : it is a concept in that we can access the value of variable and thefunciton even before the intialization, and without getting hte an error this is because of memry creation phase;

console.log(fun());
// console.log(arr());
console.log(x);

function fun() {
  console.log("this is a function");
}

var x = 10;

// var arr = () => {
//   console.log("this is an arrow function");
// };
