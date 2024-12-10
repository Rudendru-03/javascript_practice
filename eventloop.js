console.log("start");

setTimeout(() => {
  console.log("set Timeout");
});

setImmediate(() => console.log("setImmediate"));

process.nextTick(() => console.log("nextTick"));

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("end");
