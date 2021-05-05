var array2 = [3, 4, 5, 6, 7];

const x1 = array2.pop();
console.log(x1, array2);
console.log(array2.pop(), array2);
array2.push(100);
console.log(array2);
console.log(array2.shift(), array2);
console.log(array2.shift(), array2);
array2.unshift(-5);
console.log("unshift", array2);
array2.unshift(null);
array2.push("hello world");
console.log(array2);
