document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM content loaded")
    const minValueRange = 10
    const maxValueRange = 101
    // geneare 20 random number range from 10 to 100
    const randomValue = []
    for (let i = 0; i < 20; ++i) {
        const rand = Math.floor(Math.random() * (maxValueRange - minValueRange) + minValueRange) / 100
        console.log(rand)
        randomValue.push(Math.floor((400 * rand)))
    }
    // *loop through array and assign height to all 20 div bar items
    const container = document.querySelector('.container')
    const divBlocks = document.querySelectorAll('.items')
    for (let i = 0; i < divBlocks.length; i++) {
        divBlocks[i].innerText = randomValue[i]
        divBlocks[i].style.height = `${randomValue[i]}px`
        divBlocks[i].style.textAlign = 'center'
    }
    await bubbleSort(randomValue, container, divBlocks)
    console.log(randomValue)
})

async function bubbleSort(arr, container, divBlocks) {
    const n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= (n - 2) - i; j++) {

            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                // We have to change height 

                // Update the array elements
                divBlocks[j].innerText = arr[j];
                divBlocks[j + 1].innerText = arr[j + 1];

                divBlocks[j].style.height = `${arr[j]}px`;
                divBlocks[j + 1].style.height = `${arr[j + 1]}px`;

                // Add a delay for the visual effect

            }
            divBlocks[j + 1].style.backgroundColor = `red`;
            await new Promise(resolve => setTimeout(resolve, 300));
            divBlocks[j + 1].style.backgroundColor = `white`;
        }
        divBlocks[(n - 1) - i].style.backgroundColor = `green`;

    }
}

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
