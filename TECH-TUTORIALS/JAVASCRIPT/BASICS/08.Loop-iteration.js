// *for loop
const arr = [1, 22, 33, 44, 54]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// * for in loop (Not recommended for array)
const obj = {
    k1: 1,
    k2: 2,
    k3: 3
}
for (let key in obj) {
    console.log(key, "->", obj[key])
}

// *for of
for (let ele of arr) {
    console.log(ele)
}

// *forEach method
arr.forEach(function (ele, index) {
    console.log(index, ele)
})

// *Labeled Statements

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j)
        if (i == 0 && j == 2) break outer
    }
}