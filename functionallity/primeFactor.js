/******************************************************************************
 *  Execution       :   1. default node          : cmd> primeFactor.js
 *                      2. if nodemon installed  : cmd> primeFactor.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To get the prime factorization of user asked number.
 * 
 *  @description    
 * 
 *  @file           : primeFactor.js
 *  @overview       : To check the divisiblity from 2 to sqare root of the number Iteratively.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var number=read.questionInt("Please enter the number to find prime factor : ");
Access.primeFactors(number);