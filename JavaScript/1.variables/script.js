"use strict";
// * JS variables =>  declarations , hoisting and scope

//* decalrations of variables

// * var is an old way of declaring a variable (not recommended)
var myName = 'Rahul';
let age = 26;
const fatherName = 'Raj';

console.log(myName, age, fatherName);


// * scope of the variables

function doAddition() {
    // * var is an function scope variable i.e inside a function they can be accessed anywhere
    var a = 10;
    // * let and const are block scope '{}' variables i.e if they are defined inside {} then outside they can't be accessed
    let b = 20;
    const sum = a + b;
    {
        let c = 40;
        console.log("inside block scope ", c);
    }
    // * we can't access c outside {} scope.
    // console.log(a, b, c, sum);
    console.log(a, b, sum);

}
// * We can't access any of the variables outside function scope
// console.log(a, b, sum); 
doAddition();


// * hoisting

// * by default JS variable are hoisted at the beginning of their scope i.e they are declared at the top of their scope

console.log(varHoisted); //* they are hoisted at the beginning of their scope so we can access them as they are initialized with undefined at the beginning
var varHoisted = true;

console.log(letHoisted); //* they are hoisted at the beginning of their scope but they are not initialized
let letHoisted = true;