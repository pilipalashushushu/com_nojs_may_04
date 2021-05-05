function echoMe(name) {
  console.log("echo:" + name);
}
echoMe("Mark");
echoMe();
echoMe("a", "b");
echoMe(["a", "b"]);

function mySum() {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(mySum());
console.log(mySum(1, 2, 3, 4, 5));
console.log(mySum("a", "b", "c"));
const a1 = [1, 2, 3, 4, 5];
console.log(typeof mySum(a1), mySum(a1));
// using apply
console.log("using apply", mySum.apply(null, a1));
console.log("using ...", mySum(...a1));
const a2 = { name: "Mark", age: 45 };
console.log(a2);
echoMe(a2);
function echoPerson(user) {
  console.log("echo name:", user.name, " ,age:", user.age);
}
echoPerson(a2);

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
