const removeFromArray = function(arr, ...removeValues) {
    const editArray = Array.from(arr);
    const removeArray = Array.from(removeValues);

    function removeItems (array, valuetoRemove){
        return array.filter(item => item !== valuetoRemove);
    };
    function getValue (array, index) {
        let value = array[index];
        return value;
    };

    for (let i = 0; i <= removeArray.length; i++){
        let remove = getValue(removeArray, i);
        remove;
        if (remove === undefined){
            continue;
        };
        //declare variable for edit of array
        const newArray = removeItems(editArray, remove);
        //write conditional logic to sepcify how to proceed if remove is NOT present in editArray
        if (editArray.includes(remove) === false){
            continue;
        };
        //write conditional logic to specify how to proceed if function has not yet accessed all 
        //removeArray elements
        if ((i + 1) < removeArray.length){
            remove;
            //declare variable for edit of array
            let newArrayOne = removeItems (editArray, remove);
            newArrayOne;
        }

        return removeItems (editArray, remove);
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