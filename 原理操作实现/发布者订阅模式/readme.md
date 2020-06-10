## 发布者订阅模式
需要：事件列表，去订阅函数on，去发布函数emit

事件列表：用于存放函数

on: 用于将操作存入list对应的key中
~~~
on(key, fn) {
  if(!this.list[key]) {
    this.lsit[key] = []
  }
  this.list[key].push(fn)
}
~~~

emit：从list对应key中取出函数并且执行
~~~
emit() {
  let key = [].shift.call(arguments),
  fns = this.list[key]
  if(!fns || fns.length ===0) {
    return false
  }
  fns.forEach(fn => {
    fn.apply(this, arguments)
  })
}
~~~