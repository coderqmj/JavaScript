Function.prototype.mycall = function (context) {
  var context = context || window;
  context.fn = this
  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  var result = eval('context.fn(' + args + ')')
  return result
}

var obj = {
  name: 'qmj',
  age: 18
}

var name = 'hahh'
var age = 100 

function foo(name, age) {
  console.log(this.name, this.age, name, age)
}

foo.mycall()