function foo(arr) {
  return  [...new Set(arr.toString().split(',').map(item => item*1).sort((a,b) => a -b))]
}

// #000000 -- #ffffff
console.log(typeof Math.floor(Math.random()*0xffffff).toString(16))