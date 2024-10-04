const add = function(a, b) {
	return (a+b);
};

const subtract = function(a, b) {
	return (a-b);
};

const sum = function(array) {
  // use .reduce method to get a sum
  let result = array.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function(array) {
return array.reduce((product, current) => (product * current), 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(x) {
  if(x < 0) {
    return -1;
  }
  else if (x === 0) {
    return 1;
  }
  else {
    return x * factorial(x-1);
  };
  // 0! = 1
  // 1! = 1
  // 2! = 2 * 1
  // 3! = 3 * 2 * 1
  // 4! = 4 * 3 * 2 * 1
  // 5! = 5 * 4 * 3 * 2 * 1
};

console.log(add(0,0));
console.log(add(2,2));
console.log(add(2,6));
console.log(subtract(10,4));
console.log(sum([]));
console.log(sum([7]));
console.log(sum([7, 11]));
console.log(sum([1, 3, 5, 7, 9]));
console.log(multiply([2, 4]));
console.log(multiply([2, 4, 6, 8, 10, 12, 14]));
console.log(power(4, 3));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(10));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
