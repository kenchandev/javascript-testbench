// Define a "class" with two methods
function Accommodation() {}

Accommodation.prototype.lock = function() {};
Accommodation.prototype.unlock = function() {};

// Define a constructor function for what will become our subclass
function House(defaults) {
  defaults = defaults || {};
  this.floors = 2;
  this.rooms = defaults.rooms || 7;
}

House.prototype = new Accommodation();

House.prototype.constructor = House;

// Create an instance of a House, inheriting properties and methods from Accommodation, also
var myHouse = new House();
// Pass in a value for 'rooms' to set that value at the point of object instantiation
var myNeighborsHouse = new House({
  rooms: 8
});

console.log(myHouse.rooms); // 7 (the default value set in the House constructor function)
console.log(myNeighborsHouse.rooms); // 8
// Methods that were set on Accommodation are also available to objects created from House
myHouse.lock();
myNeighborsHouse.unlock();
// Objects created from House report that fact, thanks to us fixing the 'constructor'
// property earlier
console.log(myHouse.constructor === House); // true
console.log(myHouse.constructor === Accommodation); // false, since we pointed the constructor to House
// The instanceof keyword looks up the prototype chain, so can also be used to check if an
// object instance is derived from a particular parent "class"
console.log(myNeighborsHouse instanceof House); // true
console.log(myNeighborsHouse instanceof Accommodation); // true, since House inherits Accommodation