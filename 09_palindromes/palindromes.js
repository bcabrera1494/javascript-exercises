const palindromes = function (string) {
//PSEUDOCODE
//Extract characters from string into an array
const origArray = string.split("");
//Remove punctuation
const puncRm = origArray.filter(str => !str.match(/[^\w\s]/g));
//Reverse the array
const backwards = puncRm.reverse();
//Remove the , between each letter
const fixPal = backwards.join("");
//Create a new string with the reversed array
const pal = fixPal.toString();
//Convert string to lowercase
const lCase = pal.toLowerCase();
//Remove punctuation from original string
const origArrFilter = origArray.filter(str => !str.match(/[^\w\s]/g));
//Join original array to string
const origStr = origArrFilter.join("");
//Convert original string to lowercase
const origLCase = origStr.toLowerCase()
//Compare the new string with the original string for equality
if (origLCase === lCase) {
    return true;
}
else {return false};
};

console.log(palindromes('racecar'));
console.log(palindromes('racecar!'));
console.log(palindromes('Racecar!'));
// Do not edit below this line
module.exports = palindromes;
