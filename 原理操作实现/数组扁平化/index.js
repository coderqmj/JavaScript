// 普通递归
const flatten = (arr) => {
  let result = [];
  arr.forEach((item, i, arr) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(arr[i])
    }
  })
  return result;
};

// toString
const flatten1 = (arr) =>  arr.toString().split(',').map((item) => item*1);

console.log(flatten1([1,2,[3,4,[5,6]]]))            

