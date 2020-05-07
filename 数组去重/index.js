const a = [1,1,2,2,3]
// 方法一
// const newArr = [...new Set(a)]
// console.log(newArr,newArr[1]) // 返回的是一个普通数组

// 方法二
// const newArr = new Set(Array.from(a))
// console.log(newArr)   // 返回的是一个伪数组 Set { 1, 2, 3 }
// console.log(newArr[0])  // 返回的是undefined

// 方法三