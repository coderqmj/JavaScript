const name = "qmj";
const foo = (name) => {
  console.log("my name is", name);
};
const info = {
  age: 18,
};

setTimeout(() => {
  console.log(info.age);
}, 2000);

module.exports = {
  name,
  foo,
  info,
};
