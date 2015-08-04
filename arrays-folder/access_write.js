//  Generate array with values 0 to 99
var numbers = [];
for(var i = 0; i < 100; i++){
  numbers[i] = i;
}
console.log(numbers);

//  Access values from array using []
var numbers = [5, 6, 7, 8, 9];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(sum);

//  Access values from array sequentially
var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var sum = 0;
for(var i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
console.log(sum);