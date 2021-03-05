/**
 * @description 里面元素为对象，根据里面的属性判断
 */

function foo(arr) {
  for(let i=0;i<arr.length;i++) {
    arr[i] = JSON.stringify(arr[i]);
  }
  let newArr = new Set([...arr]);
  for(let i=0;i<newArr.length;i++) {
    newArr[i] = JSON.parse(newArr[i]);
  }
  return newArr;
}

let arr1 = [
  {name: '1mjh', age: 18},
  {name: '1mjh', age: 18},
  {name: '1mjh', age: 18},
  {name: '1mjh', age: 18},
  {name: '1mjh', age: 19},
  {name: '2mjh', age: 19},
]

console.log(foo(arr1))