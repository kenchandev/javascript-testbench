//  Example call:
//  $ node search.js Bar
var names = ["Foo", "Bar", "John", "Amy", "Bar"];

var enteredName = process.argv[2];
var firstPos = names.indexOf(enteredName);
var lastPos = names.lastIndexOf(enteredName);
if(firstPos >= 0 && lastPos >= 0 && firstPos !== lastPos){
  console.log("Found " + enteredName + " at position " + firstPos + ".");
  console.log("Found " + enteredName + " at position " + lastPos + ".");    
}
else if(firstPos >= 0 && lastPos >= 0 && firstPos === lastPos){
  console.log("Found " + enteredName + " at position " + firstPos + ".");
}
else{
  console.log(enteredName + " not found in the array.");
}

