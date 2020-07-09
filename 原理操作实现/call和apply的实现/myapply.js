Function.prototype.myapply = function(context, arr) {
  var conetxt = context || window;
  context.fn = this
  if(!arr) {
    context.fn()
  }else {
    let args = []
    for(let i = 0; i<arr.length; i++) {
      args.push('arr['+ i + ']')
    }
    console.log(args)
    eval('conetxt.fn('+ args + ')')
  }
}


var obj = {
  name: 'qmj',
  age: 18
}
function foo(name,age) {
  console.log(this.name,this.age,name,age)
}

foo.myapply(obj,['xjp',55])