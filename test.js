function foo(arr) {
  return  [...new Set(arr.toString().split(',').map(item => item*1).sort((a,b) => a -b))]
}

let h = 'head'
console.log(h.toLowerCase().charAt(1),h)