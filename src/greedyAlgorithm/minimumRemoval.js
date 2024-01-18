// 给定一个 正整数 数组 beans ，其中每个整数表示一个袋子里装的魔法豆的数目。
// 请你从每个袋子中 拿出 一些豆子（也可以 不拿出），
// 使得剩下的非空袋子中（即至少还有一颗魔法豆的袋子）魔法豆的数目相等。
// 一旦把魔法豆从袋子中取出，你不能再将它放到任何袋子中。
// 请返回你需要拿出魔法豆的 最少数目。

/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function (beans) {
  // 按题设，将所有非空豆子的数量都相等
  // 应该只有两种情况，即都和最小的非空值相等及空
  let delCount = 0
  beans.sort((a, b) => a - b)
  let newBeans = new Array(beans.length).fill(0)
  let beansMax = beans[beans.length - 1]
  for (let i = 0; i < beans.length; i++) {
    // 问题在于怎么判断当前位置的值，该减最小值还是该把自己清空
    // 所以问题应该是最大值
    // 如果最大值减去当前位置的值 和 大于当前位置的值（即当前位置扣到0的值）那当前位置应该选择扣0
    // 同时扣0后，当前位置将不再纳入最小值的比较中
    if (beansMax - beans[i] > beans[i]) {
      delCount += beans[i]
    } else {
      newBeans[i] = beans[i]
    }
  }
  // 去0
  newBeans = newBeans.filter(ele => ele !== 0)
  // 计算削到最小值的数量
  if (newBeans.length == 0) {
    return delCount
  } else {
    for (let i = newBeans.length - 1; i > 0; i--) {
      let diff = newBeans[i] - newBeans[0]
      delCount += diff
    }
    return delCount
  }
}

const beans = [2, 10, 3, 2]
const res = minimumRemoval(beans)
console.log(res)
