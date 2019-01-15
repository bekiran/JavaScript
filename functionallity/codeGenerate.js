/******************************************************************************
 *  Execution       :   1. default node          : cmd> node codeGenerate.js 
 *                      2. if nodemon installed  : cmd> nodemon codeGenerate.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the unique coupon numbers
 * 
 *  @description    
 * 
 *  @file           : codeGenerate.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var number=read.questionInt("Enter number to generate coupon : ");
Access.couponCodeGenerate(number);