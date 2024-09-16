const removeFromArray = function(arr, ...removeValues) {
    const editArray = Array.from(arr);
    const removeArray = Array.from(removeValues);

    //Function that filters array items by returning only the values that do NOT
    //match the value to remove
    //returns edited Array
    function removeItems (array, valuetoRemove){
        return array.filter(item => item !== valuetoRemove)
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
        removeItems (editArray, remove);
        }; 
        if (includes > 4 
            || typeof(includes) === String 
        ){ 
            continue; 
        } 
    return removeItems(editArray, remove);
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