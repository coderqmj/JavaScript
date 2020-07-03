// Number.prototype.add = function(number) {
//   return this + number
// }
// Number.prototype.mins = function(number) {
//   return this - number
// }
// console.log((5).add(3).mins(2))

// var str = 'qiumojain'
// var str1 = new String('qiu')
// console.log(str1 instanceof String, typeof (str) === 'string', typeof (str1), Object.prototype.toString.call(str))

// function sum(n) {
//   return (1+n)*n/2
// }

// console.log(sum(10))

setTimeout(function() {
  console.log('setTimeout');
})

new Promise(function(resolve) {
  console.log('promise');
  resolve()
}).then(function() {
  console.log('then');
})

console.log('console');
