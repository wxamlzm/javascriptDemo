// 编写一个函数，获取一个正整数的二进制形式并返回其二进制表达式中 设置位的个数（也被称为汉明重量）

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = ''
  const convert = num => {
    if (num === 1) return (res += 1)

    const shang = Math.floor(num / 2)
    const yuShu = num % 2

    res += yuShu
    if (shang === 1) {
      res += shang
      return
    }
    convert(shang)
  }

  convert(n)

  let count = 0
  for (let i = 0; i < res.length; i++) {
    if (res[i] === '1') {
      count += 1
    }
  }
  return count
}

const n = 1
const res = hammingWeight(n)
console.log(res)
