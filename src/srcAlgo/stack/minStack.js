// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// 实现 MinStack 类:
//     MinStack() 初始化堆栈对象。
//     void push(int val) 将元素val推入堆栈。
//     void pop() 删除堆栈顶部的元素。
//     int top() 获取堆栈顶部的元素。
//     int getMin() 获取堆栈中的最小元素。

var MinStack = function () {
  this.stack = []
  this.minValues = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)

  // 如果 minValues 为空或者新值小于等于当前最小值，将新值添加到 minValues 中
  if (this.minValues.length === 0 || val <= this.getMin()) {
    this.minValues.push(val)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) throw new Error('栈为空')

  // 只有当弹出的元素等于当前最小值时，才从 minValues 中移除
  if (this.stack[this.stack.length - 1] === this.getMin()) {
    this.minValues.pop()
  }

  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length === 0) throw new Error('栈为空')
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length === 0) throw new Error('栈为空')
  return this.minValues[this.minValues.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
