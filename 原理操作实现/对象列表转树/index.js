const List = [
    { id: 1, name: 'child1', parentId: 0 },
    { id: 2, name: 'child2', parentId: 0 },
    { id: 6, name: 'child2_1', parentId: 2 },
    { id: 0, name: 'root', parentId: null },
    { id: 5, name: 'child1_2', parentId: 1 },
    { id: 4, name: 'child1_1', parentId: 1 },
    { id: 3, name: 'child3', parentId: 0 },
    { id: 7, name: 'child3_1', parentId: 3 }
]
// 对象列表转为树结构
function ListToTree(list) {
    const copyList = list.slice(0)
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

function listToTreeList(list) { // 将普通列表转换为树结构的列表
    if (!list || !list.length) {
        return []
    }
    let treeListMap = {};
    for (let item of list) {
        treeListMap[item.id] = item
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i].parentId && treeListMap[list[i].parentId]) {
            if (!treeListMap[list[i].parentId].children) {
                treeListMap[list[i].parentId].children = []
            }
            treeListMap[list[i].parentId].children.push(list[i]);
            list.splice(i, 1);
            i--
        }
    }
    return list
}
const tree = ListToTree(List)
console.log(JSON.stringify(tree))