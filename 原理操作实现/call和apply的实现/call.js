Function.prototype.mycall = function(context=window){
  context.fn = this;
  let args = [...arguments].slice(1)
  let result = context.fn(...args)
  delete context.fn
  return result
}

let obj = {
  name: 'qmj',
  age:20
}
var name = 'qqq'
var foo = function(name,age) {
  console.log(this.age)
  console.log(this.name)
  console.log(name)
  console.log(age)
}
foo.mycall(obj,'qqq',18)