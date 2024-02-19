// 给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，请你返回一个长度为 2 的列表 answer ，其中：

// - answer[0] 是 nums1 中所有 不 存在于 nums2 中的 不同 整数组成的列表。
// - answer[1] 是 nums2 中所有 不 存在于 nums1 中的 不同 整数组成的列表。

// 注意：列表中的整数可以按 任意 顺序返回。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const ans = []
  // 思路：取交集，去除交集，分别返回
  const nums2Set = new Set(nums2)
  const nums1Set = new Set(nums1)

  ans[0] = Array.from(nums1Set).filter(value => !nums2Set.has(value))
  ans[1] = Array.from(nums2Set).filter(value => !nums1Set.has(value))

  return ans
}

let nums1 = [1, 2, 3, 3],
  nums2 = [1, 1, 2, 2]
const res = findDifference(nums1, nums2)
