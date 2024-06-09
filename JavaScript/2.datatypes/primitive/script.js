"use strict";
// *------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// * Number data type

let numberOfCars = 43; // this is a number 
console.log(typeof (numberOfCars) === 'number');

// * another way of defining number explicitly
let numberOfCars2 = Number('43');
console.log(typeof (numberOfCars2) === 'number');

// * comparing two numbers
console.log(numberOfCars === numberOfCars2);

// * the range of numbers data type is between (-2^53 + 1 to 2^53 -1) , so any number after that cannot be stored in the number data type
let maxSafeInteger = Number.MAX_SAFE_INTEGER; //* 9007199254740991
console.log(maxSafeInteger + 1); // *output 9007199254740992 (correct)
console.log(maxSafeInteger + 2); // *output 9007199254740992 (incorrect as it loose precision)

// *------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// * BigInt: It is used to store big numbers that can loose precision while doing some operations

let bigintValue1 = BigInt('123'); // * 123n 
console.log(typeof (bigintValue1) === 'bigint');

// *------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// * boolean and string

let isTrue1 = Boolean(1); // or simply  = true;
// * 0 represents false and 1 represents true
console.log(typeof (isTrue1) === 'boolean');

let str1 = "string1";
let str2 = String("string2");
console.log(str1, str2);
console.log(typeof (str1) === 'string');
console.log(typeof (str2) === 'string');

// *------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// * undefined and null

// * undefined means the variable is present but it has not been assigned to a value
// * null value is something that we explicitly assign to indicate absence of a value/ empty value/ no value

var a;
console.log(typeof (a) === 'undefined');

var b = null;
console.log(typeof (b) === 'object');

// *------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// * Symbol() : It is used to represent uniqueness , as same value yeld different symbol value. They are unique identifiers

let sym1 = Symbol("string1");
let sym2 = Symbol("string1");
console.log(sym1, sym2);
console.log(sym1 === sym2);

// * usecase for using symbol
// * 1. Assigning unique key to an object
// * 2. used as iterator 
// * 3. private variable inside class


// * 1. Assigning unique key to an object

let key1 = Symbol("name");
let obj = {
    [key1]: "rahul"
}
console.log(obj);
// other file
{
    // *still symbol are created using same name but they can access of modify unless they have the same symbol object , this adds unique key to avoide propertyname collission
    let key1 = Symbol("name");
    obj[key1] = "new Name"
    console.log(obj); // *{Symbol(name): 'rahul', Symbol(name): 'new Name'}
}

// * 2. used as iterator 

let obj1 = {
    name: "Rahul",
    age: 26,
    [Symbol.iterator]() {
        let index = 0;
        let props = ["age", "name"]
        return {
            next() {
                if (index < props.length) return { value: obj1[props[index++]], done: false }
                return { done: true };
            }
        }
    }
}

for (let value1 of obj1) {
    console.log(value1);
}

// * 3. private variable inside class

let _age = Symbol("age");
class Person {
    constructor(name, age) {
        this.name = name;
        this[_age] = age;
    }
    getAge() {
        return this[_age];
    }
    setAge(age) {
        this[_age] = age;
    }
    getData() {
        console.log(this.name, this[_age]);
    }
}

{
    // * another file
    let _age = Symbol("age");
    const person = new Person("rahul", 26);
    person.getData();
    // * you can't access age as it is symbol and works as private variable inside class
    console.log(person.name, person[_age]);
}