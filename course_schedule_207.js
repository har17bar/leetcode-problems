/*

    207. Course Schedule / Medium

    There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
    Return true if you can finish all courses. Otherwise, return false.

    Example 1:
        Input: numCourses = 2, prerequisites = [[1,0]]
        Output: true
        Explanation: There are a total of 2 courses to take.
        To take course 1 you should have finished course 0. So it is possible.

    Example 2:
        Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
        Output: false
        Explanation: There are a total of 2 courses to take.
        To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

    Constraints:
        1 <= numCourses <= 2000
        0 <= prerequisites.length <= 5000
        prerequisites[i].length == 2
        0 <= ai, bi < numCourses
        All the pairs prerequisites[i] are unique.
*/

/*
    SOLUTION 1 BRUTE FORCE
    CONS - EVALUATION
    CONS - MEMORY
    EVALUATION / Memory
        Runtime: 573 ms, faster than 5.07% of JavaScript online submissions for Course Schedule.
        Memory Usage: 49.7 MB, less than 21.93% of JavaScript online submissions for Course Schedule.
*/
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

/*
    SOLUTION 1 TOPOLOGICAL SORT
    PROS - EVALUATION
    PROS - MEMORY
    EVALUATION / Memory
        Runtime: 70 ms, faster than 99.40% of JavaScript online submissions for Course Schedule.
        Memory Usage: 45.4 MB, less than 94.01% of JavaScript online submissions for Course Schedule.
*/
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
