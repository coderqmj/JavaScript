// var a = function () { this.b =3; }
// var c = new a();
// a.prototype.b = 9;
// var b = 7;
// a();
// console.log(b);  // 3
// console.log(c.b);  // 9

// console.log('----------------')
// var func1 = x => x;
// var func2 = x => {x};
// var func3 = x => ({x});
// console.log(func1(1)); // 1
// console.log(func2(1));  // {1}
// console.log(func3(1));  // {1}

// function name(params) {
//   console.log('aaa')
// }

// function Person(name) {
// this.name = name;
// }
// Person.prototype.print = function() {
// return this.name;
// };

// Person('abc');
// const a = new Person('abc').print.call({});
// console.log(a);

// const fn = () => {
// this.x = 'z';
// };

// const b = {x: 'y'};
// fn.call(b);
// console.log(b);
// console.log(name instanceof Object)



// async function async1(){
// console.log('async1 start')
// await async2()
// console.log('async1 end')  // await后面这行相当于.then，微任务
// }

// async function async2(){
// console.log('async2')
// }

// console.log('script start')

// setTimeout(function(){
// console.log('setTimeOut')
// }, 0)

// async1()

// new Promise(function(resolve){
// console.log('promise1')
// resolve()
// }).then(function(){
// console.log('promise2')
// })

// console.log('script end')
// script start => async1 start => async2 => async1 end => promise1 => script end => promise2 => setTimeOut



// var a = [0];
// if (a) {
//   console.log(a == true);
// } else {
//   console.log(a);
// }


// let obj = {
//   name: "bytedance",
//   fun: function () {
//     console.log(this.name);
//   }
// }
// let a = obj.fun;
// a(); // undefined  
// obj.fun(); // "bytedance"  

// console.log([1] == [1])

// -----------------------
// var a = 10;
// (function () {
//   console.log(a); 
//   a = 5;
//   console.log(window.a);
//   console.log(a);
//   var a = 20;// 如果var a=20改成let a = 20;打印什么
//   console.log(a);
// })()

// undefind 10 5 20 报错

// -----------


// console.log([0] == true)

// console.log([] == 0,[] == "" )

// console.log(Object.create(null))

// console.log(Symbol('1'),Symbol('1'))

// (async () => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2) 
//   }, 0);
//   await new Promise((res, rej) => {
//     console.log(3)
//   }).then(() => {
//     console.log(4)
//   });
//   console.log(5)
// })()

function nums(a,b) {
  if(a>b) {
    console.log('a is')
  }else {
    console.log('b');
    return a + b
  }
}
console.log(nums(4,2))
console.log(nums(1,2))