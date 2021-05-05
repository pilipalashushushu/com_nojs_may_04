const fs = require("fs");
var data = "";
path1 = "data\\info.txt";

var readerStream = fs.createReadStream(path1);
readerStream.setEncoding("UTF8");
readerStream.on("data", (chunk) => {
  data += chunk;
});
readerStream.on("end", () => {
  console.log(data);
});
readerStream.on("error", (err) => {
  console.log(err.stack);
});
console.log("program ended");
