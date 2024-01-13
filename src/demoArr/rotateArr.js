// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

var rotate = function (nums, k) {
  const len = nums.length
  const rotateArr = []
  const notRotateArr = []
  for (let i = len - 1; i >= 0; i--) {
    if (i >= len - k) {
      rotateArr.push(nums[i])
    } else {
      notRotateArr.push(nums[i])
    }
  }

  return [...rotateArr.reverse(), ...notRotateArr.reverse()]
}

const nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3

const res = rotate(nums, k)
console.log(res)
