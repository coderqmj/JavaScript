function one2two(arr, num) {
  // console.log(arr.splice(num))
  return [arr.splice(0,num),arr]
}
console.log(one2two([1,2,3,4,5],4))