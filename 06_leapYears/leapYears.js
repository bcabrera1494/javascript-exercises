const leapYears = function(year) {
//if the year is divisible by 4 return true (can declare a variable that checks divisibility)
//if the year is divisible by 100 and NOT divisible by 400 return false
//if the year is divisible by 100 and divisible by 400 return true can declare a variable that checks divisibilty by 400 

let checkFour = year % 4;
let checkFourHundred = year % 400;
let checkOneHundred = year % 100;

if (checkOneHundred === 0
    && checkFourHundred !== 0){
        return false;
    };

if(checkFour === 0){
    return true;
};

if(checkFourHundred === 0
    && checkOneHundred === 0
    && checkFour === 0){
    return true
 }

else {return false};

};

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));

// Do not edit below this line
module.exports = leapYears;
