// 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

// 实现 MyQueue 类：

//     void push(int x) 将元素 x 推到队列的末尾
//     int pop() 从队列的开头移除并返回元素
//     int peek() 返回队列开头的元素
//     boolean empty() 如果队列为空，返回 true ；否则，返回 false

var MyQueue = function () {
  // 输入栈
  this.inputStack = []
  // 输出栈
  this.outputStack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inputStack.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 倒装进输入栈
  if (this.outputStack.length === 0) {
    while (this.inputStack.length !== 0) {
      const lastStack = this.inputStack.pop()
      this.outputStack.push(lastStack)
    }
  }
  // 输出栈的最后一个，即输入栈的第一个，即期望的队列开头的元素
  return this.outputStack.pop()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // 倒装进输入栈
  if (this.outputStack.length === 0) {
    while (this.inputStack.length !== 0) {
      const lastStack = this.inputStack.pop()
      this.outputStack.push(lastStack)
    }
  }
  return this.outputStack[this.outputStack.length - 1]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inputStack.length === 0 && this.outputStack.length === 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
