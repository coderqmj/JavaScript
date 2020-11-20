Number.prototype.add = function(number)  {
  if(typeof number !== 'number'){
    throw TypeError(`${number} is not a number`)
  }
  return this + number;
}

Number.prototype.minus = function(number) {
  if(typeof number !== 'number') {
    throw TypeError(`${number} is not a number`)
  }
  return this - number
}

// let arr = [1,2,3,5]
// console.log(arr.slice(0,3).concat([1,3,6]))
var merge = function(A, m, B, n) {
  for(let i =m;i<A.length;i++) {
    A[i] = B[i-n]
  } 
  A.sort((a,b) => a-b)
  
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))