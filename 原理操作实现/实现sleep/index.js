/**
 * @方法一 setTimeout
 * @description 不行，还是异步
 */

function mySleep(func, delay) {
  setTimeout(func, delay);
}

// console.log(111);
// mySleep(()=> {console.log(333)}, 2000);
// console.log(2222)

function mySleep2(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  })
}

mySleep2(2000).then(()=> {console.log(333)})
// console.log(111)