Function.prototype.mycall = function(obj) {
  obj.fn = this
  obj.fn()
  delete obj.fn;
}
let obj1 = {
  name: 'qmj'
}

function foo() {
  console.log(this)
}
foo.mycall(obj1)