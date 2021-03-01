class Promise {
  constructor(executor) {
    //默认状态是等待状态
    this.status = 'panding';
    this.value = undefined;
    this.reason = undefined;
    //存放成功的回调
    this.onResolvedCallbacks = [];
    //存放失败的回调
    this.onRejectedCallbacks = [];
    let resolve = (data) => {//this指的是实例
      if (this.status === 'pending') {
        this.value = data;
        this.status = "resolved";
        this.onResolvedCallbacks.forEach(fn => fn());
      }

    }
    let reject = (reason) => {
      if (this.status === 'pending') {
        this.reason = reason;
        this.status = 'rejected';
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }
    try {//执行时可能会发生异常
      executor(resolve, reject);
    } catch (e) {
      reject(e);//promise失败了
    }
  }
  then(resolve, reject) {
    if(this.status === 'resolved') {
      resolve(this.value);
    }else if(this.status === 'rejected') {
      reject(this.reason);
    }
    if(this.status === 'pending') {
      this.onResolvedCallbacks.push(() => {
        resolve(this.value);
      })
      this.onRejectedCallbacks.push(() => {
        reject(this.reason);
      })
    }
  }
}