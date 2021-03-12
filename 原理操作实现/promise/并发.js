// // javascript 实现一个带并发限制的异步调度器，保证同时最多运行2个任务
// class Scheduler {
//   add(promiseCreator) { ... }
//   // ...
//   }
//   const timeout = (time) => new Promise(resolve => {
//   setTimeout(resolve, time)
//   })
  
//   const scheduler = new Scheduler()
  
//   const addTask = (time, order) => {
//   scheduler.add(() => timeout(time))
//   .then(() => console.log(order))
//   }
  
//   addTask(1000, '1')
//   addTask(500, '2')
//   addTask(300, '3')
//   addTask(400, '4') // output: 2 3 1 4
  // 一开始，1、2两个任务进入队列
  // 500ms时，2完成，输出2，任务3进队
  // 800ms时，3完成，输出3，任务4进队
  // 1000ms时，1完成，输出1
  // 1200ms时，4完成，输出4

  // 带有并发限制的调度器
// class Scheduler {
//   constructor(limit) {
//       this.limit = limit
//       this.number = 0
//       this.queue = []
//   }
//   addTask(timeout, str) {
//       this.queue.push([timeout, str])
//       this.start();
//   }
//   start() {
//       if (this.number < this.limit && this.queue.length) {
//           var [timeout, str] = this.queue.shift()
//           this.number++
//           setTimeout(() => {
//               console.log(str)
//               this.number--
//               this.start()
//           }, timeout * 1000);
//           this.start()
//       }
//   }
// }
// let scheduler = new Scheduler(2);
// scheduler.addTask(1, '1');   // 1s后输出’1'
// scheduler.addTask(2, '2');  // 2s后输出’2'
// scheduler.addTask(1, '3');  // 2s后输出’3'
// scheduler.addTask(1, '4');  // 3s后输出’4'
// scheduler.start();


class Scheduler {
  constructor(maxNum) {
    this.taskList = [];
    this.count = 0;
    this.maxNum = maxNum;
  }
  async add(promiseCreator) {
    if (this.count >= this.maxNum) {
      await new Promise((resolve) => {
        this.taskList.push(resolve)
      })
    }
    this.count ++;
    const result = await promiseCreator();
    this.count --;
    if (this.taskList.length > 0) {
      // console.log(this.taskList.shift()())
      this.taskList.shift()(); // 把任务函数拿出来用
    }
    return result;
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})
const scheduler = new Scheduler(2);
const addTask = (time, val) => {
  scheduler.add(() => {
    return timeout(time).then(() => {
      console.log(val)
    })
  })
}
addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');



// function Scheduler() {
// 	let temp = 0;
// 	let res = [];
// 	let len = 0;
// 	this.add = function (promiseCreator) {
// 		let myPromise = new Promise((resolve) => {
// 			temp++;
// 			if (temp <= 2) {
// 				resolve(
// 					promiseCreator().then(function f() {
// 						if (res.length) {
// 							let { myresolve, fullfilled } = res.shift();
// 							myresolve(fullfilled().then(f));
// 						} else {
// 							temp = 0;
// 						}
// 					})
// 				);
// 			} else {
// 				res.push({ fullfilled: promiseCreator, myresolve: resolve });
// 			}
// 		});
// 		return myPromise;
// 	};
// }

// const timeout = (time) =>
// 	new Promise((resolve) => {
// 		setTimeout(resolve, time);
// 	});
// const scheduler = new Scheduler();
// const addTask = (time, order) => {
// 	scheduler.add(() => timeout(time)).then(() => console.log(order));
// };
// addTask(1000, "1");
// addTask(500, "2");
// addTask(300, "3");
// addTask(100, "4");