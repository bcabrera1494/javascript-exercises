const fibonacci = function (n) {
    const fibo = [];
    // fibo[n] = fibo[n - 1] + fibo[n - 2];
    while (fibo.length < n) {
        for (let i = 0; i < n; i++) {
            if (i === 0 || i === 1) {
                fibo.push(1);
                continue;
            } else {
                let f1 = fibo[i-1];
                let f2 = fibo[i-2];
                let next = f1 + f2;
                fibo.push(next);
                continue;
            };
        };
    };
    return fibo[n-1];
};
console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(0));
console.log(fibonacci(-25));
console.log(fibonacci('0'));
console.log(fibonacci('1'));
console.log(fibonacci('2'));
console.log(fibonacci('8'));
// Do not edit below this line
module.exports = fibonacci;
