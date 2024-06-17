const repeatString = function(str,times) {
    let result = ''
    for (let r = 0; r < times && Math.sign(r) !== -1; r++){
    result += str;
    };
    if ((Math.sign(times)) === -1){
        let errorMessage = 'ERROR'
        return errorMessage;
    }
    else return result;
};
console.log(repeatString('hey',3));
console.log(repeatString ('hello',10));
console.log(repeatString('hi',1));
console.log(repeatString('bye', 0));
console.log(repeatString('goodbye',-1));
let num = Number;
console.log(repeatString('hey',num));
// Do not edit below this line
module.exports = repeatString;
