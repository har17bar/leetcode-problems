/* 

    1971. Number of Islands / Medium

    Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
    
    Example 1:
       Input: grid = [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
        ]
        Output: 1

    Example 2:
        Input: grid = [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
        ]
        Output: 3

    Constraints:
        m == grid.length
        n == grid[i].length
        1 <= m, n <= 300
        grid[i][j] is '0' or '1'.    
*/


const directions = [
    [-1, 0], // up
    [0, 1], // right
    [1, 0], // down
    [0, -1]// left
]

/*
    SOLUTION BREADTH FIRST SEARCH BFS REPLACING 0
    PROS -  EVALUATION O(MN+MN) -> O(N)
    CONS -  MEMORY O(max(M,N)) -> O(N)
    EVALUATION / Memory
        Runtime: 97 ms, faster than 84.41% of JavaScript online submissions for Number of Islands.
        Memory Usage: 48.5 MB, less than 44.81% of JavaScript online submissions for Number of Islands.
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsBfs = function (grid) {
    if (grid.length <= 0) return 0
    let islandCount = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] == 1) {
                islandCount++
                grid[row][col] = 0
                const queue = []
                queue.push([row, col])
                while (queue.length) {
                    const [curRow, curCol] = queue.shift()
                    for (let k = 0; k < directions.length; k++) {
                        let nextRow = curRow + directions[k][0]
                        let nextCol = curCol + directions[k][1]
                        if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[row].length) {
                            continue
                        }
                        if (grid[nextRow][nextCol] == 1) {
                            queue.push([nextRow, nextCol])
                            grid[nextRow][nextCol] = 0
                        }
                    }
                }
            }
        }
    }
    return islandCount
};


/*
    SOLUTION DEPTH FIRST SEARCH DFS REPLACING 0
    PROS -  MEMORY O(M*N) -> O(N)
    CONS -  EVALUATION O(M*N) -> O(N)
    EVALUATION / Memory
        Runtime: 136 ms, faster than 48.05% of JavaScript online submissions for Number of Islands.
        Memory Usage: 44.6 MB, less than 88.61% of JavaScript online submissions for Number of Islands.

*/
const numberOfIslands = function (grid) {
    if (!grid.length) return 0;
    let islandCount = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == 1) {
                islandCount++;
                DFS(grid, row, col);
            }
        }
    }

    return islandCount;
};

function DFS(grid, row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
        return;
    }

    if (grid[row][col] == 1) {
        grid[row][col] = 0
        for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const rowStep = currentDir[0];
            const colStep = currentDir[1];
            DFS(grid, row + rowStep, colStep + col)
        }
    }
}

/*
    SOLUTION BREADTH FIRST SEARCH BFS USING SEEN STRUCTURE
*/
function numberOfIslandsBfsSet(grid) {
    if (!grid.length) return 0
    seen = new Array(grid.length).fill(new Array(grid[0].length).fill(false))
    let islandCount = 0

    function bfs(curRow, curCol) {
        let queue = []
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        queue.push([curRow, curCol])
        seen[curRow][curCol] = true

        while (queue.length) {
            const [curRow, curCol] = queue.shift()
            for (let i = 0; i < directions.length; i++) {
                stepRow = curRow + directions[i][0]
                stepCol = curCol + directions[i][1]
                if (stepRow < 0 || stepRow >= grid.length || stepCol < 0 || stepCol >= grid[0].length) {
                    continue;
                }
                if (!seen[stepRow][stepCol] && grid[stepRow][stepCol] == 1) {
                    seen[stepRow][stepCol] = true
                    queue.push([stepRow, stepCol])
                }
            }
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid.length; col++) {
            if (grid[row][col] == 1 && seen[row] && !seen[row][col]) {
                bfs(row, col)
                islandCount++
            }
        }
    }
    return islandCount
}

console.log(
    numberOfIslandsBfsSet(
        [
            [1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1]
        ]
    )
);

console.log(
    numIslandsBfs(
        [
            [1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1]
        ]
    )
);

console.log(
    numberOfIslands(
        [
            [1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1]
        ]
    )
);