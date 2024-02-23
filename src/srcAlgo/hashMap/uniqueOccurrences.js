// 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。

// 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const arrMap = {}
  for (let i = 0; i < arr.length; i++) {
    if (arrMap[arr[i]]) {
      arrMap[arr[i]] += 1
    } else {
      arrMap[arr[i]] = 1
    }
  }

  const values = new Set()
  for (let key in arrMap) {
    const value = arrMap[key]

    if (values.has(value)) {
      return false
    }

    values.add(value)
  }
  return true
}

let arr = [1, 2, 2, 1, 1, 3]
const res = uniqueOccurrences(arr)
console.log(res)
