## Promise

### 一.创建Promise

~~~javascript
let p = new Promise
console.log(p) // TypeError: Promise resolver undefined is not a function
~~~

- **参数**

报错信息表示，`Promise`需要一些参数，需要一个函数(**执行器**)作为参数，该函数有两个参数：**resolve**和**reject**，这两个参数均为函数，成功 调用 **resolve** 失败调用 **reject**

~~~javascript
let p =new Promise(function(resolve, reject){
    if(/* 异步操作成功 */){
        resolve(data)
    }else{
        reject(err)
    }
})
~~~

- **state**

**Promise**是有状态的： **pending** (等待态)丶 **fulfilled** (成功态)丶 **rejected** (失败态) **pending**可以转换为fulfilled或**rejected**，但**fulfilled**和**rejected**不可相互转化。 

- resolve/reject 方法

**resolve**方法可以将**pending**转为**fulfilled**，**reject**方法可以将**pending**转为**rejected**。

- **then**方法

通过给**Promise**示例上的**then**方法传递两个函数作为参数，可以提供改变状态时的回调，第一个函数是成功的回调，第二个则是失败的回调。

~~~javascript
p.then(function(data){ // resolve方法会将参数传进成功的回调
    console.log(data)  
}, function(err){      // reject方法会将失败的信息传进失败的回调
    console.log(err)
})
~~~

~~~javascript
let p = new Promise(function(resolve, reject){
    setTimeout(function(){
        let num = Math.random()
        if (num > 0.5) {
            resolve(num)
        }else{
            reject(num)
        }
    }, 1000)
})
p.then(function(num){
    console.log('大于0.5的数字：', num)
},function(num){
    console.log('小于等于0.5的数字', num)
})
// 数字大于0.5,为: 0.7179578898051426
~~~

- 链式调用

除此之外，每一个**then**方法都会返回一个新的**Promise**实例（不是原来那个），让**then**方法支持链式调用，并可以通过返回值将参数传递给下一个**then**

~~~javascript
p.then(function(num){
    return num
},function(num){
    return num
}).then(function(num){
    console.log('大于0.5的数字：', num)
},function(num){
    console.log('小于等于0.5的数字', num)
})
~~~

- **Promise.all()**

这可能是个很有用的方法，它可以统一处理多个**Promise**

**Promise.all**能将多个**Promise**实例包装成一个**Promise**实例

~~~javascript
let Promise1 = new Promise(function(resolve, reject){})
let Promise2 = new Promise(function(resolve, reject){})
let Promise3 = new Promise(function(resolve, reject){})

let p = Promise.all([Promise1, Promise2, Promise3])

p.then(funciton(){
  // 三个都成功则成功  
}, function(){
  // 只要有失败，则失败 
})
~~~

