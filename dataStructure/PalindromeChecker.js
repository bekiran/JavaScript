/**
 * Execution       :   1. default node          : cmd> node PalindromeChecker.js
 *                      2. if nodemon installed  : cmd> nodemon PalindromeChecker.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :   To chech the given string is Palindrome or not.
 * 
 * 
 *  @file           : PalindromeChecker.js
 *  @overview       : To chech the given string is Palindrome or not useing Dequeue.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 19-jan-2019
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