// let obj = {
//   foo() {
//     console.log(this)
//   }
// }
// obj.foo()

// let bar = obj.foo

// bar.apply(obj)

function foo() {
  console.log('foo1')
}
foo()

function foo() {
  console.log('foo2')
}
foo()