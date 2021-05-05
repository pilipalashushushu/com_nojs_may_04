function Car() {}

Car.prototype.speed = 0;
Car.prototype.number = "";
Car.prototype.fuel = 0;
Car.prototype.setSpeed = function (speed) {
  Car.prototype.speed = speed;
};
Car.prototype.isOverSpeed = function (speedLimit) {
  return Car.prototype.speed > speedLimit;
};

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

//--------------------------------------------------------

function HybridCar() {}
HybridCar.prototype = new Car();
HybridCar.prototype.__proto__ = Car.prototype;
HybridCar.prototype.batteryLimit = 50000;
HybridCar.prototype.totalEnergy = function () {
  return this.fuel * 21 + this.batteryLimit / 500;
};

var myCar2 = new HybridCar();
console.log(typeof myCar1);
myCar2.setSpeed(60);
myCar2.number = "abc-1234";
console.log("my car:", myCar2.number, " has speed=", myCar2.speed);
myCar2.fuel = 40;
console.log("total power for KM:" + myCar2.totalEnergy());
console.log(
  myCar2.isOverSpeed(100),
  myCar2.isOverSpeed(60),
  myCar2.isOverSpeed(50)
);
console.log("my car:", myCar2.number, " has speed=", myCar2.speed);
