// 最后一集 47min
function throttle(fn, interval, options = { leading: true, trailing: false }) {
  // 1.记录上一次的开始时间
  const { leading, trailing } = options;
  let lastTime = 0;
  let timer = null;

  // 2.事件触发时, 真正执行的函数
  const _throttle = function () {
    // 2.1.获取当前事件触发时的时间
    const nowTime = new Date().getTime();
    // 如果是第一次不执行，则lastTime=nowTime，remainTime就>0,第一次不执行了
    if (!lastTime && !leading) lastTime = nowTime;

    // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      // 走到里面正常执行，则需要清除定时器，防止fn执行两遍
      if (timer) {
        clearTimeout(timer);
        timer = null; // timer设置为null，不然后面的定时器无法添加
      }

      // 2.3.真正触发函数
      fn();
      // 2.4.保留上次触发的时间
      lastTime = nowTime;
      return; // return 防止下面添加定时器
    }

    // 如果最后一次需要执行，当之前没有定时器时，需要添加一个定时器，防止remainTime间隔没到时没执行throttle，而导致没执行fn
    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null;
        lastTime = !leading ? 0 : new Date().getTime(); // 重点：有首次触发时，
        fn();
      }, remainTime); // 使用remainTime作为定时器时间，比如throttle的interval=10s，13s是最后一次触发，那remainTime=7s，这样到20s就可以执行最后一次
    }
  };

  return _throttle;
}
