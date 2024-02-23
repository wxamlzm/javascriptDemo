// 标准二分法

function binarySearch (nums, target) {
  // 数组的左右两端序号
  let left = 0
  let right = nums.length - 1

  //

  while (left <= right) {
    // let mid = Math.floor((left + right) / 2)
    let mid = (left + right) >> 1

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      // 目标值在右侧
      left = mid + 1
    } else {
      // 目标值在左侧
      right = mid - 1
    }
  }
}
