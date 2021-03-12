function deepTraversal(node){
  let nodes=[];
  if(node!=null){
      nodes.push[node];
      let childrens=node.children;
      for(let i=0;i<childrens.length;i++)
          deepTraversal(childrens[i]);
  }
  return nodes;
}

let dfs = function (nodes) {
  let result = [];
  let stack = [];
  stack.push(nodes);
  while(stack.length) { // 等同于 while(stack.length !== 0) 直到栈中的数据为空
      let node = stack.pop(); // 取的是栈中最后一个j
      result.push(node.value);
      if(node.right) stack.push(node.right); // 先压入右子树
      if(node.left) stack.push(node.left); // 后压入左子树
  }
  return result;
}
