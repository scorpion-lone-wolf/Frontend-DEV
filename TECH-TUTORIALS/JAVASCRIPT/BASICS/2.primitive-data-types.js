// *primitive datatype in js are : number, bigint ,string, boolean , symbol, undefined and null

// * number types
const num1 = 123;
const nums2 = Number(123);

// *bigint types
const bigint1 = 123n;
const bigint2 = BigInt(123n);
console.log(typeof bigint1)

// *string types
const str1 = 'hello';
const str2 = String('hello');

// *boolean types
const bool1 = true;
const bool2 = Boolean(true);

// *symbol types
const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

console.log(symbol1 == symbol2);

// *undefined and null
let value;
console.log(value); //default value is undefined if not initialized

value = null;
console.log(value);


// *use of symbol ( Symbol with same name also creates a different key)
const design1 = Symbol("design");
const car = {
    name: "Toyota",
    model: 1958,
    [design1]: "Rahul"
}
const design2 = Symbol("design");
car[design2] = "pursotam";
console.log(car)

