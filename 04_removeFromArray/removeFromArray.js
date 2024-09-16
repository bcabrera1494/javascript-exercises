const removeFromArray = function(arr, ...removeValues) {
    const editArray = Array.from(arr);
    const removeArray = Array.from(removeValues);

    //Function that compares an element from editArray and removeArray
    //Return the elements not equal to the removElement
    function checkValue (removeElement, editElement){     
        if (removeElement !== editElement){
            return true; 
        };
        if (removeElement === editElement){
            return false; 
        }
    };

    //Function that filters array items by returning only the values that do NOT
    //match the value to remove
    //returns edited Array
    function removeItems (array, valuetoRemove){
        return array.filter(item => item !== valuetoRemove)
    }

    //Loop iterates over each value of removeArray
    //returns value of each element in removeArray
   for (const remove of removeArray){
        const removeElement = remove;
        removeElement;
        return removeItems (editArray, removeElement);
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