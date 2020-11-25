Array.prototype.selfForeach = function(fn, context) {
  // 第一个参数必须要为function
  if (typeof fn !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  // 获取数组
  let arr = Array.prototype.slice.call(this);
  let _len = arr.length;
  for (let i = 0; i < _len; i++) {
    fn.call(context, arr[i], i, arr);
  }
  return arr;
};
