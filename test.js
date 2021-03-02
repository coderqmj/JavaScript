function foo(arr) {
  return [...new Set(arr.toString().split(',').map(item => item * 1).sort((a, b) => a - b))]
}

// #000000 -- #ffffff
console.log(typeof Math.floor(Math.random() * 0xffffff).toString(16))

let map = new Map();
map.set('1', 1);
map.set(1, 1)
map.set(NaN, 1)



console.log(map.has(NaN))

console.log(typeof new String('a'))

// let p1 = new Promise((resolve, reject) => {
// 	reject(1);
// });

// p1.catch(() => {
// 	console.log(2);
// }).catch(console.log(3));

// setTimeout(() => {
// 	console.log(1);
// }, 0);

// const promise = new Promise((resolve, reject) => {
// 	console.log(2);
// 	reject(3);
// 	console.log(4);
// });

// promise
// 	.then(() => console.log(5))
// 	.catch(() => console.log(6))
// 	.then(() => console.log(7))
// 	.catch(() => console.log(8))
// 	.then(() => console.log(9));

// console.log(10);


const fn = (...args) => {
  console.log(...args)
  for (const arg of args) {
    console.log(arg);
  }
};
const [a, b] = [1, 2];
fn`${a} + ${b} = ${a + b}`;

function all(promises) {
  return new Promise((resolve, reject) => {
    let res = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((res) => {
        res[i] = res;
        if (++count === primise.length) {
          resolve(res)
        }
      }, err => {
        reject(err)
      })
    }
  })
}