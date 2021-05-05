function oops() {
  throw new Error("oops something happen");
}

console.log("start program");
try {
  oops();
} catch (e) {
  console.log("oops generate error...");
}

console.log("start without try/catch");
oops();
console.log("end program");
