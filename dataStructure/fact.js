/**
 * Execution       :   1. default node          : cmd> node fact.js
 *                      2. if nodemon installed  : cmd> nodemon fact.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :   To find the Factorial
 * 
 * 
 *  @file           : fact.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 16-jan-2019
 */
module.exports={
findFactorial(num)
{
    var fact=1;
    for(let i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    return fact;
}
}
