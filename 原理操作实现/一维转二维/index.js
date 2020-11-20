function foo(arr,num) {
  let newArr = [];
  for(let i=0; i<arr.length;) {
    newArr.push(arr.slice(i,i+=num))
  }
  return newArr
}

console.log(foo([1,2,3,4,5],4))