//  Calling a method from another object of a different context. (this)
//  Difference between call and apply. (Parameters sent with commas and inside an array respectively.)

// Define a simple "class"
function Accommodation() {
  this.isAlarmed = false;
}
// Create an object whose functions can be used in conjunction with an object in your code
// – also known as a 'mixin'
var AlarmSystem = {
  arm: function(message) {
    this.isAlarmed = true;
    console.log(message);
  },
  disarm: function(message) {
    this.isAlarmed = false;
    console.log(message);
  }
};

var myHouse = new Accommodation();
// Pass the object instance context into the 'arm' function using 'call'.
AlarmSystem.arm.call(myHouse, "Alarm activated");
// The 'arm' function's 'this' value was the object instance, therefore the 'isAlarmed' property
// of myHouse was changed
console.log(myHouse.isAlarmed); // true
// The same effect can be achieved using 'apply', this time the parameters are sent as an array
AlarmSystem.disarm.apply(myHouse, ["Alarm deactivated"]);
console.log(myHouse.isAlarmed); // false