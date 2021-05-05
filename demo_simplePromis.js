const myFunction = function () {
  throw new Error("oops");
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
console.log("delay then start");
delay(2000)
  .then(myFunction)
  .catch((e) => console.log("error is:", e));
console.log("delay then finished");
