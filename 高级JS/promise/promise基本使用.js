const promise = new Promise((resolve, reject) => {
  console.log("这里会被立即执行");
  resolve();
});
// then方法传入的回调函数，会在Promise执行resolve函数时，被回调
promise.then(() => {});
// catch方法传入的回调函数，会在Promise执行reject函数时，被回调
promise.catch(() => {});
