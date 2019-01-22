/**
 * Execution       :   1. default node          : cmd> node unOrdered.js
 *                      2. if nodemon installed  : cmd> nodemon unOrdered.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :    Read the Text from a file, split it into words and arrange it as Linked List.
 *                  Take a user input to search a Word in the List. If the Word is not found then 
 *                  add it to the list, and if it found then remove the word from the List. In the 
 *                  end save the list into a file.
 * 
 * 
 *  @file           : unOrdered.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 16-jan-2019
 */
 
var utillity=require('../dataStructure/Implementation/linkedList')
var M=require('../UtilityProgram/utility')
var read = require('readline-sync')
var word=read.question("Enter the word to be searched : ")
var arr=M.fileCall()
var k=new utillity.LinkedList;
for(let i =0;i<arr.length;i++)
{
    k.add(arr[i])
}
var b = k.search(word)
console.log(b)
if(b==true)
{
    console.log(word)
    k.remove(word)
    var output=k.show()
    M.writeFile('File.txt',output)
    console.log(output)
}
else
{
    k.add(word)
    var output=k.show()
    console.log(output)
    M.writeFile('File.txt',output)
}
