let event = {
  list: {},

  on(key, fn) {
    if (!this.list[key]) this.list[key] = [];
    this.list[key].push(fn);
  },

  emit(key) {
    if (!this.list[key] || this.list[key].length === 0) {
      return console.log('不存在订阅事件');
    }
    let fns = this.list[key];
    fns.forEach(fn => {
      fn()
    });
  },

  remove(key, fn) {
    let fns = this.list[key];
    if (!fns) return false;
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      fns.forEach((cb, i) => {
        if (cb === fn) {
          fns.splice(i, 1);
        }
      })
    }
  }
}


let emit = {
  event: {},
  on: function(key, func) {
    if(!this.event[key]){
      this.event[key] = [];
    }
    this.event[key].push(func)
  },

  emit: function(key) {
    if(this.event[key].length===0) return;
    let fns = this.event[key];
    fns.forEach(fn => {
      fn();
    })
  },

  remove: function(key, fn) {
    if(this.event[key].length===0) return;
    let fns = this.event[key];
    fns.forEach((item, index) => {
      if(item === fn) {
        this.event[key].splice(index, 1);
      }
    })
  }

}