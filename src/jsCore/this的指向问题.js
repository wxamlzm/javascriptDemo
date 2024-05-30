// this.radius = 1

const shape = {
  radius: 10,
  diameter () {
    return this.radius * 2
  },

  perimeter: () => 2 * Math.PI * this.radius
}


console.log(shape.diameter())

console.log(shape.perimeter())
// 打开或注释第一行，体会不同的值；对应的概念;