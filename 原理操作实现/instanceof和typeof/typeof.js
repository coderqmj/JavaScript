function getType(temp) {
  var str = temp.constructor.toString();
  console.log(str)
  return str.slice(9, str.indexOf('(')).toLowerCase();
}
getType('abc')
getType(123)
// getType(undefined)
getType(true)