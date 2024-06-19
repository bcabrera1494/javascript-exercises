const removeFromArray = function(arr, remove) {
let removeSingleValue = arr.splice(remove);
return removeSingleValue;
};
console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
