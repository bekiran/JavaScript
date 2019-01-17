var utillity=require('../dataStructure/linkedList')
var M=require('../UtilityProgram/utility')
var read = require('readline-sync')
var word=read.question("Enter the word to be searched : ")
var arr=M.fileCall()
var k=new utillity.Linkedlist;
for(let i =0;i<arr.length;i++)
{
    k.add(arr[i])
}
console.log(k+" in main")
var b = k.contains(word)
console.log(b)
if(b==true)
{
    k.removeElement(word)
    console.log(word)
}
else
{
    console.log(word)
}
var output=k.display()
console.log(output)
