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

const multiply = function(a, b) {
return (a*b)
};

const power = function(a, b) {
	return a**b;
};

const factorial = function() {
	
};

console.log(add(0,0));
console.log(add(2,2));
console.log(add(2,6));
console.log(subtract(10,4));
console.log(sum([]));
console.log(sum([7]));
console.log(sum([7, 11]));
console.log(sum([1, 3, 5, 7, 9]));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
