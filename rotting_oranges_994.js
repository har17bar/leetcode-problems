/* 

    994. Rotting Oranges / Medium

    You are given an m x n grid where each cell can have one of three values:
    0 representing an empty cell,
    1 representing a fresh orange, or
    2 representing a rotten orange.
    Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
    Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

    Example 1:
        https://assets.leetcode.com/uploads/2019/02/16/oranges.png
        Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
        Output: 4

    Example 2:
        Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
        Output: -1
        Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
   
    Example 3:
        Input: grid = [[0,2]]
        Output: 0
        Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
    
    Constraints:
        m == grid.length
        n == grid[i].length
        1 <= m, n <= 10
        grid[i][j] is 0, 1, or 2.   
*/


/*
    SOLUTION BREADTH FIRST SEARCH BFS
    PROS -  MEMORY -> O(N)
    CONS -  EVALUATION O(NM + NM) -> O(N)
    EVALUATION / Memory
        Runtime: 100 ms, faster than 72.70% of JavaScript online submissions for Rotting Oranges.
        Memory Usage: 44.4 MB, less than 81.00% of JavaScript online submissions for Rotting Oranges.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    if (grid.length === 0) return 0

    const directions = [
        [-1, 0], //up
        [0, 1], //right
        [1, 0], //down
        [0, -1] //left
    ]
    const ROTTEN = 2
    const FRESH = 1
    const EMPTY = 0
    const queue = []
    let freshOranges = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === ROTTEN) {
                queue.push([row, col])
            }

            if (grid[row][col] === FRESH) {
                freshOranges++
            }
        }
    }

    let minutes = 0
    let currentQueueSize = queue.length

    while (queue.length > 0) {
        if (currentQueueSize === 0) {
            currentQueueSize = queue.length
            minutes++
        }

        const currentOrange = queue.shift()
        currentQueueSize--
        const row = currentOrange[0]
        const col = currentOrange[1]

        for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i]
            const nextRow = row + currentDir[0]
            const nextCol = col + currentDir[1]

            if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) {
                continue
            }

            if (grid[nextRow][nextCol] === FRESH) {
                grid[nextRow][nextCol] = 2
                freshOranges--
                queue.push([nextRow, nextCol])
            }
        }
    }

    if (freshOranges !== 0) {
        return -1
    }

    return minutes
}



console.log(
    orangesRotting(
        [
            [2, 1, 1, 0, 0],
            [1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1],
            [0, 1, 0, 0, 1],
        ]
    )) // 7

console.log(
    orangesRotting(
        [
            [1, 1, 0, 0, 0],
            [2, 1, 0, 0, 0],
            [0, 0, 0, 1, 2],
            [0, 1, 0, 0, 1],
        ]
    )) // -1

console.log(
    orangesRotting(
        [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1]
        ]
    )) // 4

console.log(
    orangesRotting(
        [
            [2, 1, 1],
            [0, 1, 1],
            [1, 0, 1]
        ]
    )) // -1

console.log(
    orangesRotting(
        [
            [0, 2]
        ]
    )) // 0

console.log(
    orangesRotting(

        [[0]]
    )
)