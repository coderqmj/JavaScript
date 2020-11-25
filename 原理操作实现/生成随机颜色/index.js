// const RandomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
function randomColor() {
  return "#"+ 
  Math.floor(Math.random() * 0xffffff)
  .toString(16);
}
// 哈希转rgb
function hexToRgb(hex) {
  return "rgb(" + 
  parseInt("0x" + hex.slice(1, 3)) + 
  "," + parseInt("0x" + hex.slice(3, 5)) + 
  "," + parseInt("0x" + hex.slice(5, 7)) + ")";
}

// 哈希转rgba
function hexToRgba(hex, opacity) {
  return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")";
}


console.log(hexToRgb('#ffffff'))
console.log(parseInt('0xff'))