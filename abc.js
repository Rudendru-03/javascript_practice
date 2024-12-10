const obj = {
  name: "John",
  age: 30,
  greet: function (city, state, country) {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old, from ${city} ${state}, ${country}`
    );
    console.log("arr : ", arr);
    // console.log(
    //   `Hello, my name is ${this.name} and I'm ${this.age} years old, from ${arr[0]} ${arr[1]}, ${arr[2]}`
    // );
  },
};

const obj2 = {
  name: "Jane",
  age: 25,
};

// obj.greet.call(obj2, "Delhi", "India");
obj.greet.apply(obj2, ["punjabi Bagh", "Delhi", "India"]);
