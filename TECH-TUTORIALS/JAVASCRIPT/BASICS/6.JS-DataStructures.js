const fs = require('fs');
// * Map

const map = new Map();

// insertion
map.set("a", 1);
map.set(2, 4);
map.set(1.2, "1.2");

// getting value
console.log(map.get(1.2));
console.log(map.get("a"));

// looping through all values
for (let key of map.keys()) {
    console.log(key, "->", map.get(key));
}

// *WeakMap

const weakMap = new WeakMap();

// ! THis will throw error as key can't be primitive type
// weakMap.set(1, 1);
let obj = { 1: 1 };
weakMap.set(obj, 1);

console.log(weakMap.get(obj));
obj = null; // ? This make obj to be ready for garbage collection. So next like will result "undefined"
console.log(weakMap.get(obj));


// *Set

const arr = new Array([1, 2, 24, 2, 3, 5, 3]);
const set = new Set(...arr);
console.log("Arrays ", arr);
console.log("Sets ", set); // unique elemnets from an array



// async function download() {
//     try {
//         const response = await fetch("https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg");
//         const readBuffer = await response.arrayBuffer();
//         const uint8Array = new Uint8Array(readBuffer);
//         const writeBuffer = Buffer.from(uint8Array);
//         fs.writeFile("hello.jpg", writeBuffer, (err) => {
//             if (err) {
//                 console.error('Error saving file:', err);
//             } else {
//                 console.log('File saved:', "hello.jpg");
//             }
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }
// download();

const ab = new ArrayBuffer(2); // create an arraybuffer of 2 bytes = 8 bit + 8 bit
const view = new DataView(ab);
view.setInt8(0, 42); // writing 42 in first 8 bit i.e first byte 
view.setInt8(1, 100); // writing 100 in second 8 bit i.e second byte

const value1 = view.getInt8(0); // Read the value from the first byte
const value2 = view.getInt8(1); // Read the value from the second byte

console.log(value1); // Output: 42
console.log(value2); // Output: 100