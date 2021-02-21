// 浅拷贝的实现;

function shallowCopy(object) {
  // 只拷贝对象
  if (!object || typeof object !== "object") return;

  // 根据 object 的类型判断是新建一个数组还是对象
  let newObject = Array.isArray(object) ? [] : {};

  // 遍历 object，并且判断是 object 的属性才拷贝
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}

let print = () => {
  console.log('aa')
}
let obj3 = {
  address: 'jiangxi',
  price: 180
}
let obj = {
  name: 'qmj',
  age: 18,
  house: obj3,
  foo: print,
  a: undefined
}
let obj1 = { ...obj };
let obj2 = Object.assign({}, obj)

console.log(obj1.house === obj.house);
console.log(obj2);