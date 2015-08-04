var numbers = [];
for(var i = 0; i < 10; i++){
  numbers[i] = i;
}
var numbersCopy = numbers;    //  samenums is assigned a reference to the assigned array.

var numbers = [];
for(var i = 0; i < 100; i++){
  numbers[i] = i;
}
var numbersCopy = numbers;
numbers[0] = 999;
console.log(numbersCopy[0]);  //  999
//  Another note. This is a shallow copy.

//  Must create a deep copy to copy elements directly with no reference.
function copy(array1, array2){
  for(var i = 0; i < array1.length; i++){
    array2[i] = array1[i];
  }
}

var numbers = [];
for(var i = 0; i < 100; i++){
  numbers[i] = i;
}
var numbersCopy = [];
copy(numbers, numbersCopy);
numbers[0] = 400;
console.log(numbersCopy[0]);  //  0

var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
