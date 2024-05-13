// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // 先遍历内层即行，再遍历外层，即列？

  // 数组为栈
  const wordArray = word.split('')
  // 从内层数组的第一个字母开始遍历

  const hangLen = board[0].length
  const lieLen = board.length
  let i = 0,
    j = 0

  let wordFlag = false

  while (i < lieLen) {
    const curHang = board[i]
    console.log(1)
    while (j < hangLen) {
      if (curHang[i] === wordArray[0]) {
        wordArray.shift()
        j++
        // 切状态
        wordFlag = true
      }
      // 这里要控制记录，当第一次有匹配值时，就需要连续匹配，中间如果有不匹配的，就重置状态
      if (wordFlag === true && curHang[i] !== wordArray[0]) {
        // 移动列
        i++
        // 跳出当前循环
        break
      }
    }
  }

  console.log(wordArray)
}

const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ],
  word = 'ABCCED'

exist(board, word)
