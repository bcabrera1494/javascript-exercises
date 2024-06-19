const reverseString = function(string) {
let stringArray = Array.from(string);
console.log(stringArray);
let reverseArray = [];
    for (let i = stringArray.length -1; i >=0; i--){
    reverseArray.push(stringArray[i]);
    }
console.log(reverseArray);
let reverseArrayString = reverseArray.toString();
return reverseArrayString;
};

console.log(reverseString('hello there'));
// Do not edit below this line
module.exports = reverseString;
