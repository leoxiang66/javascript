import { createEmptyMaxBST, insert, remove, printTree, getMax } from "functional-data-structure/src/datatype/MaxBST.js";

var tree = createEmptyMaxBST()
tree =  insert(tree,10)
tree =  insert(tree,1)
tree =  insert(tree,-2)
tree =  insert(tree,-3)
tree =  insert(tree,-10)
tree =  insert(tree,10)
tree =  insert(tree,20)
tree =  insert(tree,2)

console.log(getMax(tree));


tree = remove(tree,20)
console.log(getMax(tree))

tree = remove(tree,10)
console.log(getMax(tree))

tree = remove(tree, 10)
console.log(getMax(tree))

console.log("print tree:")
printTree(tree)