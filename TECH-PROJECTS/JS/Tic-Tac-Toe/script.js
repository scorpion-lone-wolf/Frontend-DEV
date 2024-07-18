document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.items')
    const TURNS = ['<i class="fa-solid fa-xmark"></i>', '<i class="fa-solid fa-o"></i>']
    let currentTurn = 0
    const grid = new Array(3).fill(null).map(() => new Array(3).fill(""))
    let isGameOn = true
    for (const ele of boxes) {
        ele.addEventListener("click", function (e) {
            let wonBy = ""
            let moveDone = false
            if (isGameOn) {
                const elementIndex = ele.classList[1].split('-')[1]
                if (elementIndex <= 3) {
                    // first row
                    if (grid[0][(elementIndex - 1) % 3] === '') {
                        ele.innerHTML = TURNS[Number(currentTurn)]
                        grid[0][(elementIndex - 1) % 3] = TURNS[Number(currentTurn)]
                        ele.style.cursor = "not-allowed"
                        ele.style.fontSize = "2.3rem"
                        ele.style.textAlign = "center"
                        moveDone = true
                    }
                } else if (elementIndex <= 6) {
                    // second row
                    if (grid[1][(elementIndex - 1) % 3] === '') {
                        ele.innerHTML = TURNS[Number(currentTurn)]
                        grid[1][(elementIndex - 1) % 3] = TURNS[Number(currentTurn)]
                        ele.style.cursor = "not-allowed"
                        ele.style.fontSize = "2.3rem"
                        ele.style.textAlign = "center"
                        moveDone = true
                    }
                } else {
                    // third row
                    if (grid[2][(elementIndex - 1) % 3] === '') {
                        ele.innerHTML = TURNS[Number(currentTurn)]
                        grid[2][(elementIndex - 1) % 3] = TURNS[Number(currentTurn)]
                        ele.style.cursor = "not-allowed"
                        ele.style.fontSize = "2.3rem"
                        ele.style.textAlign = "center"
                        moveDone = true
                    }
                }
                if (moveDone) {
                    currentTurn = !currentTurn
                    const result = checkForGameOutcome(grid)
                    isGameOn = result[0]
                    wonBy = result[1]
                    if (!isGameOn) {
                        updateResult(wonBy)
                    }
                }
            }
        })
    }
    function updateResult(wonBy) {
        if (wonBy)
            document.getElementsByClassName('result')[0].textContent = `🎇 Player ${TURNS[0] == wonBy ? "X" : "O"} Won The Match 🎇`
        else
            document.getElementsByClassName('result')[0].textContent = `No one Won's 🙁`
    }

    function isDraw(grid) {
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                if (grid[i][j] == '') return false
            }
        }
        return true
    }

    function checkForGameOutcome(grid) {

        // *check for draw
        if (isDraw(grid)) return [false, null]

        // *check for all rows

        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; j++) {
                if (grid[0][0] != "" && grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2]) {
                    return [false, grid[0][0]]
                }
            }
        }
        // *check for all columns
        if (grid[0][0] != "" && grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0]) {
            return [false, grid[0][0]]
        }
        if (grid[0][1] != "" && grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1]) {
            return [false, grid[0][1]]
        }
        if (grid[0][2] != "" && grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2]) {
            return [false, grid[0][2]]
        }

        // *check for diagonals
        if (grid[0][0] != "" && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
            return [false, grid[0][0]]
        }
        if (grid[0][2] != "" && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
            return [false, grid[0][2]]
        }
        // *game is still on
        return [true, null]
    }
})

