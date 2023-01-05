/*
 * @Author: zd
 * @Date: 2022-11-14 15:05:25
 * @LastEditors: zd
 * @LastEditTime: 2022-11-15 09:13:12
 * @Description:
 */
function Product (name, price) {
  this.name = name
  this.price = price
}

function Food (name, price) {
  Product.call(this, name, price)
  this.category = 'food'
}

function Toy (name, price) {
  Product.call(this, name, price)
  this.category = 'toy'
}

var cheese = new Food('feta', 5)
var fun = new Toy('robot', 40)

console.log(cheese, fun)
