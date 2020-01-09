// quesrion one crate a pet array whit 3 strings "cat", "cow", "dog"
var petArray =["cat","cow","dog"];
//console log the second petArray
var numberOfpet = petArray.length;
console.log(petArray[1]);
//add an item using the push method
petArray.push("sheep");
//consolelog how menny items there are in the petArray using length
console.log(petArray.length);
var catobject  = {
  name: "theo",
  age: "5",
  color: "black"
}
console.log(catobject.color);
//take the catobject and place it inside a array
var catArray = ["theo","5","black"];
var numberOfcatArray = catArray.length;
console.log(numberOfcatArray);
//loop troug the catArray
for(var i = 0; i < numberOfcatArray; i++) {
    console.log(catArray[i]);
}
// create a function and it shoud accept one argumentand console log its value
function logToConsoll(code) {
    console.log("hello there " + code);
}
//call inn the logToConsoll value and pass troug donkey
logToConsoll("Donkey");
