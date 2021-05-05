var array2 = [3, 4, 5, 6, 7];
const result1 = array2.join();
console.log(typeof result1, result1);
const result2 = array2.join("-");
console.log(typeof result2, result2);
var array3 = ["www", "uuu", "com", "tw"];
console.log(array3.join("."));
var array5 = Array.from("HelloWorldNodeJS");
console.log(array5);
//
var array4 = [3, 1, 4, 5, 9, 80, 27, 100];
console.log(typeof array4.sort());
const result3 = array4.sort();
console.log(array4);
console.log(result3);

var sum = 0;
array4.forEach(function (e) {
  sum += e;
}, this);
console.log(sum);

var sum2 = 0;
array4.forEach(function (e) {
  sum2 += e;
}, null);
console.log("sum2=", sum2);
console.log("array4", array4);
// hold on...
const reult5 = array4.forEach(function (e) {
  e *= 2;
}, this);
console.log("array4 now=", array4);
