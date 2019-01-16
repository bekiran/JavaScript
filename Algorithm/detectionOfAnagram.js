/******************************************************************************
 *  Execution       :   1. default node          : cmd> node detectionOfAnagram.js
 *                      2. if nodemon installed  : cmd> nodemon detectionOfAnagram.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the unique coupon numbers
 * 
 *  @description    
 * 
 *  @file           : detectionOfAnagram.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var str1=read.question("Please enter the first String : ");
var str2=read.question("Please enter the String to be determined : ");
var ans=Access.isAnagram(str1,str2);
console.log(ans);