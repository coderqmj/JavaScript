let event = {
  list: {},
  on(key, fn) {
    if(!this.list[key]) {
      this.list[key] = []
    }
    this.list[key].push(fn)
  },
  emit() {
    let key = [].shift.call(arguments)
    fns = this.list[key]
    if(!fns || fns.length === 0) {
      return console.log('该key没有对应的事件')
    }
    fns.forEach(fn => {
      fn.apply(this, arguments)
    })
  }
}

function dog() {
  console.log('汪汪汪')
}
event.on('dog', data => console.log(data))
event.on('dog', dog)
event.emit('dog', ['嘿嘿嘿', '哈哈哈'])