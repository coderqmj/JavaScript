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