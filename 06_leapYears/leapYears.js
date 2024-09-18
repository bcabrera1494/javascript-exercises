const leapYears = function(year) {
//if the year is divisible by 4 return true (can declare a variable that checks divisibility)
//if the year is divisible by 100 and NOT divisible by 400 return false
//if the year is divisible by 100 and divisible by 400 return true can declare a variable that checks divisibilty by 400 

let checkFour = year % 4;
let checkFourHundred = year % 400;
let checkOneHundred = year % 100;

if(checkFour === 0){
    return true;
};

if(checkOneHundred === 0
    && checkFourHundred === 0){
    return true
 }

else {return false};

};

// Do not edit below this line
module.exports = leapYears;
