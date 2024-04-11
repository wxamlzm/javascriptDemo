// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 翻译代码吧，卡了好几天看不懂了
  let indegrees = new Array(numCourses).fill(0)
  let adjacency = new Array(numCourses).fill().map(() => [])
  let queue = []

  // Get the indegree and adjacency of every course.
  for (let [cur, pre] of prerequisites) {
    indegrees[cur]++
    adjacency[pre].push(cur)
  }

  // Get all the courses with the indegree of 0.
  for (let i = 0; i < indegrees.length; i++) {
    if (indegrees[i] === 0) queue.push(i)
  }

  // BFS TopSort.
  while (queue.length) {
    let pre = queue.shift()
    numCourses--
    for (let cur of adjacency[pre]) {
      indegrees[cur]--
      if (indegrees[cur] === 0) queue.push(cur)
    }
  }

  return numCourses === 0
}

// 课程之间规定了前置条件，但不能构成任何环路，否则课程前置条件将不成立？
// 为什么不能构成环路
// 在这之前 图的环路怎么构成

const numCourses = 2,
  prerequisites = [[1, 0]]
