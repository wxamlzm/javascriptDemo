// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。

// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // 执行累加 当累加等于target时，返回缓存的数集
  // 当累加小于target时继续累加，并推入数集
  // 当累加大于target时

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
    return
  }

  for (let i = start; i < candidates.length; i++) {
    path.push(candidates[i])
    const newTarget = target - candidates[i]
    backtrack(candidates, newTarget, i, path, result)
    path.pop()
  }
}

const candidates = [2, 3, 6, 7],
  target = 7

combinationSum(candidates, target)
