函数式编程的应用:
- ES6的箭头函数、Redux引入Elm、React16.6的React.memo(),使得纯函数组件成为可能

例子找出年龄大于18的名字：

```
const users = [
  {
    age: 10,
    name: '张三',
  }, {
    age: 20,
    name: '李四'
  }, {
    age: 30,
    name: '王五'
  }
];
// 过程式
let names =[]
for (i = 0; i < users.length; i++) {
  if(users[i].age>15) {
    names.push(users[i].name)
  }
}
// 函数式
const names = users.fliter(u=> u.age > 15).map(u => u.name)
```

-+