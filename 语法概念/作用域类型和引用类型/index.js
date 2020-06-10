function Person(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}
function f1(person) {
  person.name = "Ls";
  person = new Person("aa", 18, 10);
}
var p = new Person("zs", 18, 1000);
// console.log(p instanceof Object)
console.log(p.name); // zs 
console.log(p)
f1(p);
console.log(p)
console.log(p.name);
