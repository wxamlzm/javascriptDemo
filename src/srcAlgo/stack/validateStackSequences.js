// 给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，
// 只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，
// 返回 true；否则，返回 false 。

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  // 抄的思路，仿写
  // 没理解题目
  // 没设计好程序过程

  // 辅助栈
  const stack = []
  let j = 0

  for (let i = 0; i < pushed.length; i++) {
    const pushNum = pushed[i]
    stack.push(pushNum)
    while (stack.length !== 0 && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j++
    }
  }
  return stack.length === 0
}

const pushed = [1, 2, 3, 4, 5]
const popped = [4, 5, 3, 2, 1]

const res = validateStackSequences(pushed, popped)
