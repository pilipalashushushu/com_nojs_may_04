function varTest() {
  var x = 100;
  if (true) {
    var x = 200;
    console.log("var x1", x);
  }
  console.log("var x2", x);
}
varTest();
function letTest() {
  let y = 31;
  if (true) {
    let y = 45;
    console.log("let y1", y);
  }
  console.log("let y2", y);
}
letTest();
