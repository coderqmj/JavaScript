Number.prototype.add = function(number) {
  return this + number
}
Number.prototype.mins = function(number) {
  return this - number
}
console.log((5).add(3).mins(2))