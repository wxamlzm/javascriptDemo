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
  this.numStack = []
  // 辅助栈
  this.minStack = []
}

/**
 * 将新元素推入栈中
 * @param {number} val - 要推入的值
 */
MinStack.prototype.push = function (val) {
  // 推入主栈
  this.numStack.push(val)
  // 将最小值推入辅助栈栈顶
  if (
    this.minStack.length === 0 ||
    this.minStack[this.minStack.length - 1] >= val
  ) {
    this.minStack.push(val)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 常规操作：从主栈栈顶取出
  const stackTopNum = this.numStack.pop()
  // 辅助操作：如果取出值是最小值，则从辅助栈栈顶取出一个
  if (stackTopNum === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop()
  }
}

/**
 * @return {number} // top不能改变数组
 */
MinStack.prototype.top = function () {
  return this.numStack[this.numStack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}
