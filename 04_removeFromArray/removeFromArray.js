const removeFromArray = function(arr, ...removeValues) { //changed the parameter so that ALL values are included in the array of rest parameters
    //Create a function that returns the index of an element value ***maybe this is unnecessary?
    //Parameters to pass through: array, index
    /*function indexOfValue (array, element){
        let index = array.indexOf(element);
        return index;
    }*/

    //Create a function that returns the value of an element, given its index
    //Paremeters to pass through: array, index
    function valueOfElement (array, index){
        let element = array[index];
        return element; //result should return the value (a number)
    }
    let arrOne = valueOfElement (arr, 0);
    let arrTwo = valueOfElement (arr, 1);
    let arrThree = valueOfElement (arr, 2);
    let arrFour = valueOfElement (arr, 3);

    //Create a function that checks if an element value is included in an array
    //Parameters to pass through: array, element
    function checkRemoveValues (array, element){
        let check = array.includes(element);
        return check; //result will be true or false
    }
    checkRemoveValues (removeValues, arrOne);
        if (checkRemoveValues === true) {
            spliceArray()
        }
    checkRemoveValues (removeValues, arrTwo);
    checkRemoveValues (removeValues, arrThree);
    checkRemoveValues (removeValues, arrFour);

    //Create a function that splices an element from the array and returns the edited array 
    function spliceArray (array,index){
        let splice = array.toSpliced(index,1);
        splice;
        return array; //result should return edited array
    }
    //Create a loop that runs valueOfElement and checkRemoveValues on each element in the array
    for (element of removeValues) {
        valueOfElement(arr, 0);
        checkRemoveValues();
        //Write conditional statement that runs spliceArray if the checkRemoveValues is true 
        if (checkRemoveValues === true) {
            spliceArray(arr,0);
            arr;
        }
        valueOfElement (arr, 1);
        checkRemoveValues();
        if (checkRemoveValues === true) {
            spliceArray(arr, 1);
            arr;
        }
        valueOfElement (arr, 2);
        checkRemoveValues();
        if (checkRemoveValues === true) {
            spliceArray(arr, 2);
            arr;
        }
        valueOfElement (arr, 3);
        checkRemoveValues();
        if (checkRemoveValues === true) {
            spliceArray(arr, 3);
            return arr;
        }
        else 
            return arr;  
    }

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