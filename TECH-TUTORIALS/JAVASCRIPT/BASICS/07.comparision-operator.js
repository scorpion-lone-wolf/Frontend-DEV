// isLooselyEqual => '=='
// * '==' does the type coersion(implicit type conversion) and then matches the value.
console.log(2 == '2')// true 
console.log(1 == true) // true
console.log(0 == false) // true

console.log('------->')

// isStrictlyEqual => '==='

// * '===' check for datatype and value at the same time.
console.log(2 === '2')// false 
console.log(1 === true) // false
console.log(0 === false) // false

console.log('------->')
// *Difference between '===' and Object.is(value1,value2)
console.log(+0 === -0) // true
console.log(Object.is(+0, -0)) // false
console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true






