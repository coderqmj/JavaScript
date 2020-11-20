// 防抖函数的实现
function debounce(func, wait, immediate) {
  let timeout
  return function () {
    // 改变内部this的指向
    // console.log(this) container调用该函数，
    // 所以this指向container
    let context = this
    let args = arguments
    clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      // 立即执行
      if (callNow) func.apply(context, args)
    } else {
      // 不会立即执行
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }

  }
}

let count = 0
let container = document.querySelector('#container')
function doSomething(e) {
  // console.log(e)
  // console.log(this)
  // 可能做ajax请求或者回调
  container.innerHTML = count++
}
container.onmousemove = debounce(doSomething, 300, true)