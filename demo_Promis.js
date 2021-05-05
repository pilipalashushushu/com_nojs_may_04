console.log("program start");
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      //throw new Error("error in promise")
      console.log("no error");
      resolve(100);
    } catch (e) {
      reject(e);
    }
  }, 2000);
});
console.log("promise finished");
promise
  .then((result) => console.log("OK", result))
  .catch((error) => console.error("found exception", error));
console.log("program finish");
