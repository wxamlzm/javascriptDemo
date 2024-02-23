/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = []
  const backtrack = (s, path, total) => {
      if (total == n && path.length == k) {
          res.push(path)
          return
      } else if (total > n) return//剪枝优化 
      for (s; s <= 9 - (k - path.length) + 1; s++) {//剪枝 优化 因为答案要存在k个数 
          //在集合n中至多要从该起始位置: 9 - (k - path.length) + 1，开始遍历 才能拿到足够的元素
          // total = total + s
          // backtrack(s + 1, path.concat(s), total)
          // 如果是上面这种写法 比如第一层循环的s=1执行时total=0+1 当其执行完之后 
          //再进入第一层循环的s = 2时total = 1(这个1就是第一层循环的s=1产生改变的我们已经拿不到第一层循环开始时的total=0了)+2=3
          //而我们想要的是total = 0(通过回溯拿到刚进入第一次循环的total = 0) + 2 =2
          backtrack(s + 1, path.concat(s), total + s)//这样的写法才是正确的 
      }
  }
  backtrack(1, [], 0)
  return res
};