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


