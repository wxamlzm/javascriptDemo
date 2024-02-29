// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge (intervals) {
  // 按区间起点对这组区间进行排序
  intervals.sort((a, b) => a[0] - b[0])
  // 将第一个区间也就是起点最小的区间放入
  const result = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    // 排序后区间的第二个开始
    const current = intervals[i]
    // 注意这里对last，也就是上一个数据的表达
    const last = result[result.length - 1]

    // 如果后区间的start，大于前区间的end,必然没交集
    if (current[0] > last[1]) {
      result.push(current)
    } else {
      // 这里应该用到了地址传值了
      last[1] = Math.max(current[1], last[1])
    }
  }
  return result
}

let intervals = [
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18]
]
const res = merge(intervals)
console.log(res)
