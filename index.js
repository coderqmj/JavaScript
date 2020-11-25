// add(1,2,3)
function add(a) {
  function sum(b) { // 使用闭包
    a = a + b; // 累加
    return sum;
  }
  sum.toString = function () { // 重写toSting() 方法
    return a;
  }
  return sum; // 返回一个函数
}
// add(1,2,3), 只需要取出参数就行
function add1(...args) {
  return args.reduce((prev, val) => prev + val)
}
// .add()实现
Number.prototype.add = function (number) {
  if (typeof number !== 'number') {
    throw TypeError(`${number} is not a number`)
  }
  return this + number;
}

Number.prototype.minus = function (number) {
  if (typeof number !== 'number') {
    throw TypeError(`${number} is not a number`)
  }
  return this - number
}
//一维转二维
function foo(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length;) {
    newArr.push(arr.slice(i, i += num))
  }
  return newArr
}
function splits(arr, num) {
  return [arr.splice(0, num), arr];
}

// 统计当前网页h开头元素
function countStartWithH() {
  const countObj = {};
  helper(document.documentElement, countObj);
  return countObj;
}
function helper(node, countObj) {
  let count = 0
  if (node === null) {
    return null;
  }
  const nodeName = node.nodeName;
  if (nodeName.toLowerCase().charAt(0) === 'h') {
    // 当前对象中没有这个nodename
    if (!countObj[nodeName]) {
      countObj[nodeName] = 1;
    } else {
      // 已经有了
      countObj[nodeName] += 1;
    }
  }
  // 当前元素有子元素
  if (node.children.length !== 0) {
    // 遍历子元素
    for (let i = 0; i < node.children.length; i++) {
      helper(node.children[i], countObj);
    }
  }
}

// 普通递归,控制层数
const flatten = (arr, num) => {
  let result = [];
  arr.forEach((item, i, arr) => {
    if (Array.isArray(item) && num != 0) {
      num--;
      result = result.concat(flatten(item, num));
    } else {
      result.push(arr[i])
    }
  })
  return result;
};
// 随机生成颜色哈希
function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}
// 哈希转rgb
function hexToRgb(hex) {
  return "rgb(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + ")";
}
// 合并数组
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
  }
  // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
  arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};

// 对象列表转为树结构
function ListToTree(list) {
  console.log(list)
  const copyList = list.slice(0)
  console.log(copyList)
  const tree = []
  for (let i = 0; i < copyList.length; i++) {
    // 找出每一项的父节点，并将其作为父节点的children
    for (let j = 0; j < copyList.length; j++) {
      if (copyList[i].parentId === copyList[j].id) {
        if (copyList[j].children === undefined) {
          copyList[j].children = []
        }
        copyList[j].children.push(copyList[i])
      }
    }
    // 把根节点提取出来，parentId为null的就是根节点
    if (copyList[i].parentId === null) {
      tree.push(copyList[i])
    }
  }
  return tree
}

// sort 并不是真正的乱序
// 计算机的 random 函数因为循环周期的存在，无法生成真正的随机数
Array.sort((a,b) => 0.5-Math.random())

// 洗牌算法
function shuffle(arr) {
  for (let i=arr.length-1; i>=0; i--) {
      let rIndex = Math.floor(Math.random()*(i+1));
      [arr[i],arr[rIndex]] = [arr[rIndex],arr[i]]
  }
  return arr;
}