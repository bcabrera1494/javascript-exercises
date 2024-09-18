const removeFromArray = function(arr, ...removeValues) {
    const editArray = Array.from(arr);
    const removeArray = Array.from(removeValues);

    //Function that filters array items by returning only the values that do NOT
    //match the value to remove
    //returns edited Array
    function removeItems (array){
        return array.filter(item => removeArray.includes(item) === false);
    }
    //write function to get value of each item in removeArray
    function getValue (array, index) {
        let value = array[index];
        return value;
    };
//use for loop ONLY w/ getValue to simplify code for same results
        //write for...loop that uses removeItems until the length
        //of removeArray is completed
    for (let i = 0; i < removeArray.length; i++){
        //declare variable for getValue so that it can be accessed in removeItems.
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