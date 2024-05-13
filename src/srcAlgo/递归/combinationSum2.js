// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = []
  candidates.sort((a, b) => a - b) // 对 candidates 数组进行排序
  backtrack(candidates, target, 0, [], result)
  return result
}

function backtrack (candidates, target, start, path, result) {
  if (target < 0) {
    return
  }

  if (target === 0) {
    result.push([...path])
    return
  }

  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue
    }
    path.push(candidates[i])
    const newTarget = target - candidates[i]
    backtrack(candidates, newTarget, i + 1, path, result)
    path.pop()
  }
}

const candidates = [10, 1, 2, 7, 6, 1, 5]
const target = 8

combinationSum2(candidates, target)
