// 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

var reverseVowels = function (s) {
  const n = s.length
  const arr = Array.from(s)
  let i = 0,
    j = n - 1
  while (i < j) {
    while (i < n && !isVowel(arr[i])) {
      ++i
    }
    while (j > 0 && !isVowel(s[j])) {
      --j
    }
    if (i < j) {
      swap(arr, i, j)
      ++i
      --j
    }
  }
  return arr.join('')
}

const isVowel = ch => {
  return 'aeiouAEIOU'.indexOf(ch) >= 0
}

const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
