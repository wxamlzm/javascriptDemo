// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

}



// js中splice的应用
// var removeElement2 = function (nums, val) {
//   let i = 0
//   while (i < nums.length) {
//     if (nums[i] === val) {
//       nums.splice(i, 1)
//     } else {
//       i++
//     }
//   }
//   console.log(nums)
//   return nums.length
// }

let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2

const res = removeElement(nums, val)
console.log(res)
