const fibonacci = function (index) {
    // create an array using fibonnacci
    const fibo = [0, 1];
    // use reduce to append next values to sequence
    fibo.reduce((prev, current) => {
    let next = current + prev;
    return fibo.push(next);
    }, 1); // initialize at 1 because the formula only works if index > 1
    console.log(fibo);
    // return the nth value based on index 
    return fibo[index];
};
console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(10));
console.log(fibonacci(15));
// Do not edit below this line
module.exports = fibonacci;
