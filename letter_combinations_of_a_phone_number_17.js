/* 

    17. Letter Combinations of a Phone Number

    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
    A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

    https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png
    
    Example 1:
        Input: digits = "23"
        Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

    Example 2:
        Input: digits = ""
        Output: []

    Example 3:
        Input: digits = "2"
        Output: ["a","b","c"]
    

    Constraints:
        0 <= digits.length <= 4
        digits[i] is a digit in the range ['2', '9']        
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const phone_num_letters = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }
    res = []
    if (!digits.length) {
        return []
    }
    function combine_rec(i, cur_str) {
        if (cur_str.length === digits.length) {
            res.push(cur_str)
            return
        }
        for (let index = 0; index < phone_num_letters[digits[i]].length; index++) {
            combine_rec(i + 1, cur_str + phone_num_letters[digits[i]][index])
        }

    }
    combine_rec(0, "")
    return res
};

console.log(letterCombinations("23"));
