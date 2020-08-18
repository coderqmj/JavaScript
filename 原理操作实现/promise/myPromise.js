
// 步骤一，实现成功回调与失败回调
class myPromise {
  constructor() {
    this.status = 'panding';
    this.value = undefined;
    this.reason = undefined;
    this.resolveCallback = [];
    this.resolveCallback = [];

    let resolve = (data) => {
      if (this.status === 'panding') {
        this.value = data;
        this.panding = 'resolved'
        this.rejectCallback.forEach(fn => fn())
      }
    }
    let reject = (resaon) => {
      if (this.status === 'panding') {
        this.resaon = resaon;
        this.panding = 'reject'
        this.rejectCallback.forEach(fn => fn())
      }
    }
  }
  // 步骤二 实现.then
  then(onFulFilled, onRejected) {
    if (this.status === 'resolved') {
      onFulFilled('this.value')
    }
    if (this.status === 'rejected') {
      onRejected()
    }

    // 当前既没有完成 也没有失败
    if (this.status === 'pending') {
      // 存放成功的回调
      this.onResolvedCallbacks.push(() => {
        onFulFilled(this.value);
      });
      // 存放失败的回调
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }

  }
}

