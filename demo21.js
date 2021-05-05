function x1(x, y) {
  return x * y;
}
const x2 = function (x, y) {
  return x * y;
};
const x3 = (x, y) => {
  return x * y;
};
const x4 = (x, y) => x * y;
console.log(x1(2, 3), x2(4, 5), x3(6, 7), x4(8, 9));
var choosen = [11, 12, 13, 14, 15, 16, 17];
for (index in choosen) {
  console.log(`index=${index}, value=${choosen[index]}`);
}
for (item of choosen) {
  console.log(`value=${item}`);
}
const dict1 = { name: "Mark", location: "Taipei", role: "R&D", age: 45 };
for (index in dict1) {
  console.log("index=", index, " ,value=", dict1[index]);
}
