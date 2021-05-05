buf = new Buffer.alloc(20);
len = buf.write("ABC");
buf2 = Buffer.from([97, 98, 99]);
buf3 = Buffer.from("Hello World");

console.log("dump buffer directly:", buf.toString("hex", 0, 3));
console.log("dump buffer directly:", buf.toString("hex"));
console.log("dump buffer directly:", buf.toString("utf-8"));
console.log("buffer2:", buf2.toString("hex"));
console.log("buffer2:", buf2.toString("ascii"));
console.log("buffer3:", buf3.toString("ascii"));
console.log("buffer3:", buf3.toString("utf-8"));
