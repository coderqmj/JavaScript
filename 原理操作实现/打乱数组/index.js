// sort 并不是真正的乱序
// 计算机的 random 函数因为循环周期的存在，无法生成真正的随机数
Array.sort((a, b) => 0.5 - Math.random())

// 洗牌算法
Array.prototype.shuffle = function () {
  let m = this.length, i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
}

function shuffle(arr) {
  // 每次从未处理的数组中随机取一个元素，
  // 然后把该元素放到数组的尾部，
  // 即数组的尾部放的就是已经处理过的元素，
  let n = arr.length, random;
  while (0 != n) {//>>>作用是向下取整？
    random = (Math.random() * n--) >>> 0; // 无符号右移位运算符向下取整
    [arr[n], arr[random]] = [arr[random], arr[n]] // ES6的结构赋值实现变量互换
  }
  return arr;
}