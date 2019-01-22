/**
 * Execution       :   1. default node          : cmd> node bank.js
 *                      2. if nodemon installed  : cmd> nodemon bank.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :   Implementation of Stack using LinkedList
 * 
 * 
 *  @file           : bank.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 16-jan-2019
 */
var access=require('../dataStructure/Implementation/Dequeue');
var readline=require('readline-sync');
function check()
{
    var take=new access.Dequeue;
  var answer=readline.question("Enter the string : ");
  var result=take.PalindromeChecker(answer);
  if(result==false)
  {
      console.log("String is not a Palindrome ");
  }
  else
  {
      console.log("String is a palindrome ");
  }
}
check();