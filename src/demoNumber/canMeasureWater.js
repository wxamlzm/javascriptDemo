// 有两个水壶，容量分别为 jug1Capacity 和 jug2Capacity 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 targetCapacity 升。
// 如果可以得到 targetCapacity 升水，最后请用以上水壶中的一或两个来盛放取得的 targetCapacity 升水。
// 你可以：

// 装满任意一个水壶
// 清空任意一个水壶
// 从一个水壶向另外一个水壶倒水，直到装满或者倒空

/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  // 判断两个数及两个数的差额能否通过加减法得出第三个数？
  const num1 = jug1Capacity
  const num2 = jug2Capacity
  const num3 = Math.abs(jug1Capacity - jug2Capacity)

  const numArray = Array.from(new Set([num1, num2, num3])).filter(
    ele => ele < targetCapacity
  )

  console.log(numArray)

  if (numArray.length == 0) return false
  // 这里原则上是一个递归思路，但我们肯定不用，转动态规划思路


}

let jug1Capacity = 3,
  jug2Capacity = 5,
  targetCapacity = 4

canMeasureWater(jug1Capacity, jug2Capacity, targetCapacity)



// var canMeasureWater = function(x, y, z) {
//   if (x + y < z) {
//       return false;
//   }
//   if (x === 0 || y === 0) {
//       return (z === 0) || (x + y  === z);
//   }
//   return (z % gcd(x, y)) === 0;
// };
// function gcd(a, b) {
//   if (b === 0) {
//       return a;
//   }
//   return gcd(b, a % b);
// }