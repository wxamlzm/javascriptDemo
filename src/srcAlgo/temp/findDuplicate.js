// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

// 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。

// 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 不修改，排序就无效了
  // 哈希表不符合O(1)额外空间
  // 基础双循环？
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return nums[i]
    }
  }
}

const arr = (nums = [1, 3, 4, 2, 2])
const res = findDuplicate(nums)
console.log(res)
