// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

// 请返回 nums 的动态和。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const sumArray = []
  nums.forEach((num, index) => {
    let sum = 0
    for (let i = 0; i <= index; i++) {
      sum += nums[i]
    }
    sumArray.push(sum)
  })
  return sumArray
}

const res = runningSum([1, 2, 3, 4])
console.log(res)
