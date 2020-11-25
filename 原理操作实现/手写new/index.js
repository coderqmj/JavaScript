function createNew(Con, ...args) {
  let obj = {} // 创建一个对象，因为new操作符会返回一个对象
  Object.setPrototypeOf(obj, Con.prototype) // 将对象与构造函数原型链接起来
  // obj.__proto__ = Con.prototype // 等价于上面的写法
  let result = Con.apply(obj, args) // 将构造函数中的this指向这个对象，并传递参数
  return result instanceof Object ? result : obj
}