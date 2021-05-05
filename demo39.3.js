const fs = require("fs");
const path1 = "data\\info.txt";
function FileObject() {
  this.fileName = "";
  this.file_exists = function (callback) {
    console.log("about to open:", this.fileName);
    fs.open(this.fileName, "r", (err, handle) => {
      if (err) {
        console.log("can not open file", this.fileName);
        callback(err);
        return;
      }
      console.log("the file we process is:", this.fileName);
      console.log("now we can use file handler:", handle);
      fs.close(handle, function () {});
      callback(null, true);
    });
    console.log("this will no longer exist");
  };
}
const fo = new FileObject();
fo.fileName = path1;
fo.file_exists((error, results) => {
  if (error) {
    console.log("error in file_exists", JSON.stringify(error));
    return;
  }
  console.log("file exists!", results);
});
