// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 需要遍历 考虑迭代
  // 不是单纯的便利，途中有判断条件，比如是否相等，因此，用while

  // 首先，对数组进行排序
  // 则排序后的数组，如果有相加为0的情况，必然是前面的和后面的相加，因为根据题设，需要负数和正数的情况

  const numsSort = nums.toSorted((a, b) => a - b)

  // 排序后，进行遍历

  for(let i = 0; i < nums.length; i++){
    // 遍历后
  }


}

const nums = [-1, 0, 1, 2, -1, -4]
const res = threeSum(nums)
console.log(res)
