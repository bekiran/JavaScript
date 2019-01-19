/**
 * Execution       :   1. default node          : cmd> balancedParentheses.js
 *                      2. if nodemon installed  : cmd> balancedParentheses.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :    Read the Text from a file, split it into words and arrange it as Linked List.
 *                  Take a user input to search a Word in the List. If the Word is not found then 
 *                  add it to the list, and if it found then remove the word from the List. In the 
 *                  end save the list into a file.
 * 
 * 
 *  @file           : balancedParentheses.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 */

 function balancedExpressiond()
 {
    var utility=require('../dataStructure/utility')
    var bal=utility.balancedExpression();
    if(bal)
    {
        console.log("String is blanced");
    }
    else
    {
        console.log("string is not blance")
    }
}
balancedExpression()