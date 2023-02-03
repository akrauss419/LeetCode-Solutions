/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squaresArr = [];
    for (i = 0; i < nums.length; i++) {
        let squareNum = nums[i] ** 2;
        squaresArr.push(squareNum);
    }
    return squaresArr.sort(compareNums);

    function compareNums(a, b) {
        return a - b;
    }
};