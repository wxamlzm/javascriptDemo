// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 队列？
  // 1. 后置减前置，求最大值，
  // 2. 配置快慢指针，指针随index下移，保证完整性;
  // 3. prices[sell] - prices[buy]符合题中的购买后
  // 4. 购买后buy = sell+1; sell = buy+1;更新index
  // 5. 定义profits = new Array(prices.length),profits[i]为当天卖出的最大利润， profits[sell] = Math.max(...profits, prices[sell]-prices[buy])

  const profits = new Array(prices.length).fill(0)
  // i > 0 情况下的前利润 + 当前利润
  profits[i] = Math.max(profits[i - 1] + prices[sell] - prices[buy])

  // 初始化
  let sell = 1
  let buy = 0
  while (sell < prices.length) {


    // 卖出条件是盈利,即我认为有盈利即卖即可达成最大利润，这点不知道能不能占住，又怎么验证
    
    
    
    // 迭代循环
    sell = buy + 1
  }
}

const prices = [7, 1, 5, 3, 6, 4]
const res = maxProfit(prices)
console.log(res)
