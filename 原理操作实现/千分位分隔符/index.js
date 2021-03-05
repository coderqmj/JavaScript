/**
 * @description 分开小数点，整数部分反转，添加 “，”，最后有小数则拼接，没有则返回
 * @param {number} num 
 */

function numFormat(num) {
  let number = num.toString().split('.');
  let arr = number[0].split("").reverse();
  let res = [];
  for(let i =0;i<arr.length;i++) {
    if(i%3===0 && i!==0) {
      res.push(',')
    }
    res.push(arr[i]);
  }
  console.log(res, arr)
  
  return number[1] ? res.reverse().join("")+ "."+number[1] : res.reverse().join("");
}

console.log(numFormat('112345345.666'))