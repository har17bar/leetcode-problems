/* 

    1791. Find Center of Star Graph / Easy

    There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.
    You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.
    
    Example 1:
        https://assets.leetcode.com/uploads/2021/02/24/star_graph.png
        Input: edges = [[1,2],[2,3],[4,2]]
        Output: 2
        Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

    Example 2:
        Input: edges = [[1,2],[5,1],[1,3],[1,4]]
        Output: 1

    Constraints:
        3 <= n <= 105
        edges.length == n - 1
        edges[i].length == 2
        1 <= ui, vi <= n
        ui != vi
        The given edges represent a valid star graph.     
*/

/*
    SOLUTION
    PROS -  MEMORY
    PROS -  EVALUATION
    EVALUATION / Memory
        Runtime: 103 ms, faster than 96.09% of JavaScript online submissions for Find Center of Star Graph.
        Memory Usage: 57.1 MB, less than 74.38% of JavaScript online submissions for Find Center of Star Graph.
*/
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    nodesCount = edges.length
    node_a_0 = edges[0][0]
    node_a_1 = edges[0][1]
    if (edges[1][0] == node_a_0 || edges[1][1] == node_a_0) {
        return node_a_0
    }
    return node_a_1
};

console.log(
    findCenter(
        [[1, 16], [16, 2], [3, 16],
        [4, 16], [16, 5], [16, 6], [7, 16], [16, 8], [9, 16], [10, 16],
        [16, 11], [12, 16], [16, 13], [16, 14], [15, 16], [16, 17]]
    ));