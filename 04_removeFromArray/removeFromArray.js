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

    //Function that filters array, calls checkValue
    //returns newArray
    function removeItems (array, valuetoRemove){
        return array.filter(item => item !== valuetoRemove)
    }

    //Loop iterates over each value of removeArray
    //returns value of each element in removeArray
   for (const remove of removeArray){
        const removeValue = remove;
        removeValue;
        //Loop nested within iteration over removeArray that runs checkIncludes to compare each element of editArray w/ remove
        //returns true or false for each iteration
        for(const element of editArray){
            const editElement = element; 
            let check = checkValue(removeValue, editElement);
            check;
            //return filterArray function should return newArray
            if (check = false){
                return filterArray(element);
            } 
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