// 中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。

//     例如 arr = [2,3,4] 的中位数是 3 。
//     例如 arr = [2,3] 的中位数是 (2 + 3) / 2 = 2.5 。

// 实现 MedianFinder 类:

//     MedianFinder() 初始化 MedianFinder 对象。

//     void addNum(int num) 将数据流中的整数 num 添加到数据结构中。

//     double findMedian() 返回到目前为止所有元素的中位数。与实际答案相差 10-5 以内的答案将被接受。

var MedianFinder = function () {
  this.list = []
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.list.push(num)
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const len = this.list.length
  if (len % 2 === 0) {
    let sum = 0
    for (let i = 0; i < len; i++) {
      sum += this.list[i]
    }
    return sum / len
  } else {
    const mid = Math.floor(len / 2)
    return this.list[mid]
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
