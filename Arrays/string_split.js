var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for(var i = 0; i < words.length; i++){
  console.log("Word " + i + ": " + words[i]);
}