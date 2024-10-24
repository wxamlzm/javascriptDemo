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
  // 主栈：存储所有元素
  this.dataStack = []
  // 辅助栈：存储每个阶段的最小值
  this.minStack = []
}

/**
 * 将新元素推入栈中
 * @param {number} val - 要推入的值
 */
MinStack.prototype.push = function (val) {
  this.dataStack.push(val)
  // 如果辅助栈为空新元素小于等于当前最小值，则将新元素推入辅助栈
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
  if (this.dataStack.length === 0) return

  // 如果弹出的元素是当前最小值，辅助栈也要弹出
  if (
    this.dataStack[this.dataStack.length - 1] ===
    this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.pop()
  }
  this.dataStack.pop()
}

/**
 * @return {number} // top不能改变数组
 */
MinStack.prototype.top = function () {
  return this.dataStack[this.dataStack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}
