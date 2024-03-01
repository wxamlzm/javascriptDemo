// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// 实现 MinStack 类:
//     MinStack() 初始化堆栈对象。
//     void push(int val) 将元素val推入堆栈。
//     void pop() 删除堆栈顶部的元素。
//     int top() 获取堆栈顶部的元素。
//     int getMin() 获取堆栈中的最小元素。

var MinStack = function () {
  let stack = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) throw new Error('栈为空')
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
  this.stack.sort((a, b) => b - a)
  return this.stack[0]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
