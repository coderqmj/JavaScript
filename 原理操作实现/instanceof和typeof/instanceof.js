let arr = [1,2,3]
let foo = function() {
  console.log('hahh')
}
// console.log(arr)
// console.log(arr.__proto__ === Array.prototype)
// console.log(arr instanceof Function)
// console.log(foo instanceof Function)
// console.log(foo instanceof Object)

function instance_of(L,R) {
  let O = R.prototype
  while(L.__proto__) {
    if(L.__proto__ === O) {
      return true
    }else{
      L = L.__proto__
    }
  }
  return false
}
console.log(instance_of(foo,Array))