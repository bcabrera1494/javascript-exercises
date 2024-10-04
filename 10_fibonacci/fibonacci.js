const fibonacci = function (index) {
    // create an array using fibonnacci
    const fibo = [0, 1];
    let fLength = fibo.length;
    // nest in a loop to continue until at least 25
    while (fLength < 30) {
        let nextValue = fibo.reduce((last, current) => {
            return current += last;
        }, 0);
        fibo.push(nextValue);
    };

    // return index-1 of the parameter passed thru the function
    return fibo[index-1];
};
console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
