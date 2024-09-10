const removeFromArray = function(arr, removeValue, ...alsoRemove) {
    
    //function that checks if removeValue is in arr, finds its index, splices it out, returns the edited array
    checkAndRemove(removeValue);

    function checkAndRemove(value){
        //checks if removeValue matches any elements of arr
        let checkInclusion = arr.includes(value);
        
        //finds the index of removeValue
        let index = arr.indexOf(value);

        //splices removeValue out of arr
        const splicedArray = arr.toSpliced(index, 1);
        
        if (checkInclusion === true) { 
        return splicedArray; //why does this still return undefined even if the variable is defined
        };
    };

};

   /* function compareValues(){
        for (const value of alsoRemove) {
            //check if the current value is included in the newArray
            let checkValue = newArray.includes(value);
            //conditional statement that filters the current value OUT of newArray to return and updated array.
            //aka arrayEdit
            if (checkValue === true) {
                let arrayEdit = newArray.filter(value);
                return arrayEdit}
            };
            //Now the loop should restart and iterate over the next iterable and repeat until all iterables have
            //been iterated through the loop.
    };
    compareValues(alsoRemove);*/


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