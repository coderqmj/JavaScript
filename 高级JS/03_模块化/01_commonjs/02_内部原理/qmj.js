const { name, foo, info } = require("./index");

console.log(foo(name));

setTimeout(() => {
  info.age = 19;
}, 1000);
