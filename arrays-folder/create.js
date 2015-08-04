var numbers = [];
console.log(numbers.length);            //  0

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);            //  5

var numbers = new Array();      
console.log(numbers.length);            //  0

var numbers = new Array(1, 2, 3, 4, 5); //  Specify set of elements
console.log(numbers.length);            //  5

var numbers = new Array(10);            //  Specify length of array
console.log(numbers.length);            //  10

var items = [1, "Joe", true, null];     //  Different types of items

var number = 3;
var elements = [23, 24, 25];
console.log(Array.isArray(number));     //  false
console.log(Array.isArray(elements));   //  true
