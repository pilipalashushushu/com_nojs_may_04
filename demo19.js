function mul1(a, b) {
  return a * b;
}
console.log(mul1(2, 2));
const a1 = function (a, b) {
  return a * b;
};
console.log(a1(3, 3));
var token = "abc";
token2 = "ABC";
const a2 = function () {
  var token = "def";
  token2 = "DEF";
  token3 = "GHI!!";
  console.log("[a2], token=", token, token2);
};
console.log("before call a2", token, token2);
a2();
console.log("after call a2", token, token2, token3);
