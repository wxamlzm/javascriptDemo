// 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。
// 如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。
// 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。
// 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

// 你所设计的解决方案必须只使用常量级的额外空间。

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = i + 1; j < numbers.length; j++) {
  //     if (numbers[i] + numbers[j] === target) {
  //       return [i + 1, j + 1]
  //     }
  //   }
  // }
  // 优化思路
  // 条件： “非递减顺序排列”，即 numbers[i+1] >= numbers[i]
  // 条件： “假设每个输入 只对应唯一答案”
  // 从这个角度出发考虑是否能节省遍历点
  // 现在的复杂度是O(N^2)，可以考虑的只有O(N)和O(nlogn)

  // 结合以上条件，我让两个指针分别从两端像中间靠拢，当左右位置的和大于target时，右指针-1，当左右位置的和小于target时左指针+1
  const len = numbers.length
  let i = 0
  let j = len - 1
  while (i < j) {
    const sum = numbers[i] + numbers[j]
    if (sum > target) {
      j = j - 1
    } else if (sum < target) {
      i = i + 1
    } else {
      return [i + 1, j + 1]
    }
  }
}

let numbers = [2, 7, 11, 15],
  target = 9

const res = twoSum(numbers, target)
console.log(res)
