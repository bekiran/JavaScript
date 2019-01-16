/******************************************************************************
 *  Execution       :   1. default node          : cmd> node isPalimdrome2String.js 
 *                      2. if nodemon installed  : cmd> nodemon isPalimdrome2String.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the unique coupon numbers
 * 
 *  @description    
 * 
 *  @file           : isPalimdrome2String.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var num1=read.question("Please enter the number to be determined: ");
var num2=read.question("Please enter the number to be determined: ");
var ans=Access.isPalimdrome2String(num1,num2);
console.log(ans);
