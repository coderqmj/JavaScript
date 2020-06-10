let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.random()
    if(num>0.5) {
      resolve(num)
    }else {
      reject(num)
    }
  }, 1000);
}).then(num => {
  console.log('数字大于0.5,为:',num)
}, (num) => {
  console.log('数字小于0.5,为:',num)
})
// console.log(p) // 报错，Promise需要一些参数