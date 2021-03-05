// es6 实现
function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

function curry1(func, ...args) {
  return func.length <= args.length ? func(...args) : curry.bind(null, ...args);
}
function sum(a, b, c) {
  return a + b + c;
}

let currySum = curry(sum)
console.log(currySum(1,2,3))
console.log(currySum(1)(2)(3))