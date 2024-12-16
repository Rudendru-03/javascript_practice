// const obj = { a: 1, b: 2 };
// const arr = [obj, { ...obj }];
// console.log(arr[1].a === obj.a);

/* const arr = [1, 2, 3, 4, 5];
const maparr = arr.map((item) => {
  if (item === 3) return;
  return item * 2;
});
console.log(maparr); */

/* let a = 4;
let b = "4";
console.log(typeof a, typeof b, a == b, a === b);
console.assert(a === b); */

// console.log("A" == 65);

function greet(name) {
  this.name = name;
}
// greet("Rudendru");

greet.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const rudendru = new greet("Rudendru");
rudendru.sayHello();
