let obj = {
  name: 'qmj',
  age: 18
}


console.log(Object.keys(obj))
Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj,key,{
    set(newValue){
      console.log('监听'+key+'改变')
      value = newValue
    },
    get(){
      console.log('获取'+key+'的值')
      const w1 = new Watcher('zhansan')
      return value
    }
  })
})
// obj.name = 'qqqq'
// console.log(obj.name)

// 发布者订阅模式
class Dependency {
  constructor() {
    // 记录谁需要订阅
    this.subscribes = []
  }
  addSub(watcher) {
    this.subscribes.push(watcher)
  }
}

class Watcher {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(this.name+'发生update')
  }
}

const dep = new Dependency()

