/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;
    let elementSum = 0;
    for (i = 0; i < nums.length; i++) {
        len += i;
        elementSum += nums[i];
    }
    return len - elementSum;
};