const cusGetElementByIdByDFS = function (parentNode, id) {
  // 深度优先, 递归实现
  if (parentNode) {
    let target = null;
    const children = Array.from(parentNode.children);
    if (parentNode.id === id) {
      return parentNode;
    }
    for (let i = 0; i < children.length; i++) {
      target = cusGetElementByIdByDFS(children[i], id);
      if (target) {
        return target;
      }
    }
  }
  return null;
}
// 
const parentDOM = document.querySelector('#container');
function  deepTravalSal(node){
	const nodes = [];
	const stack = [];
	if(node){
		stack.push(node);
		while(stack.length){
			const item = stack.pop();
			const len = item.children.length;
			nodes.push(item);
			for(let i = len - 1; i >= 0; i--){
				stack.push(item.children[i])
			}
		}
	}
	return nodes;
}
