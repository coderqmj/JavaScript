function foo() {}

const f1 = new foo();
const f2 = new foo();
f1.__proto__ = foo.prototype; // true
f2.__proto__ = foo.prototype; // true

console.log(f1.name); // undefined
// 在f1或者f2的隐式原型或者foo的显式原型中添加任何属性，都能在f1,f2,foo中访问到
f1.__proto__.name = "qmj";
f1.__proto__.age = 18;
f1.name; // qmj
f2.name; // qmj
foo.prototype.name; // qmj

console.log("f1.name", f1.name);
console.log("f2.name", f2.name);
console.log("foo.prototype.name", foo.prototype.age);

console.log(Object.getOwnPropertyDescriptors(foo.prototype));

console.log(foo.prototype);
console.log(foo.prototype.constructor);
