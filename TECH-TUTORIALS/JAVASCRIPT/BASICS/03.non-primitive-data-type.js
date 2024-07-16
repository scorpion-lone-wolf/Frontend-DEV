// * object data type

const obj1 = { a: 1 };
const obj2 = new Object();
const obj3 = Object.create(obj1);

console.log(obj1);
console.log(obj2);
console.log(obj3);

// * some of the important methods of the object instances are

//  ?This check is object contains particular property or not
console.log(obj1.hasOwnProperty("a"));
console.log("a" in obj1);

// ?This will check if obj1 is a parent of obj3 or not
console.log(obj1.isPrototypeOf(obj3));

// ?This will return the all key-value pairs inside that object
console.log(obj1.valueOf() == obj1);


// * some important static methods of Object

// ? This does not work with node currently as this is relatively new feature
// const fruits = [
//     { name: "banana", prices: 50 },
//     { name: "apple", prices: 200 },
//     { name: "oranges", prices: 150 },
//     { name: "watermelon", prices: 90 }
// ]

// const result = Object.groupBy(fruits, (ele) => {
//     if (ele.prices <= 50) return "low";
//     else if (ele.prices <= 100) return "mid";
//     else return "high"
// });
// console.log(result)


// * We have Arrays and functions

const arr1 = [];
const arr2 = new Array(4);

function fn() {
    return "i m an function";
}