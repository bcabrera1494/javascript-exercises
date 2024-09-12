const removeFromArray = function(arr, ...removeValues) {
    let editArray = Array.from(arr); 
    let removeArray = Array.from(removeValues);

    function checkValues (array, element){
        let check = array.includes(element);
        return check === false;
        };
    
    function filterArray (array){
        let newArray = array.filter(checkValues);
         //result should return edited array without the "false" elements
        return newArray;
    }

/*    this should loop through each element of removeArray
        for (let value of removeArray){
        checkValues(editArray, value);
        filterArray(editArray, value);
    }*/

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