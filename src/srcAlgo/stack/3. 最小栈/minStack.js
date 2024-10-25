/*
  设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

  实现 MinStack 类:
    MinStack() 初始化堆栈对象。
    void push(int val) 将元素val推入堆栈。
    void pop() 删除堆栈顶部的元素。
    int top() 获取堆栈顶部的元素。
    int getMin() 获取堆栈中的最小元素。
*/

var MinStack = function () {
  // 主栈
  this.stack = []
  // 最小值的辅助栈
  this.minStack = []
}

/**
 * 将新元素推入栈中
 * @param {number} val - 要推入的值
 */
MinStack.prototype.push = function (val) {
  // 更新主栈
  this.stack.push(val)
  // 更新辅助栈，即将最小值压入辅助栈的栈顶
  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return
  // 如果pop是最小值，那需要同步更新辅助栈
  const stackTop = this.stack.pop()
  const minStackTop = this.minStack[this.minStack.length - 1]

  if (stackTop === minStackTop) {
    this.minStack.pop()
  }

  return stackTop
}

/**
 * @return {number} // top不能改变数组
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}
