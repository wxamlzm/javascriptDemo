// 单项链表

// 链表节点类
class SingleLinkNode {
  constructor (val, next) {
    this.val = val === undefined ? null : val // 节点值
    this.next = next === undefined ? null : next // 指向下一个节点的引用
  }
}

module.exports = { SingleLinkNode }
