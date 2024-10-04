const palindromes = function (string) {
    //PSEUDOCODE
    //Extract characters from string into an array
    const origArray = string.split("");

    //Function to edit original string
    function editOriginal(a) {
        //Remove punctuation from original string
        const array = a.filter(str => !str.match(/[^\w\s]/g) && (str !== " "));
        //Join original array to string
        const origStr = array.join("");
        //Convert original string to lowercase
        const origLCase = origStr.toLowerCase();
        return origLCase;
        //Compare the new string with the original string for equality
    };
    //Function to edit backwards string
    function editBackwards(b) {
        //Remove punctuation
        const puncRm = b.filter(str => !str.match(/[^\w\s]/g) && (str !== " "));
        //Reverse the array
        const backwards = puncRm.reverse();
        //Remove the , between each letter
        const fixPal = backwards.join("");
        //Create a new string with the reversed array
        const pal = fixPal.toString();
        //Convert string to lowercase
        const lCase = pal.toLowerCase();
        return lCase;
    };

    let original = editOriginal(origArray);
    let palCheck = editBackwards(origArray);
    if (original === palCheck) {
        return true;
    }
    else { return false };
};

console.log(palindromes('racecar'));
console.log(palindromes('racecar!'));
console.log(palindromes('Racecar!'));
console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;
