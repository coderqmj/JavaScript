// 数组扁平化
function foo(arr) {
  let newArr = []
  for(let i =0;i<arr.length;i++) {
    if(Array.isArray(arr[i])) {
      newArr = newArr.concat(foo(arr[i]))
    }else {
      newArr.push(arr[i])
    }
  }
  return newArr
}
function foo1(arr) {
  return  arr.toString().split(',')
          .map(item => parseInt(item))
}

function foo2(arr, nums) {
  let newArr = []
  for(let i =0;i<arr.length;i++) {
    console.log(nums)
    if(Array.isArray(arr[i]) && nums!==0) {
      nums--;
      newArr = newArr.concat(foo2(arr[i],nums))
    }else {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(foo2([1,2,4,[5,6,[7,8]]],3))