const names = ['aaa', 'bbb', 'ccc', 'ddd']

// 在每个后面加东西
// map 第一个参数是回调函数，第二个数绑定的this
// 回调函数有三个参数，1.执行时的对应元素，2、对应的下标，3.完整的数组对象
const a = names.map((item, index, arr)=>{
  return item + '000'
})
console.log(a)