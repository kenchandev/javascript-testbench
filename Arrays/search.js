//  Example call:
//  $ node search.js Bar
var names = ["Foo", "Bar", "John", "Amy"];

var enteredName = process.argv[2];
var position = names.indexOf(enteredName);
if(position >= 0){
  console.log("Found " + enteredName + " at position " + position + ".");  
}
else{
  console.log(enteredName + " not found in the array.");
}