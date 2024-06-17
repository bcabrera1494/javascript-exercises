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

// Do not edit below this line
module.exports = repeatString;
