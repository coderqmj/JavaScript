// Number.prototype.add = function(number) {
//   return this + number
// }
// Number.prototype.mins = function(number) {
//   return this - number
// }
// console.log((5).add(3).mins(2))

var arr = [1,2,3,4,5,6,7,8,9,10];
arr.sort(function(){
    return Math.random() - 0.5;
})
console.log(arr);