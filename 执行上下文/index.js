let obj = {
  foo() {
    console.log(this)
  }
}
obj.foo()

let bar = obj.foo

bar.apply(obj)