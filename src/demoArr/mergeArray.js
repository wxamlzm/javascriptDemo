// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge (intervals) {
  // 先按区间的起始点排序
  intervals.sort((a, b) => a[0] - b[0])

  let result = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i]
    let last = result[result.length - 1]

    // 如果当前区间的起始点在结果数组最后一个区间的结束点之后，说明没有重叠，直接添加到结果数组中
    if (current[0] > last[1]) {
      result.push(current)
    }
    // 否则有重叠，更新结果数组最后一个区间的结束点为两个区间结束点的较大值
    else {
      last[1] = Math.max(last[1], current[1])
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
merge(intervals)
