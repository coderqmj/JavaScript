// 面试题1 编写一个函数，该函数将遍历整数列表，并在延迟3s后打印每个元素的索引

// 方法一 let
function fun() {
  let arr = [11,22,33,44,55]
  for(let i=0;i<arr.length;i++) {
    setTimeout(() => {
      console.log('index:',i)
    }, 3000);
  }
}
fun()

// 方法二 闭包
const arr = [11, 22, 33, 44, 55]

for (var i = 0; i < arr.length; i++) {
  setTimeout(function (local_i) {
    return function () {
      console.log('index:', local_i);
    }
  }(i), 3000);
}