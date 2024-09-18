const sumAll = function(startValue, endValue) {

//Declare variable sum = 0 
//Use for loop to increment i (i = the amount added to sum)
//for (let i = 0; (condition i<= endValue) < endValue; i++)
// {sum += i} **use += to add i and reassign the resulting value to variable "sum"
//return sum

let sum = 0
for (let i = startValue; i <= endValue; i++){
    sum += i
    };
return sum;
};

// Do not edit below this line
module.exports = sumAll;
