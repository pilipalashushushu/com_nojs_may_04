global.coffee = "americano";
global.juice = "lemonade";
dessert = "pancake";
var bread = "pan";
function printSomething(n) {
  console.log(global[n]);
  console.warn(global[n]);
  console.error(global[n]);
}
console.time("xyz");
printSomething("coffee");
printSomething("steak");
console.timeEnd("xyz");
console.time("yyy");
printSomething("juice");
printSomething("dessert");
printSomething("bread");
console.timeEnd("yyy");
