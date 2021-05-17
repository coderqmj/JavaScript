function deepCopy(obj) {
  let result = obj.constructor == Array? []: {};
  for(let key in obj){
    result[key] =  typeof result[key] == 'object' ? deepCopy(obj[key]) : obj[key]
  }

  return result
}


/**
 * 函数不能还是无法进行深拷贝
 */
const deepCopy1 = (object) => {
  if(typeof object !== 'object') return;
  let result = object.constructor === Array ? [] : {};
  for(let key in object) {
    result[key] = typeof object[key] === 'object' ? deepCopy1(object[key]) : object[key];
  }
  return result;
}
let obj1 = {
  name: 'qiu',
  age: 18,
  obj2: {
    name: 'qqq',
    age: 1321
  },
  foo: function name(aaa) {
    console.log(aaa)
  }
}

/**
 * 考虑对象，数组，Date，正则，函数
 */
function deepClone(target){
  if(target instanceof Object){
      let dist ;
      if(target instanceof Array){
        // 拷贝数组
        dist = [];
      }else if(target instanceof Function){
        // 拷贝函数
        dist = function () {
          return target.call(this, ...arguments);
        };
      }else if(target instanceof RegExp){
        // 拷贝正则表达式
       dist = new RegExp(target.source,target.flags);
      }else if(target instanceof Date){
          dist = new Date(target);
      }else{
        // 拷贝普通对象
        dist = {};
      }
      for(let key in target){
          dist[key] = deepClone(target[key]);
      }
      return dist;
  }else{
      return target;
  }
}
const result = deepClone(obj1)
console.log(result.foo(1))
console.log(result.foo === obj1.foo)