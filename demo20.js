function a3() {
  console.log("[before],token=", token);
  var token = "abc";
  //for (var i = 0; i < 10; i++) {
  for (let i = 0; i < 10; i++) {
    console.log("i=", i);
  }
  console.log("outside the loop, i=", i);

  console.log("token=", token);
}
a3();
