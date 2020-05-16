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
let names =[]
for (i = 0; i < users.length; i++) {
  if(users[i].age>15) {
    names.push(users[i].name)
  }
}
console.log(names)