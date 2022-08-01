
/* 

    217. Contains Duplicate / Easy

    Given an integer array nums, return true if any value appears at least twice in the array, 
    and return false if every element is distinct.

    Example 1:
        Input: nums = [1,2,3,1]
        Output: true

    Example 2:
        Input: nums = [1,2,3,4]
        Output: false

    Example 3:
        Input: nums = [1,1,1,3,3,4,3,2,4,2]
        Output: true
    

    Constraints:
        1 <= nums.length <= 105
        -109 <= nums[i] <= 109

*/


/*
    SOLUTION 1 SORTING
    PROS - MEMORY 
    CONS - EVALUATION
    EVALUATION / Memory
        Runtime: 179 ms, faster than 29.86% of JavaScript online submissions for Contains Duplicate.
        Memory Usage: 50.5 MB, less than 73.31% of JavaScript online submissions for Contains Duplicate.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicateSort = function (nums) {
    nums.sort((a, b) => a - b)
    for (let index = 0; index < nums.length; ++index) {
        if (nums[index] == nums[index + 1]) {
            return true
        }
    }
    return false
};

/*
    SOLUTION 2 HASHMAP
    PROS - EVALUATION
    CONS - MEMORY
    EVALUATION / Memory
        Runtime: 78 ms, faster than 99.00% of JavaScript online submissions for Contains Duplicate.
        Memory Usage: 51.2 MB, less than 35.61% of JavaScript online submissions for Contains Duplicate.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicateHashMap = function (nums) {
    const nums_length = nums.length
    let l_pointer = 0
    let r_pointer = nums.length - 1
    const hashMap = new Map()

    while (l_pointer < nums_length / 2) {
        const left_elem = nums[l_pointer];
        const right_elem = nums[r_pointer]

        if (left_elem == right_elem && l_pointer != r_pointer) {
            return true
        }

        if (hashMap.has(left_elem) || hashMap.has(right_elem)) {
            return true
        }

        hashMap.set(left_elem)
        hashMap.set(right_elem)
        l_pointer++
        r_pointer--
    }
    return false
};

console.log(containsDuplicateSort([1, 5, -2, -4, 0, 4, -2]));
console.log(containsDuplicateHashMap([1, 2, 3, 1]));