import { createEmptyMinBST, insert, remove, printTree, getMin } from "functional-data-structure/src/datatype/MinBST.js";

var tree = createEmptyMinBST()
var tree =  insert(tree,10)
var tree =  insert(tree,1)
var tree =  insert(tree,-2)
var tree =  insert(tree,-3)
var tree =  insert(tree,-10)
var tree =  insert(tree,10)
var tree =  insert(tree,20)
var finalTree =  insert(tree,2)

console.log(getMin(finalTree));
// printTree(remove(finalTree,-2))