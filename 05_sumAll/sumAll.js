const sumAll = function(startValue, endValue) {

//Declare variable sum = 0 
//Use for loop to increment i (i = the amount added to sum)
//for (let i = 0; (condition i<= endValue) < endValue; i++)
// {sum += i} **use += to add i and reassign the resulting value to variable "sum"
//return sum
//use conditional statements to determine start and end value such that the end value is always greater.

let sum = 0
for (let i = startValue; i <= endValue; i++){
    sum += i
    };
return sum;
};

console.log(sumAll(1,4));
console.log(sumAll(1,4000));
console.log(sumAll(123,1));

// Do not edit below this line
module.exports = sumAll;
