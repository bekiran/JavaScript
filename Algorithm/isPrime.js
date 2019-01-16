/******************************************************************************
 *  Execution       :   1. default node          : cmd> node isPrime.js 
 *                      2. if nodemon installed  : cmd> nodemon isPrime.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the unique coupon numbers
 * 
 *  @description    
 * 
 *  @file           : isPrime.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var number=read.question("Please enter the number to be determined: ");
var ans=Access.isPrime(number);
console.log(ans);