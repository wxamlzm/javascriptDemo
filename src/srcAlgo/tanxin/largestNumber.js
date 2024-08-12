// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const quickSort = (strs, left, right) => {
    if (left > right) return

    let i = left
    let j = right

    while (i < j) {
      // 直到找到可排序在strs[left]前的数
      while (i < j && strs[j] + strs[left] <= strs[left] + strs[j]) j--
      // 直到找到可排序在strs[left]后的数
      while (i < j && strs[i] + strs[left] >= strs[left] + strs[i])
        i++

        // 解构换值
      [strs[i], strs[j]] = [strs[j], strs[i]]
    }
    // 没理解？
    [strs[i], strs[left]] = [strs[left], strs[i]]

    // 更新右边界
    quickSort(strs, left, i - 1)
    // 更新左边界
    quickSort(strs, i + 1, right)
    // 为什么要更新两次？
  }

  const strs = nums.map(num => num.toString())
  quickSort(strs, 0, strs.length - 1)
  if (strs[0] === '0') {
    return '0'
  }

  return strs.join('')
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// const nums = [3, 30, 34, 5, 9]

const res = largestNumber(nums)
console.log(res)
