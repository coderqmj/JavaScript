// add(1,2,3), 只需要取出参数就行
function add1(...args) {
  return args.reduce(
    (prev, val)=> prev + val
  )
}
function add (a) {
  function sum(b) { // 使用闭包
      a = a + b; // 累加
      return sum;
  }
  sum.toString = function() { // 重写toSting() 方法
      return a;
  }
  return sum; // 返回一个函数
}

function add1(x){  
  var sum = x;  
  var tmp = function(y){  
      sum = sum + y;  
      return tmp;  
  };  
  tmp.toString = function(){  
      return sum;  
  };  
  return tmp;  
} 
function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function() {
      _args.push(...arguments);
      return _adder;
  };

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
      return _args.reduce(function (a, b) {
          return a + b;
      });
  }
  return _adder;
}
console.log(add(1)(2)(3))