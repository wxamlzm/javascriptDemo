// 给你一个整数数组 arr 。

// 将 arr 分割成若干 块 ，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

// 返回能将数组分成的最多块数？

 


// 排序+哈希：通过比较原数组arr和其排序后的数组sortedArr来确定切割点，原理是如果到了某个为止，原数组和排序数组包含了相同的元素集合，那么这个职位之前的部分就可以符合题意得独立排序，而不会影响整体得排序结果

// var maxChunksToSorted = function (arr) {
//   const cnt = new Map()
//   let res = 0
//   const sortedArr = new Array(arr.length).fill(0)
//   sortedArr.splice(0, arr.length, ...arr)
//   sortedArr.sort((a, b) => a - b)

//   for (let i = 0; i < sortedArr.length; i++) {
//     const x = arr[i]
//     const y = sortedArr[i]
//     cnt.set(x, (cnt.get(x) || 0) + 1)

//     if (cnt.get(x) === 0) {
//       cnt.delete(x)
//     }

//     cnt.set(y, (cnt.get(y) || 0) - 1)

//     if (cnt.get(y) === 0) {
//       cnt.delete(y)
//     }

//     console.log(cnt)

//     if (cnt.size === 0) {
//       res++
//     }
//   }
//   return res
// }

// 单调栈



const arr = [2, 1, 3, 4, 4]

const res = maxChunksToSorted(arr)
console.log(res)
