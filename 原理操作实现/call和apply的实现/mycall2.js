Function.prototype.mycall2 = function (context) {
  context.fn = this;
  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  eval('context.fn(' + args + ')') // eval 会解析字符串，并执行
  delete context.fn;
}

var obj1 = {
  name: 'qmj',
  age: 18
}
function foo(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.name)
  console.log(this.age)
}
foo.mycall2(obj1, 'xjp', 55)