/**
 * 1.判断传入的fn是否为函数类型
 * 2.赋值，获取到数组机器长度
 * 3.设置返回值的初始状态，如果有预设值就为预设值，如果没有设置为arr[0]，再使索引+1
 * 4.遍历索引，是得每一个元素都被reducer进行处理
 */

Array.prototype.myReduce = function (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`);
  }
  const arr = this;
  const len = arr.length >>> 0;
  let value;// 最终返回的值
  let k = 0;// 当前索引
  if (arguments.length >= 2) {
    value = arguments[1];
  } else {
    // 当数组为稀疏数组时，判断数组当前是否有元素，如果没有索引加一
    while (k < len && !(k in arr)) {
      k++;
    }
    // 如果数组为空且初始值不存在则报错
    if (k >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    value = arr[k++];
  }
  while (k < len) {
    if (k in arr) {
      value = fn(value, arr[k], k, arr);
    }
    k++;
  }
  return value;
}

