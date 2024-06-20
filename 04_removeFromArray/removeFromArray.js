const removeFromArray = function(arr, removeValue, ...theArgs) {
    const index = arr.indexOf(removeValue);
    const remove = arr.splice(index, 1);
    return arr
}
console.log(removeFromArray([1,2,3,4], (3)));

// Do not edit below this line
module.exports = removeFromArray;
