// 给定一个非负整数数组 nums 和一个整数 k ，你需要将这个数组分成 k 个非空的连续子数组。
// 设计一个算法使得这 k 个子数组各自和的最大值最小。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  function check (mx) {
    let cnt = 1
    let s = 0
    for (const x of nums) {
      if (s + x <= mx) {
        s += x
      } else {
        // 新划分一段
        if (cnt++ === k) {
          return false
        }
        s = x
      }
    }
    return true
  }

  let right = _.sum(nums)
  let left = Math.max(Math.max(...nums) - 1, (right - 1) / k)
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)
    if (check(mid)) {
      right = mid
    } else {
      left = mid
    }
  }
  return right
}
