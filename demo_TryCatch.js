console.log("start");
try {
  //throw new Error("HaHa")
  setTimeout(() => {
    //throw new Error("HaHa");
    try {
      throw new Error("HAHA in second");
    } catch (e) {
      console.warn("got an error", e);
    }
    console.log("continue");
  }, 2000);
} catch (e) {
  console.log("catch an error", e);
}
console.log("end");
