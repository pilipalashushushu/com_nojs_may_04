const fs = require("fs");
const path1 = "data\\info.txt";
console.log("program start");
const data = fs.readFileSync(path1);
console.log("read data=\n", data.toString());
console.log("program end");
