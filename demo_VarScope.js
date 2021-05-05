function foo() {
  implyGlobal = 500;
  var current = 400;
  console.log("[foo]", current, implyGlobal);
}

//console.log("[outside1]", current)
//console.log("[outside1]", implyGlobal)
foo();
console.log("[outside1]", implyGlobal);

var g1 = 100;
g2 = 200;
console.log("g1g2=", g1, g2);
delete global.g1;
delete global.g2;
console.log("g1=", g1);
//console.log("g2=", g2)

function bar() {
  var var1 = 300;
  var2 = 400;
  console.log("var1, var2=", var1, var2);
  delete this.var1;
  delete this.var2;
  console.log("var1=", var1);
  //console.log("var2=", var2)
}
bar();
