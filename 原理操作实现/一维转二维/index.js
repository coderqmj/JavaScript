// 一维转二维
function foo(arr,num) {
  let newArr = [];
  for(let i=0; i<arr.length;) {
    newArr.push(arr.slice(i,i+=num))
  }
  return newArr
}
function splits(arr, num) {
  return [arr.splice(0, num), arr];
}

console.log(splits([1,2,3,4,5],4))

// console.log(foo([1,2,3,4,5],4))