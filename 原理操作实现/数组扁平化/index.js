// 普通递归
const flatten = (arr,num) => {
  let result = [];
  arr.forEach((item, i, arr) => {
    if (Array.isArray(item)&& num!=0) {
      num--;
      result = result.concat(flatten(item,num));
    } else {
      result.push(arr[i])
    }
  })
  return result;
};

// toString
const flatten1 = (arr) =>  arr.toString().split(',').map((item) => item*1);

console.log(flatten([1,2,[3,4,[5,6]]],2))            

