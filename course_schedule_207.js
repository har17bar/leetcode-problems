/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill(0).map(() => []);

    for(let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i];
        adjList[pair[1]].push(pair[0])
    }
    for(let v = 0; v < numCourses; v++) {
        const queue = [];
        const seen = {};
        for(let i = 0; i < adjList[v].length; i++) {
            queue.push(adjList[v][i]);
        }

        while(queue.length) {
            const current = queue.shift();
            seen[current] = true;

            if(current === v) return false;
            const adjacent = adjList[current];
            for(let i = 0; i < adjacent.length; i++) {
                const next = adjacent[i];
                if(!seen[next]) {
                    queue.push(next);
                }
            }
        }
    }

    return true;
};

function tpSort(numCourses, prerequisites){
    const inDegree = new Array(numCourses).fill(0);
    const adjList = new Array(numCourses).fill(0).map(() => []);

    for(let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i]
        inDegree[pair[0]]++
        adjList[pair[1]].push(pair[0])
    }

    const stack = [];
    for(let i = 0; i < inDegree.length; i++) {
        if(inDegree[i] === 0) {
            stack.push(i);
        }
    }
    let count = 0;
    while(stack.length) {
        const current = stack.pop();
        count++;
        const adjacent = adjList[current]

        for(let i = 0; i < adjacent.length; i++) {
            const next = adjacent[i]
            inDegree[next]--
            if(inDegree[next] === 0) {
                stack.push(next)
            }
        }
    }

    return count === numCourses;
}

console.log(canFinish(6,[[1,0],[2,1],[2,5],[0,3],[4,3],[3,5],[4,5]]))

console.log(tpSort(6,[[1,0],[2,1],[2,5],[0,3],[4,3],[3,5],[4,5]]))
console.log(tpSort(2, [[1,0],[0,1]]))
console.log(tpSort(6, [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]))
console.log(tpSort(2, [[1,0]]))
