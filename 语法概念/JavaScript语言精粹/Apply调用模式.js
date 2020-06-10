var add = function (a, b) {
  return a + b
}

var obj = {
  arr: [3, 4]
}
// var sum = add.apply(null, arr)
var sum = add.apply(obj, this.arr)
console.log(sum)

// console.log(null)
// console.log.apply(obj,arguments)