
// async function foo() {
//   console.log('foo')
// }
// async function bar() {
//   console.log('bar start')
//   await foo()
//   console.log('bar end')
// }
// console.log('script start')
// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)
// bar();
// new Promise(function (resolve) {
//   console.log('promise executor')
//   resolve();
// }).then(function () {
//   console.log('promise then')
// })
// console.log('script end')


// script start
// bar start
// promise executor
// script end
// foo
// bar end
// promise then
// setTimeout
console.log('-----------------------------------')

setTimeout(()=>{console.log(111)},0)

let promise = new Promise((resolve,reject)=>{
	console.log(222);
	resolve(3333)
});

let promise2 = new Promise((resolve,reject)=>{
	console.log(555);
	resolve(6666)
});

setTimeout(()=>{
	console.log(4444);
},0)

promise.then(res=>{
	console.log(res);
});

promise2.then(res=>{
	console.log(res);
});

// 222 => 555 => 333 => 666 => 111 => 444
// 
// 




