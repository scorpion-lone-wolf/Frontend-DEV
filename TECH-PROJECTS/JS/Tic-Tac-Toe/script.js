document.addEventListener("DOMContentLoaded", function () {
    const TURNS = ['<i class="fa-solid fa-xmark"></i>', '<i class="fa-solid fa-o"></i>']
    let currentTurn = 0
    const currentTurnElemnt = document.querySelector('.current-turn')
    currentTurnElemnt.textContent = currentTurn == 0 ? "X Turn" : "O Turn"
    const grid = new Array(3).fill(null).map(() => new Array(3).fill(""))
    let isGameOn = true
    const parent = document.querySelector('.container')

    parent.addEventListener('click', (event) => {
        const ele = event.target
        if (isGameOn) {
            const elementIndex = ele.classList[1].split('-')[1]
            const rowIndex = Math.floor((elementIndex - 1) / 3)
            const colIndex = Math.floor((elementIndex - 1) % 3)

            if (grid[rowIndex][colIndex] === '') {
                ele.innerHTML = TURNS[Number(currentTurn)]
                grid[rowIndex][colIndex] = TURNS[Number(currentTurn)]
                ele.style.cursor = "not-allowed"
                ele.style.fontSize = "2.3rem"
                ele.style.textAlign = "center"

                currentTurn = !currentTurn
                currentTurnElemnt.textContent = currentTurn == 0 ? "X Turn" : "O Turn"

                console.log(grid)
                const [gameOn, winner] = checkForGameOutcome(grid)
                isGameOn = gameOn
                if (!isGameOn) {
                    updateResult(winner)
                }
            }

        }
    })

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
        // * check for all rows & columns
        for (let i = 0; i < 3; ++i) {

            if (grid[i][0] != "" && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
                return [false, grid[0][0]]
            }
            if (grid[0][i] != "" && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
                return [false, grid[0][0]]
            }
        }

        // *check for diagonals
        if (grid[0][0] != "" && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
            return [false, grid[0][0]]
        }
        if (grid[0][2] != "" && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
            return [false, grid[0][2]]
        }

        // *check for draw
        if (isDraw(grid)) return [false, null]

        // *game is still on
        return [true, null]
    }
})

