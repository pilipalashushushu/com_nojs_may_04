const fs = require("fs");
const path1 = "data\\info.txt";
console.log("program start");
fs.open(path1, "r", (err, handle) => {
  if (err) {
    return console.log(err);
  }
  console.log("file open, continue");
  let buffer = new Buffer.alloc(10000);
  fs.read(handle, buffer, 0, 10000, null, (err, length) => {
    if (err) {
      return console.log(err);
    }
    console.log("total:" + length + " being read");
    const result = buffer.slice(0, length);
    console.log("data read:" + result.toString());
    fs.close(handle, () => {
      console.log("close successfully");
    });
  });
});
console.log("program end");
