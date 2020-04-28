class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    // 1.获取文档碎片对象 放入内存中会减少页面的回流和重绘
    const fragment = this.node2Fragment(this.el)

    // 2.编译模板
    this.compile(fragment)
    // 3.将子元素追加到根元素上
    this.el.appendChild(fragment)
  }
  // 编译模板
  compile(fragment) {
    // 1.获取所有子节点
    const childNodes = fragment.childNodes;
    [...childNodes].forEach(child => {
      // console.log(child)
      if(this.isElementNode(child)) {
        // 是节点元素
        console.log(child)
        // 编译元素节点
        this.compileElement(child)
      }else {
        // 文本节点
        // 编译文本节点
        console.log('文本节点',child)
        this.compileText(child)
      }
      if(child.childNodes && child.childNodes.lenth) {
        this.compile(child)
      }
    })
  }
  compileElement(node) {

  }
  compileText(node) {
    
  }
  // 获取到所有节点
  node2Fragment(el) {
    // const childNodes = node.chlidNodes;
    // 创建文档碎片
    const f = document.createDocumentFragment();
    let firstChild;
    while(firstChild = el.firstChild) {
      f.appendChild(firstChild);
    }
    return f
  }
  // 判断是否为节点
  isElementNode(node) {
    return node.nodeType === 1;
  }
}

class Vue {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;
    if (this.$el) { // 有值的操作
      // 1.观察者
      // 2解析器
      new Compile(this.$el, this)
      // console.log(options)
    }
  }
}