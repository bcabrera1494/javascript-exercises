const removeFromArray = function(arr, removeValue, ...alsoRemove) {
    function removeValues(value){
        return value !=  removeValue && value != alsoRemove;
        }
    const newArray = arr.filter(removeValues);
    return newArray;
    
}
console.log(removeFromArray([1,2,3,4], (3)));
console.log(removeFromArray([1,2,3,4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
