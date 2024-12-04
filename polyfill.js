const name = {
  firstName: "Rudendru",
  lastName: "Rahul",
};

let printName = function (city, state) {
  console.log(
    this.firstName + " " + this.lastName + " From " + city + " and " + state
  );
};

let printMyName = printName.bind(name);
printMyName("Delhi", "Bihar");

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name);
printMyName2("Delhi");
