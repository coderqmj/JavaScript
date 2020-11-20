
retry = function (fn, times, delay) {
  var err = null;
  return new Promise(function (resolve, reject) {

    var attempt = function () {
      fn().then(resolve).catch(function (err) {
        console.log(`Attempt #${times} failed`);
        if (0 == times) {
          reject(err);
        } else {
          times--;
          setTimeout(function () {
            attempt()
          }, delay);
        }
      });
    };

    attempt();

  })
}
