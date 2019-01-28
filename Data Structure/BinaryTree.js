/**
 * Execution       :   1. default node          : cmd> node BinaryTree.js
 *                      2. if nodemon installed  : cmd> nodemon BinaryTree.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :  To find the number of different binary search trees that can
 *                    be created using these nodes.
 * 
 * 
 *  @file           : BinaryTree.js
 *  @overview       : To search different binary search tree.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 18-jan-2019
 */
var utility = require('../dataStructure/fact')
var read=require('readline-sync')
var num=read.questionInt("Enter the number : ");
var fact=utility.findFactorial(num)
var fact1=utility.findFactorial(num*2)
var fact2=utility.findFactorial(num+1)
var b=fact1/(fact2*fact);
console.log(b)