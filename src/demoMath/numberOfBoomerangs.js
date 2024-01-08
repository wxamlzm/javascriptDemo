// 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的欧式距离相等（需要考虑元组的顺序）。

// 返回平面上所有回旋镖的数量。

/**
 * @param {number[][]} points
 * @return {number}
 */
function numberOfBoomerangs (points) {
  let ans = 0
  for (const p of points) {
    const cnt = new Map()
    for (const q of points) {
      const dis = (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1])
      cnt.set(dis, (cnt.get(dis) || 0) + 1)
    }
    for (const [_, m] of cnt.entries()) {
      console.log(_, m)
      ans += m * (m - 1)
    }
  }
  return ans
}


numberOfBoomerangs([[0,0],[1,0],[2,0]])