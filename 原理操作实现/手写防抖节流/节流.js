function throttle(callback, delay) {
  let prev = Date.now();
  return function() {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if(now-prev >= delay) {
      prev = Date.now();
      callback.apply(context, args);
    }
  }
}