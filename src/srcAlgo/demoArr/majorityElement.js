// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。
// 多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const n = nums.length
  if (n === 1) return nums[0]
  //  哈希
  const numsMap = {}
  for (let i = 0; i < n; i++) {
    if (numsMap[nums[i]]) {
      numsMap[nums[i]]++
      if (numsMap[nums[i]] >= n / 2) return nums[i]
    } else {
      numsMap[nums[i]] = 1
    }
  }
}

const nums = [2, 2, 1, 1, 1, 2, 2]
const res = majorityElement(nums)
console.log(res)

// 更新一个数学方法
// 
// var majorityElement = function (nums) {
//   nums.sort();
//   let n = nums.length;
//   return nums[Math.floor(n / 2)];
// };