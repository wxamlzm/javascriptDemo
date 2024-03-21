// 给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。

// s 的 旋转操作 就是将 s 最左边的字符移动到最右边。

//     例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let count = 0
  let sCopyArr = s.split('')
  while (count < s.length) {
    const sCopyStr = sCopyArr.join('')
    // 判断是否旋转
    if (sCopyStr === goal) return true

    // 旋转
    const fistStr = sCopyArr.shift()
    sCopyArr.push(fistStr)
    count++
  }

  return false
}

const s = 'abcde'
const goal = 'cdeab'
const res = rotateString(s, goal)
console.log(res)
