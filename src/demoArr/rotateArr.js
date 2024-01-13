// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

var rotate = function (nums, k) {
  const n = nums.length
  const newArr = new Array(n)
  for (let i = 0; i < n; ++i) {
    newArr[(i + k) % n] = nums[i]
  }
  for (let i = 0; i < n; ++i) {
    nums[i] = newArr[i]
  }
}
