// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = []
  backtrack(candidates, target, 0, [], result)
  return result
}

function backtrack (candidates, target, start, path, result) {
  if (target < 0) {
    return
  }

  if (target === 0) {
    result.push([...path])
  }

  for (let i = start; i < candidates.length; i++) {
    path.push(candidates[i])
    const newTarget = target - candidates[i]
    backtrack(candidates, newTarget, i, path, result)
    path.pop()
  }
}
