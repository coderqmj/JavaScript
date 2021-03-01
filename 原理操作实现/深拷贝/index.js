function deepCopy(obj) {
  let result = obj.constructor == Array? []: {};
  for(let key in obj){
    result[key] =  typeof result[key] == 'object' ? deepCopy(obj[key]) : obj[key]
  }

  return result
}


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
  foo: function name(params) {
    console.log(aaa)
  }
}

console.log(deepCopy1(obj1))