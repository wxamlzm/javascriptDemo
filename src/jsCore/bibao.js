// 完成一个闭包

for (var i = 0; i < 10; i++) {
  function print (i) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }

  print(i)
}
