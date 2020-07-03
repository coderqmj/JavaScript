var arr = [3, 5, 6, 5, 9, 8, 10, 5, 7, 7, 10, 7, 7, 7, 7, 10, 10, 10, 10, 10];
function max(array) {
  let map = new Map()
  let max = 0;
  let yuansu = 0
  for (var i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      let value = map.get(array[i]) + 1
      map.set(array[i], value)
      if (max < value) {
        max = value
        yuansu = array[i]
      }
    } else {
      map.set(array[i], 0)
    }
  }
  return [yuansu, max]
}
console.log(max(arr))