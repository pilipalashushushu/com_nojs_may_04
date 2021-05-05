console.log("demo40 start");
const events = require("events");
const eventEmitter = new events.EventEmitter();
const firstHandler = function doSomethinFirst() {
  console.log("do something when first happen");
  setTimeout(() => {
    console.log("finish, do second then...");
    eventEmitter.emit("second");
  }, 5000);
};

eventEmitter.on("first", firstHandler);

eventEmitter.on("second", () => {
  console.log("data received successfully");
  setTimeout(() => {
    console.log("finally finish everything");
  }, 5000);
});

eventEmitter.emit("first");
console.log("demo40 stop");
