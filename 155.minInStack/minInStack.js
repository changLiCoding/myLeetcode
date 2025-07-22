
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
} 

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
}

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.minStack.length === 0) {
    this.minStack.push(val);
    return;
  }

  let min = this.getMin();
  if (min >= val) {
    min = val;
  }
  this.minStack.push(min);
}

MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
}