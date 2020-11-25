function print(times) {
  let t1 = setInterval(() => {
    times--;
    console.log(times)
    if (times === 0) {
      clearTimeout(t1);
    }
    console.log('hello world')
  }, 1000)
}

print(4)