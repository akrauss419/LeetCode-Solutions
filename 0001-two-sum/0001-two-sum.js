/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (n = 0; n < nums.length; n++) {
            if (n === i) continue;
            if (nums[i] + nums[n] === target) {
                return [i, n];
            }
        }
    }
};