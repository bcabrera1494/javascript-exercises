const palindromes = function (string) {
//PSEUDOCODE
//Extract characters from string into an array
const array = string.split("");
//Reverse the array
const backwards = array.reverse();
//Remove the , between each letter
const fixPal = backwards.join("");
//Create a new string with the reversed array
const pal = fixPal.toString();
//Compare the new string with the original string for equality
if (string === fixPal) {
    return true;
}
};

console.log(palindromes('racecar'));
// Do not edit below this line
module.exports = palindromes;
