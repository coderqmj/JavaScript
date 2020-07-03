// js是静态作用域，函数作用域是在定义时决定的，而不是在调用时决定的

var name = 'global'

function foo() {
  console.log(name)
}

function bar() {
  var name = 'local'
  foo()
}

bar() // global 定义的时候决定的