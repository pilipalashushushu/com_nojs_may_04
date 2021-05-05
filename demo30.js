function demo30() {
  let l1 = 5;
  var r1 = 5;
  console.log("r1=", r1);
  var r1 = 6;
  console.log("r1=", r1);
  //let l1 = 6
  console.log(l1);
}
demo30();
function demo30_2() {
  var a = 100;
  var b = 200;
  if (a === 100) {
    let a = 50;
    var b = 400;
    console.log("[1], a=", a);
    console.log("[2], b=", b);
  }
  console.log("[3], a=", a);
  console.log("[4], b=", b);
}
demo30_2();
