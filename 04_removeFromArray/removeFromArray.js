const removeFromArray = function(arr, removeValue, ...alsoRemove) {
    function removeValues(value){
        return value !=  removeValue && value != alsoRemove;
        };

    let checkRemoveValue = arr.includes(removeValue);
    let checkAlsoRemove = arr.includes(alsoRemove);

 if (checkRemoveValue === false) {
     checkAlsoRemove;
     if (checkAlsoRemove === false){
            return arr;
        }    
        return arr
    }
 else {
     const newArray = arr.filter(removeValues);
     return newArray;
    }     
}
console.log(removeFromArray([1,2,3,4], 3));
console.log(removeFromArray([1,2,3,4], 3, 2));
console.log(removeFromArray([1,2,2,3], 2));
//Why doesn't this last console.log pass through lines 1-20 of the function? 
console.log(removeFromArray([1,2,3,4], 7, "tacos"));
/*
console.log(removeFromArray[1,2,3,4], 7, 2);
console.log(removeFromArray([1,2,3,4], 1, 2, 3, 4));
console.log(removeFromArray(["hey", 2, 3, "ho"], 2, "ho"));
console.log(removeFromArray([1,2,3]), "1", 3);*/
// Do not edit below this line
module.exports = removeFromArray;
