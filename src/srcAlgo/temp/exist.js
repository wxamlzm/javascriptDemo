// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board || board.length === 0 || board[0].length === 0) {
    return false
  }

  const m = board.length
  const n = board[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, word, i, j, 0)) {
        return true
      }
    }
  }

  return false
}

function dfs (board, word, i, j, index) {
  if (index === word.length) {
    return true
  }

  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    board[i][j] !== word[index]
  ) {
    return false
  }

  const temp = board[i][j]
  board[i][j] = '#' // 标记已访问过的元素

  const found =
    dfs(board, word, i + 1, j, index + 1) ||
    dfs(board, word, i - 1, j, index + 1) ||
    dfs(board, word, i, j + 1, index + 1) ||
    dfs(board, word, i, j - 1, index + 1)

  board[i][j] = temp // 还原元素

  return found
}

const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ],
  word = 'ABCCED'

exist(board, word)
