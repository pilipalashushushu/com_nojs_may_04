function Car() {
  this.speed = 0;
  this.number = "";
  this.fuel = 0;
  this.setSpeed = function (speed) {
    this.speed = speed;
  };
  this.isOverSpeed = function (speedLimit) {
    return this.speed > speedLimit;
  };
}
function driveCar() {}
console.log(typeof Car, typeof driveCar);

var myCar1 = new Car();
console.log(typeof myCar1);
myCar1.setSpeed(60);
myCar1.number = "abc-1234";
console.log("my car:", myCar1.number, " has speed=", myCar1.speed);
console.log(
  myCar1.isOverSpeed(100),
  myCar1.isOverSpeed(60),
  myCar1.isOverSpeed(50)
);
