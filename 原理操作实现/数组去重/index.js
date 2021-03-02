const a = [1,1,2,2,3]
// 方法一
const newArr = [...new Set([1,1,'1',NaN, NaN,'NaN', undefined, undefined])]
console.log(newArr) // 返回的是一个普通数组

// 方法二
// const newArr = new Set(Array.from(a))
// console.log(newArr)   // 返回的是一个伪数组 Set { 1, 2, 3 }
// console.log(newArr[0])  // 返回的是undefined

// 方法三 map
function foo(array) {
  let map = new Map();
  let res = [];
  for(let i =0;i<array.length; i++) {
    if(map.has(array[i])) {
      continue;
    }else {
      map.set(array[i],1);
      res.push(array[i])
    }
  }
  return res;
}
console.log(NaN === NaN)
console.log(foo([1,1,'1',NaN, NaN,'NaN', undefined, undefined]))