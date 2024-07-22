// *Assignment operators
console.log("Assignment Operators")

let a = 10
console.log(a += 2) //12
console.log(a **= 2) // 12^2 = 144
console.log(a ??= 23) // if a is falsey value then 23 will be assigned
a = null // assignment of falsey value
a ??= 23 // if a is falsey value then 23 will be assigned => a = a?? 23
console.log(a)


// *Basic Arithmetic operators
console.log("Arithmetic Operators")

console.log(a + 2)
console.log(a * 2)
console.log(a - 2)
console.log(a % 2)
console.log(a ** 2)
console.log(a / 2)


// *Basic bitwise operator
console.log("Bitwise Operators")

console.log(a & 2)
console.log(a | 2)
console.log(~5) // => Transforms n to -(n + 1) in practical use.
console.log(a ^ 2)
console.log(a << 2)
console.log(a >> 2)


// * Basic logical operator
console.log("Logical Operators")

console.log(a && 2) // 2
console.log(a || 2) // a which is 23
console.log(a != 2) // true



