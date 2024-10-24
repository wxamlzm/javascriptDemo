// 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

// 实现 MyQueue 类：

//     void push(int x) 将元素 x 推到队列的末尾
//     int pop() 从队列的开头移除并返回元素
//     int peek() 返回队列开头的元素
//     boolean empty() 如果队列为空，返回 true ；否则，返回 false
// 说明：

// 你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
// 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。

var MyQueue = function () {
  // 输入栈
  this.inStack = []
  // 输出栈
  this.outStack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 因为js的pop是移除末尾
  // 而当前的pop期望是移除开头，而当前题设期望要求是仅用pop和push
  // 设法倒装inStack到outStack
  // 而输出栈中如果是未空状态，则意味着，先入的还未出，而根据push和pop的效果，此时再push入的输入栈数据则会被先出而违背了需求
  if (this.outStack.length === 0) {
    this.transferElements()
  }
  return this.outStack.pop()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.outStack.length === 0) {
    this.transferElements()
  }
  // 队列开头是指输入栈的第一个，即输出栈的最后一个
  // 为什么不能用inStack[0]，因为输出栈可能非空
  return this.outStack[this.outStack.length - 1]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inStack.length === 0 && this.outStack.length === 0
}

/*
 * 辅助方法：将入栈的所有元素转移到出队栈
 */
MyQueue.prototype.transferElements = function () {
  while (this.inStack.length > 0) {
    this.outStack.push(this.inStack.pop())
  }
}
