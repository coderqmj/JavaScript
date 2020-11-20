// repeat方法
repeat = function (fn, times, delay) {
  let foo = function() {
    if(times==0) {
      return console.log('结束了')
    }else {
      fn()
      times--;
      setTimeout(() => {
        foo()
      }, delay);
    }
  }
  foo();
}
function bar() {
  console.log('111')
}
console.log(repeat(bar,5,300))
