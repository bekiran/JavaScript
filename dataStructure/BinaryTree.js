var utility = require('../dataStructure/fact')
var read=require('readline-sync')
var num=read.questionInt("Enter the number : ");
var fact=utility.findFactorial(num)
var fact1=utility.findFactorial(num*2)
var fact2=utility.findFactorial(num+1)
var b=fact1/(fact2*fact);
console.log(b)