// 如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 接近 ：

//     操作 1：交换任意两个 现有 字符。
//         例如，abcde -> aecdb
//     操作 2：将一个 现有 字符的每次出现转换为另一个 现有 字符，并对另一个字符执行相同的操作。
//         例如，aacabb -> bbcbaa（所有 a 转化为 b ，而所有的 b 转换为 a ）

// 你可以根据需要对任意一个字符串多次使用这两种操作。

// 给你两个字符串，word1 和 word2 。如果 word1 和 word2 接近 ，就返回 true ；否则，返回 false 。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  // 长度不一样肯定不行
  const word1Len = word1.length
  const word2Len = word2.length
  if (word1Len !== word2Len) return false
  // 可以多次操作
  // 长度相同的情况
  // 操作1即 两者哈希表完全一致？
  // 操作2即 两者哈希表的value一致即可

  // 翻译操作1,2，即两者哈希表的value的Array，排除顺序完全一致即可?
  const word1Map = new Map()
  const word2Map = new Map()
  for (let i = 0; i < word1Len; i++) {
    if (word1Map.has()) {
      word1Map[word1[i]] += 1
    } else {
      word1Map[word1[i]] = 1
    }

    if (word2Map[word2[i]]) {
      word2Map[word2[i]] += 1
    } else {
      word2Map[word2[i]] = 1
    }
  }
  // 只要word1Map里的value word2Map都有

  for (let key in word1Map) {
  }

  console.log(word1Map, word2Map)
}

let word1 = 'cabbba',
  word2 = 'abbccc'
const res = closeStrings(word1, word2)
