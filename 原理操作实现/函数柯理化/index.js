function curry(func) {
  return function curried(...args) {
    console.log(args, func.length)
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

const sum = (a, b, c) => {
  return a+b+c;
}

const sumA = curry(sum);
console.log(sumA(1,2,3))
console.log(sumA(1)(2)(3))