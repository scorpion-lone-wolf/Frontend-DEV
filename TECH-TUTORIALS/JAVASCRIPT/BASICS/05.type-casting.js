// Implicit type casting May result in very unexpected behaviour

console.log("20" + 2); // 202
console.log("false" + false); // falsefalse
console.log(false + 10); // 10
console.log(true + 10); // 11
console.log("20" * 2); // 40
console.log(null + 10); // 10
console.log([] * 10); // 0
console.log([2] * 10); // 20
console.log([2, 1] * 10); // NaN
console.log([2, 1] + 10); //  2,101


// Some of Explicit type casting example
console.log(Number("10") + 10); // 20
console.log(parseFloat("10.23") + 10); // 20.23
console.log(parseInt("10.23") + 10); // 20
console.log(String(10) + 10); // 1010








