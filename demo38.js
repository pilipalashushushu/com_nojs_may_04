const fs = require("fs");
const path1 = "data\\info.txt";
fs.open(path1, "r", (err, handle) => {
  if (err) {
    console.log("error, code=", err.code, " ,reason", err.message);
    return;
  }
  console.log("OK, do something next");
});
