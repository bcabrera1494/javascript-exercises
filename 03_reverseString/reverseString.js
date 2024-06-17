const reverseString = function(str) {
let string = "";
let stringArray = Array.from(string);
let reverseArray = reverse(stringArray);
return reverseArray;
};

console.log(reverseString('hello there'));
// Do not edit below this line
module.exports = reverseString;
