/**
 * Execution       :   1. default node          : cmd> node PrimeAnagramRevers.js
 *                      2. if nodemon installed  : cmd> nodemon PrimeAnagramRevers.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :  To check the Prime Numbers that are Anagram in the Range of 0 - 1000 
 *                    in a Stack using the Linked List and Print the Anagrams in the Reverse Order.
 * 
 * 
 *  @file           : PrimeAnagramRevers.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 16-jan-2019
 */
var utility=require('../UtilityProgram/utility');
var access=require('../dataStructure/Implementation/StackLinked');
var take=require('util');
function ReverseAnagram()
{
  var arr=[];
  for(let i=0;i<100;i++)
  {
      if(utility.isPrime(i))
      {
        arr.push(i);
      }
  }
  
  var range=100, k=0;
  var stk=new access.StackLinkedList;
  for(let i=0;i<arr.length;i++)
  {
      for(let j=0;j<arr.length;j++)
      {
          if(utility.isAnagram(arr[i],arr[j]))
          {
              stk.push(arr[i]);
              stk.push(arr[j]);
              k++;
          }
      }
  }
  
  console.log("the numbers which are prime and anagram");
    stk.displayAnagram();
    for(let i=0;i<2*k;i++)
    {
        take.print(stk.pop(i));
    }
    
  console.log('\n\n');
}
ReverseAnagram();
