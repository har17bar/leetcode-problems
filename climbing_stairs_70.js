/* 

    70. Climbing Stairs / Easy

    You are climbing a staircase. It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    Example 1:
        Input: n = 2
        Output: 2
        Explanation: There are two ways to climb to the top.
        1. 1 step + 1 step
        2. 2 steps

    Example 2:
        Input: n = 3
        Output: 3
        Explanation: There are three ways to climb to the top.
        1. 1 step + 1 step + 1 step
        2. 1 step + 2 steps
        3. 2 steps + 1 step

    Constraints:
        1 <= n <= 45
*/


/*
    SOLUTION 1 BRUTE FORCE RECURSION MEMORIZATION
    PROS - EVALUATION  
    CONS - MEMORY
    EVALUATION / Memory
        Runtime: 68 ms, faster than 82.25% of JavaScript online submissions for Climbing Stairs.
        Memory Usage: 42.1 MB, less than 18.60% of JavaScript online submissions for Climbing Stairs.
*/
var climbStairs_mem = function (n) {
    let treeData = {}
    return (function climbStairs_mem(n) {
        if (n == 0) {
            return 1
        }
        if (n < 0) {
            return 0
        }
        if (treeData[n] > 0) {
            return treeData[n]
        }

        treeData[n] = climbStairs_mem(n - 1) + climbStairs_mem(n - 2);
        return treeData[n]
    })(n)
};

console.log(climbStairs_mem(40), "climbStairs_mem")


/*
    SOLUTION 2 BRUTE FORCE RECURSION
    PROS - MEMORY
    CONS - EVALUATION
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 0) {
        return 1
    }
    if (n < 0) {
        return 0
    }
    return climbStairs(n - 1) + climbStairs(n - 2)
};

console.log(climbStairs(40), "climbStairs");
