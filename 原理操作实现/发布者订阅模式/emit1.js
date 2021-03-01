let event = {
  list: {},

  on(key, fn) {
    if(!this.list[key]) this.list[key] = [];
    this.list[key].push(fn);
  },

  emit(key) {
    if(!this.list[key] || this.list[key].length===0) {
      return console.log('不存在订阅事件');
    }
    let fns = this.list[key];
    fns.forEach(fn => {
      fn()
    });
  },

  remove(key, fn) {
    let fns = this.list[key];
    if(!fns) return false;
    if(!fn) {
      fns && (fns.length = 0);
    }else {
      fns.forEach((cb, i) => {
        if(cb === fn) {
          fns.splice(i,1);
        }
      })
    }
  }
}