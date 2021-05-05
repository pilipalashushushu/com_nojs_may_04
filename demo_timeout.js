console.log("program start");
setTimeout(() => {
  console.log("team A finish  work");
  setTimeout(() => {
    console.log("team C finish");
  }, 2000);
}, 2000);
setTimeout(() => {
  console.log("team B finish  work");
  setTimeout(() => {
    console.log("team D finish");
  }, 2000);
}, 2000);
console.log("program end");
