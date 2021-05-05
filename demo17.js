console.log("123" == 123, "123" === 123);
console.log("3.14" == 3.14, "3.14" === 3.14);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~console.log(
  "123" == 123,
  "123" === 123
);
console.log("3.14" == 3.14, "3.14" === 3.14);

troubles = [0, false, null, "", undefined, NaN];

for (let i = 0; i < troubles.length; i++) {
  for (let j = i + 1; j < troubles.length; j++) {
    const result1 = troubles[i] == troubles[j];
    const result2 = troubles[i] === troubles[j];
    console.log(
      `${troubles[i]} and ${troubles[j]} compare, "==" ==>${result1}, "===" ==>${result2}`
    );
  }
}
