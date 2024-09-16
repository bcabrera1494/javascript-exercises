const removeFromArray = function(arr, ...removeValues) {
    const editArray = Array.from(arr);
    const removeArray = Array.from(removeValues);

    function removeItems (array, valuetoRemove){
        return array.filter(item => item !== valuetoRemove)
    }
    function getValue (array, index) {
        let value = array[index];
        return value;
    };

    for (let i = 0; i <= removeArray.length; i++){
        let remove = getValue(removeArray, i);
        remove;
        if (removeArray.length > 1 &&
            removeArray.length <= 4
        ){
            let newArray = removeItems(editArray, remove);
            newArray;
            break;
        };
        if (removeArray.length > 1){
            remove;
            return removeItems(editArray, remove);
        };
    }; 
};
console.log(removeFromArray([1,2,3,4], 3));
console.log(removeFromArray([1,2,3,4], 3, 2));
console.log(removeFromArray([1,2,2,3], 2));
console.log(removeFromArray([1,2,3,4], 7, "tacos"));
console.log(removeFromArray[1,2,3,4], 7, 2);
console.log(removeFromArray([1,2,3,4], 1, 2, 3, 4));
console.log(removeFromArray(["hey", 2, 3, "ho"], 2, "ho"));
console.log(removeFromArray([1,2,3]), "1", 3);
// Do not edit below this line
module.exports = removeFromArray;