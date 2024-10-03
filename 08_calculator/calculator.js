const add = function(a, b) {
	return (a+b);
};

const subtract = function(a, b) {
	return (a-b);
};

const sum = function(a, ...b) {
  // use .reduce method to get a sum
  let result = b.reduce((sum, current) => sum + current, 0);
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
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
