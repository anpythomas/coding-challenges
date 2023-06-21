/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (n = i+1; n < nums.length; n++) {
            if (nums[i] + nums[n] === target) {
                return [i, n]
            }
        }
    }
};