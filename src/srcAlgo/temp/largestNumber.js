// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // 设nums中的每个数的位数为numsIndex

  const numsFormat = nums.map(ele => ele.toString())

  const compare = (a, b) => {
    let order1 = a + b
    let order2 = b + a
    return order2.localeCompare(order1)
  }

  numsFormat.sort(compare)

  if (numsFormat[0] === '0') {
    return '0'
  }

  return numsFormat.join('')
}

const nums = [3, 30, 34, 5, 9]
const res = largestNumber(nums)
console.log(res)
