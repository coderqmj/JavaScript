let originArr = [1,2,3,4]
arr2 = originArr.slice()
arr2.push(5)
arr3 = [...originArr,5,6,]
console.log(originArr,arr2,arr3)