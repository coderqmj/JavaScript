// 第一版
function _bind(asThis, ...args1) {
  let fn = this; // 函数调用时，原this其实就是这个调用函数
  return function (...args2) {
    // 同时，返回的新函数也可以接受参数
    return fn.call(asThis, ...args1, ...args2);
  };
}

// 手写bind
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  args = args ? args : [];
  return function newFn(...newFnArgs) {
    if (this instanceof newFn) {
      return new fn(...args, ...newFnArgs);
    }
    return fn.apply(context, [...args, ...newFnArgs]);
  };
};
