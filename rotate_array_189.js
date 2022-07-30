/* 

    189. Rotate Array / Medium

    Given an array, rotate the array to the right by k steps, where k is non-negative.

    Example 1:
        Input: nums = [1,2,3,4,5,6,7], k = 3
        Output: [5,6,7,1,2,3,4]
        Explanation:
        rotate 1 steps to the right: [7,1,2,3,4,5,6]
        rotate 2 steps to the right: [6,7,1,2,3,4,5]
        rotate 3 steps to the right: [5,6,7,1,2,3,4]

    Example 2:
        Input: nums = [-1,-100,3,99], k = 2
        Output: [3,99,-1,-100]
        Explanation: 
        rotate 1 steps to the right: [99,-1,-100,3]
        rotate 2 steps to the right: [3,99,-1,-100]
    

    Constraints:
        1 <= nums.length <= 105
        -231 <= nums[i] <= 231 - 1
        0 <= k <= 105
    

    Follow up:
        Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
        Could you do it in-place with O(1) extra space?
        
*/

/*
    SOLUTION 1 REVERSING
    PROS -  
    CONS - 
    EVALUATION / Memory
        Runtime: 156 ms, faster than 37.71% of JavaScript online submissions for Rotate Array.
        Memory Usage: 53.1 MB, less than 19.89% of JavaScript online submissions for Rotate Array.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length

    nums = reverseArray(nums, 0, nums.length - 1)
    nums = reverseArray(nums, 0, k - 1)
    nums = reverseArray(nums, k, nums.length - 1)

    return nums
};

function reverseArray(arr, left_index, right_index) {
    while (left_index < right_index) {
        tmp = arr[left_index]
        arr[left_index] = arr[right_index]
        arr[right_index] = tmp
        left_index++
        right_index--
    }
    return arr
}

console.log(rotate([1, 5, 3, 6, 7, 4, 9, 2], 9));
