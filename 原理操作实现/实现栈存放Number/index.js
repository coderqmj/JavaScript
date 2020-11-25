/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.stack = []
  this.maxStack = []
};
MyStack.prototype.push = function(x) {
  if(typeof x !== 'number') {
    throw TypeError(`${x} is not a number`)
  }
  this.stack[this.stack.length] = x;
  this.maxStack[this.maxStack.length]=x;
  this.maxStack.length>1 && this.maxStack.sort((a,b)=>a-b)
  return this.stack.length;
};
MyStack.prototype.pop = function() {
  if(this.stack.length === 0) return undefined
  let popEle = this.stack[this.stack.length-1]
  this.stack.length -= 1

  this.maxStack.splice(this.maxStack.indexOf(popEle),1)
  return popEle
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.maxN = function(n) {
  return this.maxStack[this.maxStack.length-n-1]
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.stack[this.stack.length-1]
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.stack.length > 0 ? false : true
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/