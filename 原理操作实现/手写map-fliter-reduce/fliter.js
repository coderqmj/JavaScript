Array.prototype.myFilter = function (fn) {
  if (typeof fn !== 'function') {
      throw new TypeError(`${fn} is not a function`);
  }
  // 获取该数组
  const arr = this;
  // 获取该数组长度
  const len = this.length >>> 0;
  // 新建一个新的数组用于放置该内容
  const temp = [];

  // 对数组中每个值进行处理
  for (let i = 0; i < len; i++) {
      // 处理时注意this指向
      const result = fn.call(arguments[1], arr[i], i, arr);
      result && temp.push(arr[i]); //过滤器
  }
  return temp;
}
// reduce实现filter
Array.prototype._filter = function (callback) {
  if(typeof callback === 'function') {
    return this.reduce((prev,item,index,arr) => {
      callback(item, index, arr) ? prev.push(item) : null
      return prev
    }, [])
  } else {
    console.log(new Error('callback is not function'))
  }
}